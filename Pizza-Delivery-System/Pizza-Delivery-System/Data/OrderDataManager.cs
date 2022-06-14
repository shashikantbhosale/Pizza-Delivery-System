using Newtonsoft.Json;
using Pizza_Delivery_System.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Pizza_Delivery_System.Data
{
    public class OrderDataManager : IOrderDataManager
    {
        private static readonly JsonSerializerOptions _options =
       new() { DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };
       
        public readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment;
        public OrderDataManager(Microsoft.AspNetCore.Hosting.IHostingEnvironment environment)

        {
            _environment = environment;
        }


        public bool SaveOrder(Order order)
        {
            List<Order> orders = new List<Order>();
           

            var rootPath = _environment.ContentRootPath;
            var fullPath = Path.Combine(rootPath, "ApplicationData/orders.json");
            try
            {
                if (File.Exists(fullPath))
                {
                    var jsonData = System.IO.File.ReadAllText(fullPath);

                    if (string.IsNullOrWhiteSpace(jsonData))
                    {
                        orders.Add(order);
                        var jsonString = System.Text.Json.JsonSerializer.Serialize(orders, _options);
                        File.WriteAllText(fullPath, jsonString);
                        return true;
                    }
                    else
                    {
                        orders = JsonConvert.DeserializeObject<List<Order>>(jsonData); //deserialize object as a list of users in accordance with your json file
                        orders.Add(order);
                        var jsonString = System.Text.Json.JsonSerializer.Serialize(orders, _options);
                        File.WriteAllText(fullPath, jsonString);
                        return true;
                    }

                }
                else
                {
                    using (var stream = File.Create(fullPath))
                    {
                       
                    }
                   
                    orders.Add(order);
                    var jsonString = System.Text.Json.JsonSerializer.Serialize(orders, _options);
                    File.WriteAllText(fullPath, jsonString);
                    return true;
                }
            }
            catch(Exception e)
            {
                return false;
            }
           
            
        }
       public List<Order> GetOrders(int UserId)
        {
            try
            {
                List<Order> Orders = new List<Order>();
                var rootPath = _environment.ContentRootPath;

                var fullPath = Path.Combine(rootPath, "ApplicationData/orders.json");
                if (File.Exists(fullPath))
                {
                    var jsonData = System.IO.File.ReadAllText(fullPath);

                    if (string.IsNullOrWhiteSpace(jsonData)) return null;

                    Orders = JsonConvert.DeserializeObject<List<Order>>(jsonData);

                    if (Orders == null || Orders.Count == 0) return null;

                    return Orders.Where(x => x.UserId == UserId).ToList();
                }
                else
                {
                    return Orders;
                }

                   
            }
            catch(Exception ex)
            {
                throw ex;
            }
           

        }
    }
}
