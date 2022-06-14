using Pizza_Delivery_System.Data;
using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Service
{
    public class OrderService : IOrderService
    {
        private readonly IOrderDataManager _orderDataManager;
        public OrderService(IOrderDataManager orderDataManager)
        {
            _orderDataManager = orderDataManager;
        }

        public bool SaveOrder(Order order)
        {
            return _orderDataManager.SaveOrder(order);
        }
        public List<Order> GetOrders(int UserId)
        {
            return _orderDataManager.GetOrders(UserId);
        }
    }
}
