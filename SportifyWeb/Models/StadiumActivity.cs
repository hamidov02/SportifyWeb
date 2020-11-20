using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportifyWeb.Models
{
    [Table("StadiumActivity")]
    public class StadiumActivity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public DateTime BookedFrom { get; set; }
        public DateTime BookedTo { get; set; }

        [ForeignKey("StadiumID")]
        public Stadium stadium { get; set; }
    }
}
