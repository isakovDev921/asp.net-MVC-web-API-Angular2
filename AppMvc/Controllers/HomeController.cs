using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using AppMvc.Models;

namespace AppMvc.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {
            var user = await GetUser();
            return View(user);
        }

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





        private async Task<User> GetUser()
        {
            var user = new User();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new System.Uri("http://localhost:59470/");

                var response = await client.GetAsync("api/app/GetUserName");

                user.UserName = response.IsSuccessStatusCode ? await response.Content.ReadAsStringAsync() : string.Empty;
            }

           
            return user;
        }
    }
}