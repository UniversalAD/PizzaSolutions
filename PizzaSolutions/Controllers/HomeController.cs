﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
    }
}