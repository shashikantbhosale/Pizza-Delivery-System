namespace Pizza_Delivery_System.Models
{
    public class Pizza : BaseModel
    {
        public string Image { get; set; }
        public decimal Totalprice { get; set; }
        public string? Description { get; set; }
        public List<PizzaItem> Sauce { get; set; }
        public List<PizzaItem> Toppings { get; set; }
        public List<PizzaItem> Cheese { get; set; }
        public List<PizzaItem> Size { get; set; }
        public Pizza()
        {
            Image = string.Empty;
            Sauce = new List<PizzaItem>();
              Toppings = new List<PizzaItem>();
            Cheese = new List<PizzaItem>();
            Size = new List<PizzaItem>();

        }

    }
}
