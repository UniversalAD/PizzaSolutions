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
        public ActionResult FreeMagnets(FreeMagnets model)
        {
            if (ModelState.IsValid)
            {
                var message = new SendGridMessage();
                //message.AddTo("partnerrelations@universalad.com");
                /*message.AddTo("connerg@universalad.com");*/  // replace with valid value 
                message.AddTo("chrisg@universalad.com");
                message.From = new MailAddress("partnerrelations@universalad.com");
                message.Subject = "Click Funnel Free Magnets Sign Up";

                var body = "<table><table style='width: 100%; margin: 0 auto; border: solid 1px #000'><th>Click Funnel Free Magnets Sign Up</th>" +
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

                return RedirectToAction("EmailConfirmation", "ClickFunnels", new { model.FirstLastName, model.Email });

            }
            return View();
        }
        public ActionResult EmailConfirmation(string FirstLastName, string Email)
        {
            var message = new SendGridMessage();
            message.AddTo(Email);
            message.From = new MailAddress("partnerrelations@universalad.com");
            message.Subject = "You Made a Great Decision!";

            if (FirstLastName == null)
            {
                var body = "<table><table style='width: 80%; margin: 0 auto; border: solid 2px #d4d4d4;'>" +
               "<th style='padding: 15px; font-size: 26px; font-weight: bold;'>You Made a Great Decision</th>" +
               "<tr><td style='padding: 5px';>Welcome to Pizza Solutions! We're so excited you've joined the team.</td></tr>" +
               "<tr><td style='padding: 5px;'>Thank You for taking the time to fill out the form. We'll be getting your delivery magnets to you very soon!</td></tr>" +
               "<tr><td style='padding: 5px';>If you have any questions, please call us @ 309-581-3073.</td></tr>" +
               "<tr><td style='padding: 5px;'>Our Team is setting up you publication now and creating you ad copy/artwork.</td></tr>" +
               "<tr><td style='padding: 5px;'>In event that you receive any phone calls from local businesses in you area inquiring about our program, do not worry... that's totally normal and means that they're interested in partnering with you and your pizzeria. Simply confirm your participation and we'll take it from there/<td></tr>" +
               "<tr><td style='padding: 5px;'>Thank you again, <br /> ~ Pizza Solutions</td></tr>" + "<tr><td style='padding: 5px;'><img src='https://lh6.googleusercontent.com/Sx_yWq3GY_rysjia0FeFd5lTPLjS0aTdZgzpEQAd6MxwUS74ZRievFgjxBh455OWesePjLJCFxaK8zLGg0vM=w1920-h925' style='max-width: '></td></tr></table></table>";
                message.Html = String.Format(body);
            }
            else
            {
                var body = "<table><table style='width: 80%; margin: 0 auto; border: solid 2px #d4d4d4;'>" +
               "<th style='padding: 15px; font-size: 26px; font-weight: bold;'>You Made a Great Decision</th>" +
               "<tr><td style='padding: 5px';>{0}, Welcome to Pizza Solutions! We're so excited you've joined the team.</td></tr>" +
               "<tr><td style='padding: 5px;'>Thank You for taking the time to fill out the form. We'll be getting your delivery magnets to you very soon!</td></tr>" +
               "<tr><td style='padding: 5px';>If you have any questions, please call us @ 309-581-3073.</td></tr>" +
               "<tr><td style='padding: 5px;'>Our Team is setting up you publication now and creating you ad copy/artwork.</td></tr>" +
               "<tr><td style='padding: 5px;'>In event that you receive any phone calls from local businesses in you area inquiring about our program, do not worry... that's totally normal and means that they're interested in partnering with you and your pizzeria. Simply confirm your participation and we'll take it from there/<td></tr>" +
               "<tr><td style='padding: 5px;'>Thank you again, <br /> ~ Pizza Solutions</td></tr>" + "<tr><td style='padding: 5px;'><img src='https://lh6.googleusercontent.com/Sx_yWq3GY_rysjia0FeFd5lTPLjS0aTdZgzpEQAd6MxwUS74ZRievFgjxBh455OWesePjLJCFxaK8zLGg0vM=w1920-h925' style='max-width: '></td></tr></table></table>";
                message.Html = String.Format(body, FirstLastName);
            }

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
}