using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using AppMvc.Models;
using Newtonsoft.Json;

namespace AppMvc.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {
          
            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");

                var response = await client.GetAsync("api/app/GetProducts");

                string result = response.IsSuccessStatusCode ? await response.Content.ReadAsStringAsync() : string.Empty;

                var test = JsonConvert.DeserializeObject<List<Product>>(result);
            }


            return View();
        }

       
        public async Task<JsonResult> GetTestString()
        {
            string result = "init server MVC";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");

                var response = await client.GetAsync("api/app/GetProduct");

                 result = response.IsSuccessStatusCode ? await response.Content.ReadAsStringAsync() : string.Empty;
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public async Task<ActionResult> CreateUser(User user)
        {
           
            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");
                var json = Newtonsoft.Json.JsonConvert.SerializeObject(user);
                var data = new System.Net.Http.StringContent(json, Encoding.UTF8, "application/json");

                var result = await client.PostAsync("/api/app/CreateUser", data);
                string resultContent = await result.Content.ReadAsStringAsync();
            }

            return Json("Success", JsonRequestBehavior.AllowGet);
        }
        




        //private async Task<User> GetUser()
        //{
        //    var user = new User();

        //    using (var client = new HttpClient())
        //    {
        //        client.BaseAddress = new System.Uri("http://localhost:59470/");

        //        var response = await client.GetAsync("api/app/GetProducts");

        //        user.FirstName = response.IsSuccessStatusCode ? await response.Content.ReadAsStringAsync() : string.Empty;
        //    }

        //    return user;
        //}



        public ActionResult User()
        {

            return View();
        }

      
    }
}