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
    public class OrderController : Controller
    {
        private SportifyContext sportifyContext;
        private readonly IMapper _mapper;

        public OrderController(SportifyContext sc, IMapper mapper)
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
            List<OrderResource> orderModels = new List<OrderResource>();
            {
                var orders = sportifyContext.Orders.AsQueryable();
                foreach (var s in orders)
                {
                    orderModels.Add(_mapper.Map<OrderResource>(s));
                }
            }

            return Ok(orderModels);
        }

        public IActionResult GetByID(int ID)
        {
            OrderResource orderResource;
            orderResource = _mapper.Map<OrderResource>
                (sportifyContext.Orders.Where(o => o.ID == ID));
            return Ok(orderResource);
        }

        public IActionResult GetByStatus(string status)
        {
            List<OrderResource> orderModels = new List<OrderResource>();
            var orders = sportifyContext.Orders.Where
                (o => o.Status == status).AsQueryable();
            foreach (var o in orders)
            {
                orderModels.Add(_mapper.Map<OrderResource>(o));
            }
            return Ok(orderModels);
        }

        public IActionResult GetByUserID(int userID)
        {
            List<OrderResource> orderModels = new List<OrderResource>();
            var orders = sportifyContext.Orders.Where
                (o => o.User.ID == userID).AsQueryable();
            foreach (var o in orders)
            {
                orderModels.Add(_mapper.Map<OrderResource>(o));
            }
            return Ok(orderModels);
        }

        public IActionResult GetBeforeDate(DateTime insertDate)
        {
            List<OrderResource> orderModels = new List<OrderResource>();
            var orders = sportifyContext.Orders.Where
                (o => o.InsertDate >= insertDate).AsQueryable();
            foreach (var o in orders)
            {
                orderModels.Add(_mapper.Map<OrderResource>(o));
            }
            return Ok(orderModels);
        }

        public IActionResult GetAfterDate(DateTime insertDate)
        {
            List<OrderResource> orderModels = new List<OrderResource>();
            var orders = sportifyContext.Orders.Where
                (o => o.InsertDate <= insertDate).AsQueryable();
            foreach (var o in orders)
            {
                orderModels.Add(_mapper.Map<OrderResource>(o));
            }
            return Ok(orderModels);
        }
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create_Post(Order order)
        {
            if (ModelState.IsValid)
            {
                sportifyContext.Orders.Add(order);
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
