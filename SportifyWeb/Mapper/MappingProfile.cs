using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SportifyWeb;
using SportifyWeb.Resources;
using SportifyWeb.Models;

namespace SportifyWeb.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserResource>();
            CreateMap<Stadium, StadiumResource>();
            CreateMap<Adress, AdressResource>();
            CreateMap<StadiumActivity, StadiumActivityResource>();
            CreateMap<CreditCard, CreditCardResource>();
            CreateMap<Payment, PaymentResource>();
            CreateMap<Order, OrderResource>();
        }
    }
}
