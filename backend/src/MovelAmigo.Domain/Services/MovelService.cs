using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Domain.Entities;
using MovelAmigo.Domain.Interfaces.Repositories;
using MovelAmigo.Domain.Interfaces.Services;

namespace MovelAmigo.Domain.Services
{
    public class MovelService : IMovelService{
        private readonly IMovelRepo _movelRepo;
        public MovelService(IMovelRepo movelRepo){
            _movelRepo = movelRepo;
        }
        public async Task<Product> AddProduct(Product model){
            if(await _movelRepo.OneByNameAsync(model.Name) != null){
                throw new Exception ("Already exists a product with a same name.");
            }
            if(await _movelRepo.OneByIdAsync(model.Id) == null){
                _movelRepo.Add(model);
                if(await _movelRepo.SaveChangesAsync()){
                    return model;
                }
            }
            return null;
        }
        public async Task<Product> UpdateProduct(Product model){
            /*if (model.ConclusionTime != null){
               throw new Exception("You cannot change a product that has already been completed"); 
            }*/
            if (await _movelRepo.OneByIdAsync(model.Id) != null){
                _movelRepo.Update(model);
                if (await _movelRepo.SaveChangesAsync()){
                    return model;
                }
            }
            return null;
        }

        public async Task<bool> ConcludeProduct(Product model){
            if (model != null){
                /*model.Conclude();*/
                _movelRepo.Update<Product>(model);
                return await _movelRepo.SaveChangesAsync();
            }
            return false;
        }
        public async Task<bool> DeleteProduct(int productId){
            var product = await _movelRepo.OneByIdAsync(productId);
            if (product == null){
                throw new Exception("The product you try to delete does not exists.");
            } 
            _movelRepo.Delete(product);
            return await _movelRepo.SaveChangesAsync();
        }

        public async Task<Product> OneProductByIdAsync(int productId){
            try{
                var product = await _movelRepo.OneByIdAsync(productId);
                if (product == null){
                    return null;
                } 
                return product;
            }
            catch (System.Exception ex){
                throw new Exception(ex.Message);
            }
        }
        public async Task<Product[]> AllProductsAsync(){
            try{
                var products = await _movelRepo.AllAsync();
                if (products == null) return null;

                return products;
            }
            catch (System.Exception ex){
                throw new Exception(ex.Message);
            }
        }
    }
}