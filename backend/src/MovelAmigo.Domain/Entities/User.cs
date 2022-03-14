using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MovelAmigo.Domain.Entities
{
    public class User
    {
        public string Nif {get; set;}
        public Guid GuidId {get; set;}
        public int Id {get; set;}
        public string Name {get; set;}
        public string LastName {get; set;}
        public string  Email {get; set;}
        public GenderEnum Gender {get; set;}
        public string Password {get; set;}
        public StateLevel Level {get; set;}
        public StateUser State {get; set;}
        public DateTime? Birthday {get; set;}
        public DateTime Creation {get; set;}

        public User () {
        }
        public User (Guid guidId,int id, string name, string lastName, string email, string password, StateLevel level, StateUser state, string nif, DateTime creation, GenderEnum gender){
            GuidId = guidId;
            Id = id;
            Name = name;
            LastName = lastName;
            Email = email;
            Password = password;
            Level = level;
            State = state;
            Nif = nif;
            Creation = creation;
            Gender = Gender;
        }
    }
}