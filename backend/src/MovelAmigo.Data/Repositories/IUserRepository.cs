using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Domain.Entities;

namespace MovelAmigo.Data.Repositories
{
    public interface IUserRepository
    {
        User Create (User user);
        User Atualizar (User user);
        User GetByEmail(string email);
        User GetByGuidId(Guid id);
        User GetById(int id);

        List<User> GetAll ();
    }
}