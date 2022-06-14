namespace Pizza_Delivery_System.Models
{
    public class PizzaItem : BaseModel
    {
      public decimal Price { get; set; }
        public bool Selected { get; set; }
        public PizzaItem()
        {
            Name = string.Empty;
        }
    }
}
