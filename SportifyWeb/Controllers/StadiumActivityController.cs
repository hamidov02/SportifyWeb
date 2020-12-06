using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SportifyWeb.Data;
using SportifyWeb.Resources;

namespace SportifyWeb.Controllers
{
    public class StadiumActivityController : Controller
    {
        private SportifyContext sportifyContext;
        private readonly IMapper _mapper;

        public StadiumActivityController(SportifyContext sc, IMapper mapper)
        {
            sportifyContext = sc;
            _mapper = mapper;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetActiveStadiums()
        {
            List<ActiveStadiumResource> activeStadiums = new List<ActiveStadiumResource>();
            List<StadiumActivityResource> bookingActivities = new List<StadiumActivityResource>();
            {
                var bookings = sportifyContext.StadiumActivities.AsQueryable();
                foreach (var b in bookings)
                {
                    bookingActivities.Add(_mapper.Map<StadiumActivityResource>(b));
                }
            }

            {
                /*
                 * TODO
                 * Define hard-coded or passed begin-start date of stadium 
                 * Iterate each pre-defined unit between this interval 
                 * Compare elements of booking for determining active ours based on unit
                 */
            }
                return Ok(activeStadiums);
        }
        public IActionResult GetBookings()
        {
            List<StadiumActivityResource> bookingActivities = new List<StadiumActivityResource>();
            {
                var bookings = sportifyContext.StadiumActivities.AsQueryable();
                foreach (var b in bookings)
                {
                    bookingActivities.Add(_mapper.Map<StadiumActivityResource>(b));
                }
            }

            return Ok(bookingActivities);
        }

        public IActionResult GetByID(int ID)
        {
            StadiumActivityResource activityResource = new StadiumActivityResource();
            activityResource = _mapper.Map<StadiumActivityResource>
                (sportifyContext.Stadiums.Where(s => s.ID == ID));
            return Ok(activityResource);
        }

        public IActionResult GetByStadiumID (int stadiumID)
        {

            List<StadiumActivityResource> bookingActivities = new List<StadiumActivityResource>();
            {
                var bookings = sportifyContext.StadiumActivities.Where
                    (s=> s.stadium.ID == stadiumID).AsQueryable();
                foreach (var b in bookings)
                {
                    bookingActivities.Add(_mapper.Map<StadiumActivityResource>(b));
                }
            }
            return Ok(bookingActivities);
        }

        /*
         * TODO
         * Add filter for passing times
         */
    }
}
