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
    public class UserController : Controller
    {
        private SportifyContext sportifyContext;
        private readonly IMapper _mapper;

        public UserController(SportifyContext sc, IMapper mapper)
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
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetByID(int ID)
        {
            UserResource userResource;
            userResource = _mapper.Map<UserResource>
                (sportifyContext.Users.Where(u => u.ID == ID));

            return Ok(userResource);
        }

        public IActionResult GetByFullName (string name, string surname)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.contactInfo.Name == name && u.contactInfo.Surname == surname).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetByByName(string name)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.contactInfo.Name == name ).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetByBySurname(string surname)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.contactInfo.Surname == surname).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetOlderThan(int age)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.Age >= age).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetYoungerThan(int age)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.Age <= age).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }

            return Ok(userModels);
        }

        public IActionResult GetByBirthDate(DateTime birthDate)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.BirthDate >= birthDate).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }
            return Ok(userModels);
        }

        public IActionResult GetByRole(string userRole)
        {
            List<UserResource> userModels = new List<UserResource>();
            {
                var users = sportifyContext.Users.Where(
                    u => u.Role.Name == userRole).AsQueryable();
                foreach (var u in users)
                {
                    userModels.Add(_mapper.Map<UserResource>(u));
                }
            }
            return Ok(userModels);
        }

        public IActionResult GetByUsername(string username)
        {
            UserResource userResource;
            userResource = _mapper.Map<UserResource>
                (sportifyContext.Users.Where(u => u.Username == username));

            return Ok(userResource);
        }

        public IActionResult GetByAdress(AdressResource adressResource)
        {
            /*
             * TODO 
             */

            return View();
        }
        
        // SAFETY: Authentication  && Autharization
        public IActionResult Login()
        {
            /*
             * TODO 
             */

            return View();
        }

        public IActionResult SignUp()
        {

            /*
             * TODO 
             */

            return View();
        }

        public IActionResult LogOut()
        {

            /*
             * TODO 
             */

            return View();
        }

        public IActionResult ChangePassword(String newPassword)
        {
            /*
             * TODO 
             */

            return null;
        }
    }
}
