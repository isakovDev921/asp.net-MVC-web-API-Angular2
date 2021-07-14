
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using AppApi.Models;
using Serilog;
using SerilogWeb.Classic.Enrichers;


namespace AppApi.Controllers
{
    public class AppController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> CreateUser(User user)
        {
            try
            {
                using (var dataContext = new DataContext())
                {
                    dataContext.Users.Add(user);
                    await dataContext.SaveChangesAsync();
                }
                Logger.LogInfo($"Добавлен в БД новый пользователь:{user.FirstName}, {user.LastName}, {user.Age}, {user.Email}, {user.Phone}");
            }
            catch (Exception ex)
            {
                Logger.LogError($"ERROR: {ex} :{user.FirstName}, {user.LastName}, {user.Age}, {user.Email}, {user.Phone}");
                return BadRequest();
            }
            return Ok();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetUsers()
        {
            var result = new List<User>();
            try
            {
                using (var dataContext = new DataContext())
                {
                    result = await dataContext.Users.ToListAsync();
                }
                Logger.LogInfo("Запрос данных из БД");

            }
            catch (Exception ex)
            {
                Logger.LogError($"ERROR: {ex} : Неудачный запрос из БД");
                return BadRequest();
            }
            return Ok(result);
        }


        //[HttpGet]
        //public List<Product> GetProducts() 
        //{
        //    var productsList = new List<Product>();

        //    using (var dataContext = new DataContext())
        //    {
        //        productsList = dataContext.Products.ToList();

        //    }

        //    return productsList;
        //}

        //[HttpGet]
        //public string GetProduct()
        //{
        //    var productsList = new List<Product>();

        //    using (var dataContext = new DataContext())
        //    {
        //        productsList = dataContext.Products.ToList();
        //    }
        //    return productsList[0].Name;
        //}



        //[HttpPost]
        //public async Task<IHttpActionResult> CreateUser2(User user)
        //{
        //    using (var dataContext = new DataContext())
        //    {
        //        dataContext.Users.Add(user);
        //        await dataContext.SaveChangesAsync();
        //    }
        //    return Ok();
        //}



    }
}