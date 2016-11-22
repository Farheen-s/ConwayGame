using BusinessLayer;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ConwayGameServices.Controllers
{
    public class ConwayController : ApiController
    {
        [HttpPost]
        [Route("api/GetNextSimulation")]
        public Grid GetNextSimulation([FromBody] Grid gridobj)
        {
            ConwayManager cm = new ConwayManager();
            return cm.GetNextSimulation(gridobj);
        }

    }
}
