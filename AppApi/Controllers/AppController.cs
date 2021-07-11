
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AppApi.Models;

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
    }
}