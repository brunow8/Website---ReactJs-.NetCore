using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Data.Context;
using MovelAmigo.Domain.Interfaces.Repositories;

namespace MovelAmigo.Data.Repositories
{
    public class GeralRepo : IGeralRepo
    {
        private readonly DataContext _context;
        public GeralRepo(DataContext context){
            _context = context;
        }
        public void Add<T>(T entity) where T : class{
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class{
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class{
            _context.Remove(entity);
        }

        public void DeleteSome<T>(T[] entityArray) where T : class{
            _context.RemoveRange(entityArray);
        }

        public async Task<bool> SaveChangesAsync(){
            return (await _context.SaveChangesAsync()) > 0;
        }
    }
}