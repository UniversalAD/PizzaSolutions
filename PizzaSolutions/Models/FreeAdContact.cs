using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace PizzaSolutions.Models
{
    public class FreeAdContact
    {
        [Display(Name = "Name")]
        public string AdName { get; set; }        
        [EmailAddress]
        [Display(Name = "Email")]
        public string AdEmail { get; set; }
        [Display(Name = "Company")]
        public string AdCompany { get; set; }
        [Display(Name = "Phone")]
        public string AdPhone { get; set; }
        [Display(Name = "Address")]
        public string AdAddress { get; set; }
        [Display(Name = "Zip")]
        public string AdZip { get; set; }
        [Display(Name = "City")]
        public string AdCity { get; set; }
        [Display(Name = "State")]
        public string AdState { get; set; }
    }
}