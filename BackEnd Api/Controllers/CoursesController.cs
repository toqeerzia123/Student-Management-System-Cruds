using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasks.Models;
using Tasks.Services.Courses;

namespace Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseService _service;
        public CoursesController(ICourseService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<object> GetAll()
        {
           
        var result = await _service.GetAll().ToListAsync();
        return Ok(new { Data = result });
          

        }
        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] Course obj)
        {          
          await _service.AddAsync(obj);
          return Ok(new  { Data = "Successfully Created"});
        }
        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] Course obj)
        {
                await _service.UpdateAsync(obj);
                return Ok(new  { Data = "Successfully Updated" });
        }
        [HttpPost("Remove")]
        public async Task<IActionResult> Remove([FromBody] Course obj)
        {
                await _service.DeleteAsync(obj);
                return Ok(new  {Data = "Successfully Created"}); 
        }
    }
}
