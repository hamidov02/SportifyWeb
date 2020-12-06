using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class ActiveStadiumResource
    {
        public StadiumResource Stadium { get; set; }
        public List<TimeResource> activeHours { get; set; }
    }
}
