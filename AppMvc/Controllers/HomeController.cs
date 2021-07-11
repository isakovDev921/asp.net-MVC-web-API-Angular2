using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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



        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}