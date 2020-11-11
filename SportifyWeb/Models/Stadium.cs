using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    public class Stadium
    {
        public int ID { get; set; }
        public string Sport { get; set; }
        public double Price { get; set; }
        public double Size { get; set; }
        public User user { get; set; }
        public Adress adress { get; set; }
        public ICollection<StadiumActivity> StadiumActivities { get; set; }
    }
}
