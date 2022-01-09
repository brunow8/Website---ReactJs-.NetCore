using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MovelAmigo.Data.Context;
using MovelAmigo.Domain.Entities;
using MovelAmigo.Domain.Interfaces.Repositories;

namespace MovelAmigo.Data.Repositories
{
    public class MovelRepo : GeralRepo, IMovelRepo{
        private readonly DataContext _context;
        public MovelRepo(DataContext context) : base(context){
            _context = context;
        }
        public async Task<Product> OneByIdAsync(int id){
            IQueryable<Product> query = _context.Product;
            query = query.AsNoTracking()
                         .OrderBy(a => a.Id)
                         .Where(a => a.Id == id);
            return await query.FirstOrDefaultAsync();
        }

        public async Task<Product> OneByNameAsync(string name){
            IQueryable<Product> query = _context.Product;
            query = query.AsNoTracking()
                         .OrderBy(a => a.Id);
            return await query.FirstOrDefaultAsync(a => a.Name == name);
        }

        public async Task<Product[]> AllAsync(){
            IQueryable<Product> query = _context.Product;
            query = query.AsNoTracking()
                         .OrderBy(a => a.Id);
            return await query.ToArrayAsync();
        }
    }
}