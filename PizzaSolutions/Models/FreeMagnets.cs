using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PizzaSolutions.Models
{
    public class FreeMagnets
    {
        public string FirstLastName { get; set; }
        public string Email { get; set; }
        public string RestaurantName { get; set; }
        public string JobTitle { get; set; }
        public string CompanyWebsite { get; set; }
        public string AvgNumDel { get; set; }
    }
}