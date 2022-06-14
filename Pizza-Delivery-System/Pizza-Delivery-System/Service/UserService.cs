using Pizza_Delivery_System.Data;
using Pizza_Delivery_System.Models;

namespace Pizza_Delivery_System.Service
{
    public class UserService : IUserService
    {
        private readonly IuserDataManager _userDataManger;
        public UserService(IuserDataManager userDataManger)
        {
            _userDataManger = userDataManger;
        }

        public bool SaveUser(User user)
        {
            return _userDataManger.SaveUser(user);
        }
    }
}
