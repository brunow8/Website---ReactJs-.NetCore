using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Domain.Entities;

namespace MovelAmigo.Domain.Interfaces.Services
{
    public interface IMovelService
    {
        Task<Product> AddProduct (Product model);
        Task<Product> UpdateProduct (Product model);
        Task<bool> DeleteProduct (int productId);
        Task<bool> ConcludeProduct (Product model);
        Task<Product[]> AllProductsAsync ();
        Task<Product> OneProductByIdAsync (int productId);


    }
}