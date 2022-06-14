namespace Pizza_Delivery_System.Models
{
    public class Order : BaseModel
    {
       public int UserId { get; set; }
       public List<Pizza> OrderItem { get; set; }
       public string DeliveryAddress { get; set; }
       public DateTime OrderDate { get; set; }
       public string Status { get; set; }
       public Decimal OrderTotal { get; set; }

     public Order()
        {
            OrderItem = new List<Pizza>();

        }
    }
}
