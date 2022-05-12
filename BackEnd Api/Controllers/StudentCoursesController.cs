using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasks.Models;
using Tasks.Services.StudentCourses;

namespace Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentCoursesController : ControllerBase
    {
        private readonly IStudentCourses _service;
        public StudentCoursesController(IStudentCourses service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<object> GetAll()
        {
            var result = await _service.GetAll().Include(x=>x.Student).Include(x=>x.Course).ToListAsync();
            return Ok(new { Data = result });
        }
        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] StudentCourse obj)
        {
            await _service.AddAsync(obj);
            return Ok(new { Data = "Successfully Created" });
        }
        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] StudentCourse obj)
        {
            await _service.UpdateAsync(obj);
            return Ok(new { Data = "Successfully Updated" });
        }
        [HttpPost("Remove")]
        public async Task<IActionResult> Remove([FromBody] StudentCourse obj)
        {
            await _service.DeleteAsync(obj);
            return Ok(new { Data = "Successfully Created" });
        }
    }
}
