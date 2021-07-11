using System.Collections.Generic;

namespace AppApi.Models
{
    public class HomeViewModel
    {
        public List<Product> Products { get; set; }
        public List<Purchase> Purchases { get; set; }
    }
}