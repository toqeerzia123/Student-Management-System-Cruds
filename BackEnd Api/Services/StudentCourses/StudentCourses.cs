using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasks.Models;
using Tasks.Repositories;

namespace Tasks.Services.StudentCourses
{
    public class StudentCourses : GenericService<StudentCourse>,IStudentCourses
    {
        private readonly IGenericRepository<StudentCourse> _repository;

        public StudentCourses(IGenericRepository<StudentCourse> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}