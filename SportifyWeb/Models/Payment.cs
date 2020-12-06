using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("Payment")]
    public class Payment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Status { get; set; }
        public DateTime InsertDate { get; set; }
        public DateTime PaymentDate { get; set; }

        [ForeignKey("OrderID")]
        public Order order { get; set; }

    }
}
