using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PizzaSolutions.Models
{
    public class PartnershipAgreementForm
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string Restaurant { get; set; }
        public string Position { get; set; }
        [Required, Display(Name = "Email")]
        public string Email { get; set; }
        [Required, Display(Name = "Phone")]
        public string Phone { get; set; }
        [Display(Name = "Address")]
        public string StreetAddress { get; set; }
        [Display(Name = "City")]
        public string City { get; set; }
        [Display(Name = "State")]
        [RegularExpression("[A-Z]{2}")]
        public string State { get; set; }
        [Display(Name = "Zip Code")]
        public string ZipCode { get; set; }
        [Display(Name = "Avg. Deliveries Per Week")]
        public string AverageDelWeek { get; set; }
        [Display(Name = "Avg. Pickups Per Week")]
        public string AveragePickupsWeek { get; set; }
        [Display(Name = "I have read and accept U.A.C. Terms & Conditions")]
        public bool Agreement { get; set; }
        [Display(Name = "E-Signature")]
        public string ElectronicSignature { get; set; }
        [Display(Name = "Please upload your Logo(optional)")]
        public HttpPostedFileBase Attachment { get; set; }

    }
}