using Newtonsoft.Json;
using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Data
{
    public class PizzaHomeDataManager : IPizzaHomeDataManager
    {
        public readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment;
        public PizzaHomeDataManager(Microsoft.AspNetCore.Hosting.IHostingEnvironment environment)
        
        {
            _environment = environment;
        }

        public List<Pizza> All()
        {
            try
            {
                List<Pizza> pizzaList = new List<Pizza>();
                var rootPath = _environment.ContentRootPath;

                var fullPath = Path.Combine(rootPath, "ApplicationData/pizzaList.json");

                var jsonData = System.IO.File.ReadAllText(fullPath);

                if (string.IsNullOrWhiteSpace(jsonData)) return null;

                pizzaList = JsonConvert.DeserializeObject<List<Pizza>>(jsonData);

                if (pizzaList == null || pizzaList.Count == 0) return null;

                return pizzaList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
           
        }
    }
}
