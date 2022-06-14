using Microsoft.AspNetCore.Mvc;
using Pizza_Delivery_System.Models;
using Pizza_Delivery_System.Service;
using System.Net;

namespace Pizza_Delivery_System.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase

    {
        private readonly IOrderService _OrderService;
        public OrderController(IOrderService OrderService)
        {
            _OrderService = OrderService;
        }



        [HttpPost(Name = "SaveOrder")]
        public IActionResult Save(Order order)
        {
            try
            {
                if (!_OrderService.SaveOrder(order))
                {
                    return StatusCode((int)HttpStatusCode.BadRequest,false);

                }
                else
                {
                    return StatusCode((int)HttpStatusCode.OK, "Order saved Successfully"); 
                }
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message); 
            }
           
        }

        [HttpGet(Name = "GetOrdersByUserId")]
        public IActionResult get(int UserId)
        {
            try
            {
              var orders=  _OrderService.GetOrders(UserId);
                if(orders!=null && orders.Count>0)
                {
                    return StatusCode((int)HttpStatusCode.OK, orders);
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
