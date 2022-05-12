using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Tasks.Models
{
    public class Student: BaseEntity
    {
        public string Student_Name { get; set; }
        public string FatherName { get; set; }
        public string PhoneNo { get; set; }
        public string ClassName { get; set; }
    }
}
