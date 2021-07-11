using System;

namespace AppApi.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int? ProductId { get; set; }
        public Product Product { get; set; }
    }
}