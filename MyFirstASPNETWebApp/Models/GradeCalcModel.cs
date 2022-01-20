using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstASPNETWebApp.Models
{

    //This is the model that also does the range validation to make sure that all values are between 0 and 100.

    public class GradeCalcModel
    {
        [Required]
        [Range(typeof(int), "0", "100", ErrorMessage = "Please enter an Exam average between 0 and 100")]
        public int Exams { get; set; }
        [Required]
        [Range(typeof(int), "0", "100", ErrorMessage = "Please enter an Intex average between 0 and 100")]
        public int Intex { get; set; }
        [Required]
        [Range(typeof(int), "0", "100", ErrorMessage = "Please enter a Group Project average between 0 and 100")]
        public int GroupProjects { get; set; }
        [Required]
        [Range(typeof(int), "0", "100", ErrorMessage = "Please enter an Assigments average between 0 and 100")]
        public int Assignments { get; set; }
        [Required]
        [Range(typeof(int), "0" , "100", ErrorMessage = "Please enter a Quizzes average between 0 and 100")]
        public int Quizzes { get; set; }
    }
}