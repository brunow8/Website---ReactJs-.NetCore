using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovelAmigo.Domain.Entities.Dto
{
    public class RegisterDto
    {
        public string Name {get; set;}
        public string LastName {get; set;}
        public string Nif {get; set;}
        public string Email {get; set;}
        public string Password{get; set;}
        public StateLevel Level {get; set;}
        public StateUser State {get; set;}
        public DateTime? Birthday {get; set;}
        public GenderEnum Gender{get; set;}
    }
}