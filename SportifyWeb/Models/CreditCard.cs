using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class CreditCard
    {
        public int ID { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpireDate { get; set; }
        public string HolderName { get; set; }
        public User user { get; set; }
    }
}
