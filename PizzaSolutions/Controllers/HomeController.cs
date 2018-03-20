using System.Web.Mvc;
using PizzaSolutions.Models;
using System.Net;
using System.Net.Mail;
using SendGrid;
using System.Web;
using System.IO;
using System.Configuration;
using System.Net.Mime;

namespace PizzaSolutions.Controllers
{
    public class HomeController : Controller
    {
        public bool EmailConfirmation;

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Magnets()
        {
            return View();
        }

        public ActionResult Advertisers()
        {
            return View();
        }

        public ActionResult Distributors()
        {
            return View();
        }

        public ActionResult Partnership()
        {
            return View();
        }

        public ActionResult _PartnershipAgreementPartial()
        {
            return PartialView();
        }

        public ActionResult MessageSend()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _PartnershipAgreementPartial(PartnershipAgreementForm model, HttpPostedFileBase file)
        {
           
            if (ModelState.IsValid)
            {
                var body = "First Name: {0} <br />  Last Name: {1} <br /> Restaurant: {2} <br /> Position: {3} <br /> Email: {4} <br /> Phone: {5} <br /> Address: {6} <br /> Zip Code: {7} <br /> State: {8} <br /> Avg. Deliveries Per Week: {9} <br /> Avg. Pickups Per Week: {10} <br /> Term Agreement: {11} <br /> E-Signature: {12}";
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Partnership Agreement";
                message.Html = string.Format(body, model.FirstName, model.LastName, model.Restaurant, model.Position, model.PartnershipEmail, model.PartnershipPhone, model.StreetAddress, model.ZipCode, model.State, model.AverageDelWeek, model.AveragePickupsWeek, model.Agreement, model.ElectronicSignature);

                try
                {
                    if (file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        var path = Path.Combine(Server.MapPath("~/App_Data/Images"), fileName);
                        file.SaveAs(path);

                        message.AddAttachment(path);

                        //Azure credentials

                        var username = ConfigurationManager.AppSettings["sendGridUser"];
                        var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                        // variable to store azure credentials
                        var credentials = new NetworkCredential(username, pswd);
                        // Create an Web transport for sending email.
                        var transportWeb = new Web(credentials);

                        // Send the email, which returns an awaitable task.
                        transportWeb.DeliverAsync(message);

                        ViewBag.Message = "Message Sent";

                        ModelState.Clear(); //clears form when page reload

                        return RedirectToAction("MessageSend", "Home");
                    }
                }

                catch
                {
                    var username = ConfigurationManager.AppSettings["sendGridUser"];
                    var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                    var credentials = new NetworkCredential(username, pswd);
                    var transportWeb = new Web(credentials);

                    transportWeb.DeliverAsync(message);

                    ViewBag.Message = "Message Sent";

                    ModelState.Clear(); //clears form when page reload

                    return RedirectToAction("MessageSend", "Home");
                }     
            }
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _EmailContact(ContactEmail model)
        {

            if (ModelState.IsValid)
            {
                var body = "Name: {0} <br />  Phone: {1} <br /> Email: {2} <br /> Message: {3} <br /> Phone Contact: {4} <br /> Email Contact: {5}";
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Contact Message";
                message.Html = string.Format(body, model.Name, model.Phone, model.Email, model.Message, model.PhoneContact, model.EmailContact);

                var username = ConfigurationManager.AppSettings["sendGridUser"];
                var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                // variable to store azure credentials
                var credentials = new NetworkCredential(username, pswd);
                // Create an Web transport for sending email.
                var transportWeb = new Web(credentials);

                // Send the email, which returns an awaitable task.
                transportWeb.DeliverAsync(message);

                ModelState.Clear(); //clears form when page reload
                return RedirectToAction("ConfirmationEmail", "Home", new { model.Name, model.Phone, model.Email, model.Message });
            }
            return View(model);
        }

        public ActionResult ConfirmationEmail(string Name, string Email, string Phone, string Message)
        {
            var message = new SendGridMessage();
            message.AddTo(Email);
            message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
            message.Subject = "Thank You For Signing Up!";

            var body = "{0}, <br /> Thank you for contacting us. <br /> Our Goal is to provide you with the best service possible. <br /> If you'd like for us to get started creating your ad for free, please just respond to this email letting us know! <br /> Like I said, we do that part completely free and if you'd like a list of distributors in you area, I can also get those for you. <br /> From all of us here at Pizza Solutions, <br /> Thank You! <br /> <br /> Email: {1}, <br /> Phone: {2}, <br /> Message: {3}";
            message.Html = string.Format(body, Name, Email, Phone, Message);

            var username = ConfigurationManager.AppSettings["sendGridUser"];
            var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

            // variable to store azure credentials
            var credentials = new NetworkCredential(username, pswd);
            // Create an Web transport for sending email.
            var transportWeb = new Web(credentials);

            transportWeb.DeliverAsync(message);

            return RedirectToAction("MessageSend", "Home");

        }
    }
}
