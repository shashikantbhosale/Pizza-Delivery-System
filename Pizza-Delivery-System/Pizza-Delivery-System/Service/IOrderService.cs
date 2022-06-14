using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Service
{
    public interface IOrderService
    {
        bool SaveOrder(Order order);
        List<Order> GetOrders(int UserId);
    }
}
