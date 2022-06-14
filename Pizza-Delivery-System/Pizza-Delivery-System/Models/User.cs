namespace Pizza_Delivery_System.Models
{
    public class User:BaseModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public User() { 
            Email=string.Empty; 
            Password=string.Empty;
            FirstName = string.Empty;
            LastName = string.Empty; 
        }
    }
}
