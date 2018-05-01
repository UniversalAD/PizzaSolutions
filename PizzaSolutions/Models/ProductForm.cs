using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PizzaSolutions.Models
{
    public class ProductForm
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        [Display (Name = "Company Name")]
        public string CompanyName { get; set; }
        [Display(Name = "Logo Color")]
        public string LogoColor { get; set; }
        public string Color { get; set; }
        public int Quantity { get; set; }
        [Display (Name = "Send us your logo")]
        public HttpPostedFileBase File { get; set; }
    }
}