using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("Adress")]
    public class Adress
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int Zip { get; set; }
        public string StreetName { get; set; }
        public int StreetNumber { get; set; }
    }
}
