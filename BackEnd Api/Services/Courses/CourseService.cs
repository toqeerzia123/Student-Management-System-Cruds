using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasks.Models;
using Tasks.Repositories;

namespace Tasks.Services.Courses
{
    public class CourseService: GenericService<Course>, ICourseService
    {
        private readonly IGenericRepository<Course> _repository;

        public CourseService(IGenericRepository<Course> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
