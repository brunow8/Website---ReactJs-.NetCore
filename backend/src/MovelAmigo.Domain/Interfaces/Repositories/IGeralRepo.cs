using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovelAmigo.Domain.Interfaces.Repositories
{
    public interface IGeralRepo
    {
        void Add <T> (T entity) where T : class;
        void Update <T> (T entity) where T : class;
        void Delete <T> (T entity) where T : class;
        void DeleteSome <T> (T[] entity) where T : class;
        Task<bool> SaveChangesAsync();
    }
}