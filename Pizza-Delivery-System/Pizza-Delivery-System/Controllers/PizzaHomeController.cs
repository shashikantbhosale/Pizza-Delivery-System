using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizza_Delivery_System.Models;
using Pizza_Delivery_System.Service;
using System.Net;

namespace Pizza_Delivery_System.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PizzaHomeController : ControllerBase

    {
        private readonly IPizzaHomeService _pizzaHomeService;
       public PizzaHomeController(IPizzaHomeService pizzaHomeService)
        {
            _pizzaHomeService= pizzaHomeService;
        }



        [HttpGet(Name = "GetAllPizza")]
        public IActionResult All()
        {
           
            try
            {
                var pizzaList = _pizzaHomeService.All();
                if (pizzaList != null && pizzaList.Count > 0)
                {
                    return StatusCode((int)HttpStatusCode.OK, pizzaList);
                }
                else
                {
                    return StatusCode((int)HttpStatusCode.NoContent, "No Data Found");
                }


            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
