using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PizzaSolutions.Models
{
    public class ContactEmail
    {
        public string Name { get; set; }
        public string Email { get; set; }      
        public string Phone { get; set; }
        public string Message { get; set; }
        [Display(Name = "Phone")]
        public bool PhoneContact { get; set; }
        [Display(Name = "Email")]
        public bool EmailContact { get; set; }
    }
}