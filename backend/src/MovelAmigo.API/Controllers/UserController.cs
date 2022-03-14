using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovelAmigo.Data.Context;
using MovelAmigo.Data.Repositories;
using MovelAmigo.Domain.Entities;
using MovelAmigo.Domain.Entities.Dto;
using MovelAmigo.Domain.Services;

namespace MovelAmigo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        public UserController (IUserRepository repository, JwtService jwtService){
            _repository = repository;
            _jwtService = jwtService;
        }
        

        /*[HttpGet ("{id}")]
        public async Task<ActionResult<User>> GetUser (int id){
            var user = await _context.Users.FindAsync(id);
            if(user == null){
                return NotFound();
            }
            return user;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser (int id, User user){
            
            user.Id = id;

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!UserExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }
            return Ok("Success");
        }*/

        [HttpPost(template: "register")]
        public IActionResult Register (RegisterDto dto){
            var user = new User{
                Name = dto.Name,
                LastName = dto.LastName,
                Nif = dto.Nif,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Level = dto.Level,
                Birthday = dto.Birthday,
                State = dto.State,
                Gender = dto.Gender
            };
            if(user.Email == null){
                throw new ArgumentException("Tem de ser introduzido um e-mail.");
            }else if (user.Name == null){
                throw new ArgumentException("Tem de ser introduzido um nome.");
            }else if(user.LastName == null){
                throw new ArgumentException("Tem de ser introduzido um apelido.");
            }else if(user.Password == null){
                throw new ArgumentException("Tem de ser introduzido uma Password.");
            }else if(user.Level == 0){
                throw new ArgumentException("Tem de ser introduzido um nível.");
            }else if(user.State == 0){
                throw new ArgumentException("Tem de ser introduzido um estado.");
            }else if(user.Birthday == null){
                throw new ArgumentException("Tem de ser introduzido uma data de nascimento.");
            }else if(user.Gender == 0){
                throw new ArgumentException("Tem de ser introduzido um gênero.");
            }

            _repository.Create(user);
            return Created(uri:"Success", value: _repository.Create(user));
        }

        [HttpPost(template: "login")]
        public IActionResult Login(LoginDto dto){
            var user = _repository.GetByEmail(dto.Email);
            if (user == null){
                return BadRequest(error: new { message = "O email ou a password fornecidos estão incorretos"});
            }
            if(!BCrypt.Net.BCrypt.Verify(text:dto.Password, hash:user.Password)){
                return BadRequest (error: new {message = "A password ou o email fornecidos estão incorretos"});
            }
            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new Microsoft.AspNetCore.Http.CookieOptions{
                HttpOnly = true,
                SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None,
                Secure = true

            });

            return Ok(new{
                message = "success"
            });
        }
        [HttpPost(template: "loginDetails")]
        public IActionResult LoginDetails(LoginDto dto){
            var user = _repository.GetByEmail(dto.Email);
            if (user == null){
                return BadRequest(error: new { message = "O email ou a password fornecidos estão incorretos"});
            }
            if(!BCrypt.Net.BCrypt.Verify(text:dto.Password, hash:user.Password)){
                return BadRequest (error: new {message = "A password ou o email fornecidos estão incorretos"});
            }
            return Ok(new{
                message = "success"
            });
        }
        [HttpGet(template: "user")]
        public IActionResult ActualUser(){
            try{
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);
                int userId = int.Parse(token.Issuer);

                var user = _repository.GetById(userId);
                return Ok(user); 
            }
            catch (System.Exception){
                return Unauthorized("Falta de token");
            }
        }
        [HttpGet(template: "ActualUserDetails")]
        public IActionResult DetailsActualUser (string email) {
            var user = _repository.GetByEmail(email);
              if(user == null) {
                  return BadRequest(error: new {message = "O mail está mal."});
              }  
            return Ok(user);
        }
        [HttpGet(template: "BloqUserDetails/{email}")]
        public IActionResult BloqUser (string email) {
            var user = _repository.GetByEmail(email);
              if(user == null) {
                  return BadRequest(error: new {message = "O mail está mal."});
              }  
            return Ok(user);
        }
        [HttpGet(template: "register")]
        public List<User> GetUsers(){

            var users = new List<User>();
            users = _repository.GetAll();
            return users;
        }

        [HttpPost(template: "logout")]
        public IActionResult Logout (){
            Response.Cookies.Delete("jwt", new Microsoft.AspNetCore.Http.CookieOptions{
                HttpOnly = true,
                SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None,
                Secure = true

            });
            return Ok( new{
                message= "success"
            });
        }
        [HttpPut(template: "bloquearClient")]
        public IActionResult Block(User user) {
              if(user == null) {
                  return BadRequest(error: new {message = "Não tem dados"});
              }
            var us = _repository.GetByEmail(user.Email);
            us.State = (StateUser)2;
            _repository.Atualizar(us);
            return Ok( new{
                message= "success"
            });
        }
        [HttpPut(template: "desbloquearClient")]
        public IActionResult Unlock(User user) {
              if(user == null) {
                  return BadRequest(error: new {message = "Não tem dados"});
              }
            var us = _repository.GetByEmail(user.Email);
            us.State = (StateUser)1;
            _repository.Atualizar(us);
            return Ok( new{
                message= "success"
            });
        }
        [HttpPut(template: "passwordChange")]
        public IActionResult PasswordChange (User user){
            if(user == null){
                return BadRequest(error: new {message = "Não tem dados."});
            }
            var us = _repository.GetByEmail(user.Email);
            if(us == null){
                return BadRequest(error: new {message = "Não tem dados."});
            }
            var newPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);

            us.Password = newPassword;
            _repository.Atualizar(us);
            return Ok( new{
                message= "success"
            });
        }
        [HttpPut(template: "emailChangee")]
        public IActionResult EmailChangee (User user){
            if(user == null){
                return BadRequest(error: new {message = "Não tem dados."});
            }
            var us = _repository.GetByGuidId(user.GuidId);
            if(us == null){
                return BadRequest(error: new {message = "Não tem dados."});
            }
                us.Email = user.Email;
                _repository.Atualizar(us);
                    return Ok( new{
                        message= "success"
                    });
        }
         [HttpGet(template: "emailCheck/{email}")]
        public IActionResult EmailCheck (string email) {
            var user = _repository.GetByEmail(email);
              if(user == null) {
                 return Ok(new{
                     message = "Pode ser alterado por este email"
                 });
              }else{
                return BadRequest(error: new {message = "Email já existente!"});
              } 
             
        }   
        /*    if(us == null){
                    return Ok( new{
                    message= "success"
                });
            }else{
                return BadRequest(error: new {message = "O email já existe."});
            }
        }
        [HttpDelete]
        public async Task<ActionResult<User>> DeleteUser (int id){
            var user = await _context.Users.FindAsync(id);
            if(user == null){
                return NotFound();
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private bool UserExists (int id){
            return _context.Users.Any( e => e.Id == id);
        }*/
    }
}