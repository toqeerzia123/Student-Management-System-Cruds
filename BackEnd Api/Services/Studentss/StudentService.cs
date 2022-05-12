using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasks.Models;
using Tasks.Repositories;

namespace Tasks.Services.Studentss
{
    public class StudentService : GenericService<Student>,IStudentService
    {
        private readonly IGenericRepository<Student> _repository;

        public StudentService(IGenericRepository<Student> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
