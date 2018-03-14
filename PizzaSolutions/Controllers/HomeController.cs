using System.Web.Mvc;
using PizzaSolutions.Models;
using System.Net;
using System.Net.Mail;
using SendGrid;



namespace PizzaSolutions.Controllers
{
    public class HomeController : Controller
    {
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
            ViewBag.Message = "We Will Be in Contact With You Soon, Thank You For Your Interest";
            return View(); 
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _PartnershipAgreementPartial(PartnershipAgreementForm model)
        {

            if (ModelState.IsValid)
            {
                var body = "First Name: {0} <br />  Last Name: {1} <br /> Restaurant: {2} <br /> Position: {3} <br /> Email: {4} <br /> Phone: {5} <br /> Address: {6} <br /> Zip Code: {7} <br /> State: {8} <br /> Avg. Deliveries Per Week: {9} <br /> Avg. Pickups Per Week: {10} <br /> Term Agreement: {11} <br /> E-Signature: {12}";
                var message = new SendGridMessage();
                message.AddTo("partnerrelations@universalad.com");
                message.AddTo("conner@universalad.com");  // replace with valid value 
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Partnership Agreement";
                message.Html = string.Format(body, model.FirstName, model.LastName, model.Restaurant, model.Position, model.Email, model.Phone, model.StreetAddress, model.ZipCode, model.State, model.AverageDelWeek, model.AveragePickupsWeek, model.Agreement, model.ElectronicSignature);



                //Azure credentials
                var username = "azure_8b8a64638c6bdacad86023f15c2e402b@azure.com";
                var pswd = "Cg090482?";

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
                message.AddTo("conner@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");  // replace with valid value
                message.Subject = "Pizza Solutions Contact Message";
                message.Html = string.Format(body, model.Name, model.Phone, model.Email, model.Message, model.PhoneContact, model.EmailContact);



                //Azure credentials
                var username = "azure_8b8a64638c6bdacad86023f15c2e402b@azure.com";
                var pswd = "Cg090482?";

                // variable to store azure credentials
                var credentials = new NetworkCredential(username, pswd);
                // Create an Web transport for sending email.
                var transportWeb = new Web(credentials);

                // Send the email, which returns an awaitable task.
                transportWeb.DeliverAsync(message);

                ModelState.Clear(); //clears form when page reload
                return RedirectToAction("MessageSend", "Home");

            }
            return View(model);
        }
    }
}
