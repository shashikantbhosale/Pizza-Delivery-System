using Microsoft.AspNetCore.Mvc;
using Pizza_Delivery_System.Models;
using Pizza_Delivery_System.Service;
using System.Net;

namespace Pizza_Delivery_System.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController :ControllerBase
    {
        private readonly IUserService _OrderService;
        public UserController(IUserService OrderService)
        {
            _OrderService = OrderService;
        }



        [HttpPost(Name = "SaveUser")]
        public IActionResult Save(User user)
        {
            try
            {
                if (!_OrderService.SaveUser(user))
                {
                    return StatusCode((int)HttpStatusCode.BadRequest, false);

                }
                else
                {
                    return StatusCode((int)HttpStatusCode.OK, "User saved Successfully");
                }
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }

        }
    }
}
