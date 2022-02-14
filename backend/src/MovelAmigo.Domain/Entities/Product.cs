using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

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
        public string Category{get; set;}
        public double DeliveryPrice {get; set;}
        public string Details {get; set;}
        public DeliveryEnum DeliveryState {get; set;}
        public DateTime CreationTime { get; set; }
        public DateTime? ConclusionTime { get; set; }
        public string ImageName {get; set;}
        [NotMapped]
        public IFormFile ImageFile {get; set;}
        public Product(){
        }
        public Product(int id, string name, double price, string description, int quantity, StateEnum state, string divisionName, string imageName, IFormFile imageFile, string category, string details, double deliveryPrice, DeliveryEnum deliveryState){
            Id = id;
            Name = name;
            Price = price;
            Description = description;
            Quantity = quantity;
            State = state;
            Category = category;
            DivisionName = divisionName;
            ImageName = imageName;
            ImageFile = imageFile;
            Details = details;
            DeliveryPrice = deliveryPrice;
            DeliveryState = deliveryState;
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