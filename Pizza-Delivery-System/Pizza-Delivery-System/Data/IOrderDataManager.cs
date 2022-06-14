using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Data
{
    public interface IOrderDataManager
    {
        public bool SaveOrder(Order order);
        public List<Order> GetOrders(int UserId);
    }
}
