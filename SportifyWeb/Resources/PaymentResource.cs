using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class PaymentResource
    {
        public int ID { get; set; }
        public string Status { get; set; }
        public DateTime InsertDate { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
