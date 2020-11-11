using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class Payment
    {
        public int ID { get; set; }
        public int Status { get; set; }
        public DateTime InsertDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public Order order { get; set; }

    }
}
