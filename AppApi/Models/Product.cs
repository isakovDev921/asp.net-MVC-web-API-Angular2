using System.Collections.Generic;

namespace AppApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        //public virtual ICollection<User> Users { get; set; }

        //public Product()
        //{
        //    Users = new List<User>();
        //}
    }
}