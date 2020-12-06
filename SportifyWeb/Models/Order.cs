using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("Order")]
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Status { get; set; }
        public DateTime InsertDate { get; set; }

        [ForeignKey("StadiumActivityID")]
        public StadiumActivity stadiumActivity { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; }

        public ICollection<Payment>  Payments { get; set; }
    }
}
