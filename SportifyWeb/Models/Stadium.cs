using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("Stadium")]
    public class Stadium
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public string Sport { get; set; }
        public double Price { get; set; }
        public double Area { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; }

        [ForeignKey("AdressID")]
        public Adress adress { get; set; }

        public ICollection<StadiumActivity> StadiumActivities { get; set; }
    }
}
