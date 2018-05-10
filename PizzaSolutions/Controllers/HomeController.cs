using System.Web.Mvc;
using PizzaSolutions.Models;
using System.Net;
using System.Net.Mail;
using SendGrid;
using System.Web;
using System.IO;
using System.Configuration;
using System.Net.Mime;
using System;

namespace PizzaSolutions.Controllers
{
    public class HomeController : Controller
    {
        public bool EmailConfirmation;

        public ActionResult Splash()
        {
            return View();
        }

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

        public ActionResult Products()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _PartnershipAgreementPartial(PartnershipAgreementForm model, HttpPostedFileBase file)
        {

            if (ModelState.IsValid)
            {
                var body = "First Name: {0} <br />  Last Name: {1} <br /> Restaurant: {2} <br /> Position: {3} <br /> Email: {4} <br /> Phone: {5} <br /> Address: {6} <br /> Zip Code: {7} <br /> State: {8} Term Agreement: {9} <br /> E-Signature: {10}";
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Partnership Agreement";
                message.Html = string.Format(body, model.FirstName, model.LastName, model.Restaurant, model.Position, model.PartnershipEmail, model.PartnershipPhone, model.StreetAddress, model.ZipCode, model.State, model.Agreement, model.ElectronicSignature);

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
                var body = "Name: {0} <br />  Phone: {1} <br /> Email: {2} <br /> Website/Facebook: {3} <br /> Message: {4} <br /> Phone Contact: {5} <br /> Email Contact: {6}";
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Contact Message";
                message.Html = string.Format(body, model.Name, model.Phone, model.Email, model.Website, model.Message, model.PhoneContact, model.EmailContact);

                var username = ConfigurationManager.AppSettings["sendGridUser"];
                var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                // variable to store azure credentials
                var credentials = new NetworkCredential(username, pswd);
                // Create an Web transport for sending email.
                var transportWeb = new Web(credentials);

                // Send the email, which returns an awaitable task.
                transportWeb.DeliverAsync(message);

                ModelState.Clear(); //clears form when page reload
                return RedirectToAction("ConfirmationEmail", "Home", new { model.Name, model.Phone, model.Email, model.Website, model.Message });
            }
            return View(model);
        }

        public ActionResult ConfirmationEmail(string Name, string Email, string Phone, string Website, string Message)
        {
            var message = new SendGridMessage();
            message.AddTo(Email);
            message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
            message.Subject = "Thank You For Signing Up!";

            var body = "{0}, <br /> Thank you for contacting us. <br /> Our Goal is to provide you with the best service possible. <br /> If you'd like for us to get started creating your ad for free, please just respond to this email letting us know! <br /> Like I said, we do that part completely free and if you'd like a list of distributors in you area, I can also get those for you. <br /> From all of us here at Pizza Solutions, <br /> Thank You! <br /> <br /> Email: {1}, <br /> Phone: {2}, <br /> Website/Facebook: {3} <br /> Message: {4}";
            message.Html = string.Format(body, Name, Email, Phone, Website, Message);

            var username = ConfigurationManager.AppSettings["sendGridUser"];
            var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

            // variable to store azure credentials
            var credentials = new NetworkCredential(username, pswd);
            // Create an Web transport for sending email.
            var transportWeb = new Web(credentials);

            transportWeb.DeliverAsync(message);

            return RedirectToAction("MessageSend", "Home");

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _FreeAdContact(FreeAdContact model)
        {
            if (ModelState.IsValid)
            {
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Free Ad Design";
                var body = "Name: {0} <br /> Email: {1} <br /> Phone: {2} <br /> Company {3} <br /> Address: {4} <br /> City: {5} <br /> State: {6} <br /> Zip: {7}";
                message.Html = string.Format(body, model.AdName, model.AdEmail, model.AdPhone, model.AdCompany, model.AdAddress, model.AdCity, model.AdState, model.AdZip);

                var username = ConfigurationManager.AppSettings["sendGridUser"];
                var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                var credentials = new NetworkCredential(username, pswd);
                var transportWeb = new Web(credentials);

                transportWeb.DeliverAsync(message);
                ModelState.Clear();

                return RedirectToAction("AdConfirmationEmail", "Home", new { Name = model.AdName, Email = model.AdEmail, Phone = model.AdPhone, Company = model.AdCompany, Address = model.AdAddress, City = model.AdCity, State = model.AdState, Zip = model.AdZip });
            }
            return View(model);
        }

        public ActionResult AdConfirmationEmail(string Name, string Email, string Phone, string Company, string Address, string City, string State, string Zip)
        {
            var message = new SendGridMessage();
            message.AddTo(Email);
            message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
            message.Subject = "Thank You For Signing Up!";

            var body = "{0}, <br /> Thank you for contacting us. <br /> Our Goal is to provide you with the best service possible. <br /> If you'd like for us to get started creating your ad for free, please just respond to this email letting us know! <br /> Like I said, we do that part completely free and if you'd like a list of distributors in you area, I can also get those for you. <br /> From all of us here at Pizza Solutions, <br /> Thank You! <br /> <br /> Email: {1}, <br /> Phone: {2}, <br /> Company: {3} <br /> Address: {4} <br /> City: {5} <br /> State {6} <br /> Zip {7}";
            message.Html = string.Format(body, Name, Email, Phone, Company, Address, City, State, Zip);

            var username = ConfigurationManager.AppSettings["sendGridUser"];
            var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

            // variable to store azure credentials
            var credentials = new NetworkCredential(username, pswd);
            // Create an Web transport for sending email.
            var transportWeb = new Web(credentials);

            transportWeb.DeliverAsync(message);

            return RedirectToAction("MessageSend", "Home");

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _ProductForm(ProductForm model, HttpPostedFileBase file)
        {

            if (ModelState.IsValid)
            {
                var body = "Name: {0} <br /> Email: {1} <br /> Phone: {2} <br /> Company Name: {3} <br /> Website/Facebook: {4} <br /> Product: {5} <br /> Product Color: {6} <br /> Logo Color: {7}";
                var message = new SendGridMessage();
                //message.AddTo("partnerrelations@universalad.com");
               /* message.AddTo("connerg@universalad.com");*/  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Product Selection Form";
                message.Html = string.Format(body, model.Name, model.Email, model.ProductPhone, model.CompanyName, model.WebsiteFacebook, model.Product, model.Color, model.LogoColor);

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

                        ModelState.Clear(); //clears form when page reload

                        return RedirectToAction("ProductFormConfirmation", "Home", new { model.Name, model.Email });
                    }
                }

                catch
                {
                    var username = ConfigurationManager.AppSettings["sendGridUser"];
                    var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

                    var credentials = new NetworkCredential(username, pswd);
                    var transportWeb = new Web(credentials);

                    transportWeb.DeliverAsync(message);

                    ModelState.Clear(); //clears form when page reload

                    return RedirectToAction("ProductFormConfirmation", "Home", new { model.Name, model.Email });
                }
            }
            return View(model);
        }

        public ActionResult ProductFormConfirmation(string Email, string Name)
        {
            var message = new SendGridMessage();
            message.AddTo(Email);
            message.From = new MailAddress("partnerrelations@universalad.com");
            message.Subject = "Your So Close!";
            var body = "<table style='width: 90%; margin: 0 auto;'><table style='border: solid 2px #d4d4d4; padding: 10px; font-family:  Arial, Helvetica, sans-serif;' table-align='center'>" +
                "<th style='font-size: 18px; padding: 5px;'>Your So Close</th>" +
                "<tr><td style='padding: 5px;'>{0},</td></tr>" +
                " <tr><td style='padding: 5px;'>Thanks for letting us do this for you!</td></tr>" +
                "<tr><td style='padding: 5px;'>What happens now is.. we get the art process started.Our team of designers and typesetters are crazy good and super experienced so it shouldn't take too long. However, we do always give ourselves at least 24 hours, depending on the day. We'll send you a proof within that time frame and if we have any questions we'll be sure to give you a call or send you an email.</td></tr>" +
                "<tr><td style='padding: 5px;'>Happy Branding!<br /><br />~ Pizza Solutions</td></tr></table></table>";
            message.Html = String.Format(body, Name);

            var username = ConfigurationManager.AppSettings["sendGridUser"];
            var pswd = ConfigurationManager.AppSettings["sendGridPassword"];

            var credentials = new NetworkCredential(username, pswd);
            var transportWeb = new Web(credentials);

            transportWeb.DeliverAsync(message);

            ModelState.Clear(); //clears form when page reload

            return RedirectToAction("MessageSend", "Home");
        }
    }
}
