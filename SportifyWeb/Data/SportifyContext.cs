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
        public DbSet<ContactInfo> Users { get; set; }
        public DbSet<Stadium> Users { get; set; }
        public DbSet<StadiumActivity> Users { get; set; }
        public DbSet<Order> Users { get; set; }
        public DbSet<Payment> Users { get; set; }
        public DbSet<CreditCard> Users { get; set; }
    }
}
