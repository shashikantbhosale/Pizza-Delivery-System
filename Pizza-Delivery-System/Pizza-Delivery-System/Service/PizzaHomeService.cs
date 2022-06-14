using Pizza_Delivery_System.Data;
using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Service
{
    public class PizzaHomeService : IPizzaHomeService
    {
        private readonly IPizzaHomeDataManager _pizzaHomeDataManager;
        public PizzaHomeService(IPizzaHomeDataManager pizzaHomeDataManager)
        {
            _pizzaHomeDataManager= pizzaHomeDataManager;
        }
        public List<Pizza> All()
        {
            return  _pizzaHomeDataManager.All();
        }
    }
}
