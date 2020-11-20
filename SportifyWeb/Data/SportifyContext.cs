using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using SportifyWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Data
{
    public class SportifyContext: DbContext
    {
        public SportifyContext(DbContextOptions<SportifyContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Adress> Adresses { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<ContactInfo> ContactInfos { get; set; }
        public DbSet<Stadium> Stadiums { get; set; }
        public DbSet<StadiumActivity> StadiumActivities { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<CreditCard> CreditCards { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Role>().ToTable("Role");
            modelBuilder.Entity<ContactInfo>().ToTable("ContactInfo");
            modelBuilder.Entity<Adress>().ToTable("Adress");
            modelBuilder.Entity<Stadium>().ToTable("Stadium");
            modelBuilder.Entity<CreditCard>().ToTable("CreditCard");
            modelBuilder.Entity<StadiumActivity>().ToTable("StadiumActivity");
            modelBuilder.Entity<Order>().ToTable("Order");
            modelBuilder.Entity<Payment>().ToTable("Payment");
        }
    }
}
