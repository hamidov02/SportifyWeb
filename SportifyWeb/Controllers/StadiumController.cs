using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SportifyWeb.Data;
using SportifyWeb.Models;
using SportifyWeb.Resources;

namespace SportifyWeb.Controllers
{
    public class StadiumController : Controller
    {
        private SportifyContext sportifyContext;
        private readonly IMapper _mapper;

        public StadiumController(SportifyContext sc, IMapper mapper)
        {
            sportifyContext = sc;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetAll()
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            {  
                Console.WriteLine("\tStadiums are retrieveing from database...\n");
                var stadiums = sportifyContext.Stadiums.AsQueryable();
                foreach (var s in stadiums)
                {
                    stadiumModels.Add(_mapper.Map<StadiumResource>(s));
                }
            }

            return Ok(stadiumModels);
        }

        public IActionResult GetByName(string name)
        {
            StadiumResource stadiumResource;
            stadiumResource = _mapper.Map<StadiumResource>
                (sportifyContext.Stadiums.Where(s => s.Name == name));
            return Ok(stadiumResource);
        }

        public IActionResult GetByCompany(string company)
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            var stadiums = sportifyContext.Stadiums.Where
                (s=> s.Company == company).AsQueryable();
            foreach (var s in stadiums)
            {
                stadiumModels.Add(_mapper.Map<StadiumResource>(s));
            }
            return Ok(stadiumModels);
        }

        public IActionResult GetByID(int ID)
        {
            StadiumResource stadiumResource;
            stadiumResource = _mapper.Map<StadiumResource>
                (sportifyContext.Stadiums.Where(s => s.ID == ID));
            return Ok(stadiumResource);
        }

        public IActionResult GetBySport(string sport)
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            var stadiums = sportifyContext.Stadiums.Where
                (s => s.Sport == sport).AsQueryable();
            foreach (var s in stadiums)
            {
                stadiumModels.Add(_mapper.Map<StadiumResource>(s));
            }
            return Ok(stadiumModels);
        }

        public IActionResult GetByPrice(double minPrice, double maxPrice)
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            var stadiums = sportifyContext.Stadiums.Where
                (s => s.Price <= maxPrice && s.Price >= minPrice).AsQueryable();
            foreach (var s in stadiums)
            {
                stadiumModels.Add(_mapper.Map<StadiumResource>(s));
            }
            return Ok(stadiumModels);
        }

        public IActionResult GetByArea(double minArea, double maxArea)
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            var stadiums = sportifyContext.Stadiums.Where
                (s => s.Area <= maxArea && s.Area >= minArea).AsQueryable();
            foreach (var s in stadiums)
            {
                stadiumModels.Add(_mapper.Map<StadiumResource>(s));
            }
            return Ok(stadiumModels);
        }

        public IActionResult GetByUser(int userID)
        {
            List<StadiumResource> stadiumModels = new List<StadiumResource>();
            var stadiums = sportifyContext.Stadiums.Where
                (s => s.User.ID == userID).AsQueryable();
            foreach (var s in stadiums)
            {
                stadiumModels.Add(_mapper.Map<StadiumResource>(s));
            }
            return Ok(stadiumModels);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create_Post(Stadium stadium)
        {
            if (ModelState.IsValid)
            {
                sportifyContext.Stadiums.Add(stadium);
                sportifyContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View();
            }
        }     
    }
}
