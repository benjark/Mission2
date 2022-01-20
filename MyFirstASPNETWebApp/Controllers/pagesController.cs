using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyFirstASPNETWebApp.Controllers
{
    public class pagesController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            //throw new IndexOutOfRangeException();
            return View();
         
        }
        [HttpGet]
        public IActionResult GPACalculator()
        {
            return View();

        }
        [HttpPost]
        public IActionResult GPACalculator(GradeCalcModel model)
        {
            return View();

        }
    }
}
