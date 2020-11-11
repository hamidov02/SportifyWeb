using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class StadiumActivity
    {
        public int ID { get; set; }
        public DateTime BookedFrom { get; set; }
        public DateTime BookedTo { get; set; }
        public Stadium stadium { get; set; }
    }
}
