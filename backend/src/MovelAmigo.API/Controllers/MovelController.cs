using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovelAmigo.Domain.Entities;
using MovelAmigo.Domain.Interfaces.Services;

namespace MovelAmigo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovelController : ControllerBase
    {
        private readonly IMovelService _movelService;

        public MovelController(IMovelService movelService){
            _movelService = movelService;
        }
        [HttpGet]
        public async Task<IActionResult> Get(){
            try{
                 var products = await _movelService.AllProductsAsync();
                 if(products == null){
                     return NoContent();
                 } 
                 return Ok(products);
            }
            catch (System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to recover the products Error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id){
            try{
                 var product = await _movelService.OneProductByIdAsync(id);
                 if(product == null){
                     return NoContent();
                 } 
                 return Ok(product);
            }
            catch (System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to recover the product with code:{id}. Error: {ex.Message}");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post(Product model){
            try{
                 var product = await _movelService.AddProduct(model);
                 if(product == null){
                     return NoContent();
                 } 
                 return Ok(product);
            }
            catch (System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to add a product. Error: {ex.Message}");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Product model){
            try{
                if(model.Id != id){
                    this.StatusCode(StatusCodes.Status409Conflict,
                    "The product you are trying to update is the wrong one.");
                }
                 var product = await _movelService.UpdateProduct(model);
                 if(product == null){
                     return NoContent();
                 } 
                 return Ok(product);
            }
            catch (System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to update the product with code:{id}. Error: {ex.Message}");
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete (int id){
            try{
                var product = await _movelService.OneProductByIdAsync(id);
                if(product == null){
                    this.StatusCode(StatusCodes.Status409Conflict,
                    "The product you are trying to delete is the wrong one");
                }
                if(await _movelService.DeleteProduct(id)){
                    return Ok(new {message = "Deleted"});
                }else{
                    return BadRequest("A specific problem occurred when trying to delete the product");
                }
            }
            catch (System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to delete de product with code:{id}. Erro: {ex.Message}");
            }
        }
    }
}

