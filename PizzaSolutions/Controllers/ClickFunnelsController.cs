using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using PizzaSolutions.Models;
using SendGrid;

namespace PizzaSolutions.Controllers
{
    public class ClickFunnelsController : Controller
    {
        // GET: ClickFunnels
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult FreeMagnets (FreeMagnets model)
        {
            if (ModelState.IsValid) 
            {
                var message = new SendGridMessage();
                //message.AddTo("partnerrelations@universalad.com");
                //message.AddTo("connerg@universalad.com");  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");
                message.Subject = "Click Funnel Free Magnets Sign Up";

                var body = "<table><table style='width: 80%; margin: 0 auto; border: solid 1px #000'><th>Click Funnel Free Magnets Sign Up</th>" +
                    "<tr>" +
                    "<td>Name {0}</td></tr>" +
                    "<tr><td>Email: {1}</td></tr>" +
                    "<tr><td>Restaurant Name: {2}</td></tr>" +
                    "<tr><td>Position: {3}</td></tr>" +
                    "<tr><td>Website/Facebook: {4}</td></tr>" +
                    "<tr><td>Avg. # Deliveries Per Week: {5}</td></tr></table>";
                message.Html = String.Format(body, model.FirstLastName, model.Email, model.RestaurantName, model.JobTitle, model.CompanyWebsite, model.AvgNumDel);

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
            return View();
        }
    }
}