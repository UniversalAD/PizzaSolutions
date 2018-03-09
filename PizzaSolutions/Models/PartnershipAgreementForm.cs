using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PizzaSolutions.Models
{
    public class PartnershipAgreementForm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Restaurant { get; set; }
        public string Position { get; set; }       
        public string Email { get; set; }        
        public string Phone { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        //[RegularExpression("[A-Z]{2}")]
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string AverageDelWeek { get; set; }
        public string AveragePickupsWeek { get; set; }
        public bool Agreement { get; set; }
        public string ElectronicSignature { get; set; }
        //[Display(Name = "Please upload your Logo(optional)")]
        //public HttpPostedFileBase Attachment { get; set; }

    }
}