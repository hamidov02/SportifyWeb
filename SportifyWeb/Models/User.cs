using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class User
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ContactInfo contactInfo { get; set; }
        public Role role { get; set; }
        public ICollection<CreditCard> CreditCards { get; set; }
        public ICollection<Stadium> Stadiums { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
