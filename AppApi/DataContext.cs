using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using AppApi.Models;

namespace AppApi
{
    public class DataContext: DbContext
    {
        public DataContext() : base("DataContext")
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
    

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Product>().HasMany(d => d.Users)
        //        .WithMany(s => s.Products)
        //        .Map(t => t.MapLeftKey("ProductId"))
        //        .Map(f => f.MapRightKey("UserId")
        //            .ToTable("ProductsUsers"));
        //}
    }
}