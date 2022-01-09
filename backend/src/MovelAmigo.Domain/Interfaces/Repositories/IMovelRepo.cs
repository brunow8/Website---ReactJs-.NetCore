using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Domain.Entities;

namespace MovelAmigo.Domain.Interfaces.Repositories
{
    public interface IMovelRepo : IGeralRepo
    {
        Task<Product[]> AllAsync();
        Task<Product> OneByIdAsync(int id);
        Task<Product> OneByNameAsync(string Name);
    }
}