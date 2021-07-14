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
            return View();
        }

        public ActionResult User()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> CreateUser(User user)
        {
            string result = "result";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");
                var json = Newtonsoft.Json.JsonConvert.SerializeObject(user);
                var data = new System.Net.Http.StringContent(json, Encoding.UTF8, "application/json");

                var response = await client.PostAsync("/api/app/CreateUser", data);
                result = await response.Content.ReadAsStringAsync();
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }
        
    
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            string result = "result";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");
                var response = await client.GetAsync("/api/app/GetUsers");
                result = response.IsSuccessStatusCode ? 
                    await response.Content.ReadAsStringAsync() : 
                    string.Empty;
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

        public async Task<ActionResult> CreateUser2(string name)
        {

            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new System.Uri("http://localhost:59470/");
            //    var json = Newtonsoft.Json.JsonConvert.SerializeObject(user);
            //    var data = new System.Net.Http.StringContent(json, Encoding.UTF8, "application/json");

            //    var result = await client.PostAsync("/api/app/CreateUser", data);
            //    string resultContent = await result.Content.ReadAsStringAsync();
            //}

            return Json("Success", JsonRequestBehavior.AllowGet);
        }





    }
}