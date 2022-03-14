using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Data.Context;
using MovelAmigo.Domain.Entities;

namespace MovelAmigo.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context){
            _context = context;
        }
        public User Atualizar(User user){
            _context.Users.Update(user);
            _context.SaveChanges();
            return user;
        }
        public User Create(User user)
        {
            user.GuidId = System.Guid.NewGuid();
            user.Creation = DateTime.Now;
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public List<User> GetAll()
        {
            var users = _context.Users.ToList();
            return users;
        }

        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetByGuidId(Guid id)
        {
            return _context.Users.FirstOrDefault(u => u.GuidId == id);

        }
        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);

        }
    }
}