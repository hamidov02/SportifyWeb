using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class StadiumActivityResource
    {
        public int ID { get; set; }
        public DateTime BookedFrom { get; set; }
        public DateTime BookedTo { get; set; }
        public StadiumResource Stadium { get; set; }
    }
}
