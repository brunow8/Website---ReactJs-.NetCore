using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovelAmigo.Domain.Entities
{
    
    public class Product
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public double Price {get; set;}
        public string Description {get; set;}
        public int Quantity {get; set;}
        public string DivisionName {get; set;}
        public StateEnum State {get; set;}
        public DateTime CreationTime { get; set; }
        public DateTime? ConclusionTime { get; set; }

        public Product(){
        }
        public Product(int id, string name, double price, string description, int quantity, StateEnum state, string divisionName){
            Id = id;
            Name = name;
            Price = price;
            Description = description;
            Quantity = quantity;
            State = state;
            DivisionName = divisionName;
        }
        /*public void Conclude (){
            if(ConclusionTime == null){
            ConclusionTime = DateTime.Now;
            }else{
            throw new Exception($"The product was conclude in: {ConclusionTime?.ToString("dd/MM/yyyy hh:mm")}");
            }
        }*/
    }
}