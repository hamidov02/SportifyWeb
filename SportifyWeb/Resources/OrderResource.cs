using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class OrderResource
    {
        public int ID { get; set; }
        public string Status { get; set; }
        public StadiumActivityResource StadiumActivity { get; set; }
        public List<PaymentResource> Payments { get; set; }
    }
}
