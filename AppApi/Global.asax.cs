using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace AppApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
          Logger.LogInfo("Start WebApi");
          GlobalConfiguration.Configure(WebApiConfig.Register);
        }
      
    }
}
