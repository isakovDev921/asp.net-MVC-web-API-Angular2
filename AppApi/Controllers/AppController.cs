
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using AppApi.Models;
using Serilog;


namespace AppApi.Controllers
{
    public class AppController : ApiController
    {
        [HttpGet]
        public List<Product> GetProducts() 
        {
            var productsList = new List<Product>();

            using (var dataContext = new DataContext())
            {
                productsList = dataContext.Products.ToList();
              
            }

            return productsList;
        }

        [HttpGet]
        public string GetProduct()
        {
            var productsList = new List<Product>();

            using (var dataContext = new DataContext())
            {
                productsList = dataContext.Products.ToList();
            }
            return productsList[0].Name;
        }


    
        public async Task<IHttpActionResult> CreateUser(User user)
        {
            try
            { 

               
            }
            catch (Exception ex)
            {
                Logger.LogError("Tfdsfsdf!");
            }
           




            using (var dataContext = new DataContext())
            {
                dataContext.Users.Add(user);
                await dataContext.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateUser2(User user)
        {
            using (var dataContext = new DataContext())
            {
                dataContext.Users.Add(user);
                await dataContext.SaveChangesAsync();
            }
            return Ok();
        }
    }
}