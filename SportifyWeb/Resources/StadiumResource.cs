using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class StadiumResource
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public string Sport { get; set; }
        public double Price { get; set; }
        public double Area { get; set; }
        public AdressResource Adress { get; set; }
    }
}
