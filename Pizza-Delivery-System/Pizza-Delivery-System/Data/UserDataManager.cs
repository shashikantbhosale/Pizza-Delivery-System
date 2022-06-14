using Newtonsoft.Json;
using Pizza_Delivery_System.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Pizza_Delivery_System.Data
{
    public class UserDataManager:IuserDataManager
    {     private static readonly JsonSerializerOptions _options =
       new() { DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };
        public readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment;
        public UserDataManager(Microsoft.AspNetCore.Hosting.IHostingEnvironment environment)

        {
            _environment = environment;
        }
        public bool SaveUser(User user)
        {

            List<User> users = new List<User>();
            var rootPath = _environment.ContentRootPath;
            var fullPath = Path.Combine(rootPath, "ApplicationData/users.json");
            try
            {
                if (File.Exists(fullPath))
                {
                    var jsonData = System.IO.File.ReadAllText(fullPath);

                    if (string.IsNullOrWhiteSpace(jsonData))
                    {
                        users.Add(user);
                        var jsonString = System.Text.Json.JsonSerializer.Serialize(users, _options);
                        File.WriteAllText(fullPath, jsonString);
                        return true;
                    }
                    else
                    {
                        users = JsonConvert.DeserializeObject<List<User>>(jsonData); //deserialize object as a list of users in accordance with your json file
                        users.Add(user);
                        var jsonString = System.Text.Json.JsonSerializer.Serialize(users, _options);
                        File.WriteAllText(fullPath, jsonString);
                        return true;
                    }

                }
                else
                {
                    using (var stream = File.Create(fullPath))
                    {

                    }

                    users.Add(user);
                    var jsonString = System.Text.Json.JsonSerializer.Serialize(users, _options);
                    File.WriteAllText(fullPath, jsonString);
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }


        }
    }
}
