using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class Order
    {
        public int ID { get; set; }
        public int Statud { get; set; }
        public DateTime InsertDate { get; set; }
        public StadiumActivity stadiumActivity { get; set; }
        public User user { get; set; }
        public ICollection<Payment>  Payments { get; set; }
    }
}
