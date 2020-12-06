using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("User")]
    public class User 
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public  DateTime BirthDate { get; set;}
        public int Age { get; set; }

        [ForeignKey("ContactInfoID")]
        public ContactInfo contactInfo { get; set; }

        [ForeignKey("RoleID")]
        public Role Role { get; set; }

        public ICollection<CreditCard> CreditCards { get; set; }
        public ICollection<Stadium> Stadiums { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
