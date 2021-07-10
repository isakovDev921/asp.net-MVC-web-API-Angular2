
using System.Web.Http;

namespace AppApi.Controllers
{
    public class AppController : ApiController
    {
        [HttpGet]
        public string GetUserName() 
        {
            return "Valentin Dudnik";
        }
    }
}