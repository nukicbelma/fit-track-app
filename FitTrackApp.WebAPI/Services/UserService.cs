using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Services
{
   /* public class UserService : IUserService
    {
        protected readonly FitTrackContext _context;
        protected readonly IMapper _mapper;

        public UserService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public List<Models.User> Get()
        {
            var query = _context.Users.AsQueryable();

            return _mapper.Map<List<Models.User>>(query.ToList());
        }

        public Models.User Insert(UserUpsertDTO request)
        {
            var entity = _mapper.Map<Models.User>(request);

            if (request.Password != request.PasswordConfirm)
            {
                throw new Exception("Password and password confirm not matched !");
            }
            entity.PasswordSalt = HashGenerator.GenerateSalt();
            entity.PasswordHash = HashGenerator.GenerateHash(entity.PasswordSalt, request.Password);

            _context.Add(entity);
            _context.SaveChanges();

            return _mapper.Map<Data.Model.Customer>(entity);
        }

        public Models.User Update(int id, UserUpsertDTO request)
        {
            var entity = _context.Users.Find(id);

            _context.Customer.Attach(entity);
            _context.Customer.Update(entity);

            _mapper.Map(request, entity);
            _context.SaveChanges();

            return _mapper.Map<Data.Model.Customer>(entity);
        }

        public Data.Model.Customer Authenticate(CustomerLoginRequest request)
        {
            var customer = _context.Customer.Include(e => e.CustomerType).FirstOrDefault(x => x.Username == request.Username);

            if (customer != null)
            {
                var newHash = HashGenerator.GenerateHash(customer.PasswordSalt, request.Password);

                if (customer.PasswordHash == newHash)
                {
                    return _mapper.Map<Data.Model.Customer>(customer);
                }
            }
            return null;
        }

        public Models.User GetById(int id)
        {
            var user = _context.Users.Include(a => a.City).FirstOrDefault(x => x.CustomerId == id);
            return _mapper.Map<Data.Model.Customer>(customer);
        }
    }*/
}
