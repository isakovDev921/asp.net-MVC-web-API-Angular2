using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serilog;

namespace AppApi
{
    public static class Logger
    {
        private static readonly ILogger _logger;

        static Logger()
        {
        _logger = new LoggerConfiguration()
            .WriteTo.File(HttpContext.Current.Server.MapPath("~/logs/log-.txt"),
                rollingInterval: RollingInterval.Day)
            .CreateLogger();
        }
        public static void LogInfo(string info)
        {
            _logger.Information(info);
        }
        public static void LogError(string error)
        {
            _logger.Error(error);
        }
    }
}