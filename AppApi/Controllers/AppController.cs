
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

        [HttpPost]
        public async Task<IHttpActionResult> DeleteUser(User user)
        {
            try
            {
                using (var dataContext = new DataContext())
                {
                    var dataContextUser = dataContext.Users.FirstOrDefault(d => d.Id == user.Id);
                    if (dataContextUser != null)
                    {
                        dataContext.Entry(dataContextUser).State = EntityState.Deleted;
                        await dataContext.SaveChangesAsync();
                    }
                }
                Logger.LogInfo($"Пользоватеь с ID:{user.Id} удален");
            }
            catch (Exception ex)
            {
                Logger.LogError($"ERROR: {ex} :Неудачное удаление пользователя {user.Id}");
                return BadRequest();
            }
            return Ok();
        }

    }
}