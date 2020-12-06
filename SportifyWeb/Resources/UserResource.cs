using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Resources
{
    public class UserResource
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public int Age { get; set; }
        public AdressResource Adress { get; set; }
        public string Role { get; set; }

        public List<CreditCardResource> CardResources {get; set;}

        public List<StadiumResource>  StadiumResources{get; set;}

        public List<OrderResource> OrderResources{ get; set; }
    }
}
