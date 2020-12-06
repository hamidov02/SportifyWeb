using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class AdressResource
    {
        public int ID { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int Zip { get; set; }
        public string StreetName { get; set; }
        public int StreetNumber { get; set; }
    }
}
