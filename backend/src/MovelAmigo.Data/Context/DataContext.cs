using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using MovelAmigo.Domain;
using MovelAmigo.Domain.Entities;

namespace MovelAmigo.Data.Context
{
    public class DataContext : DbContext 
    {
        public DbSet<Product> Product {get; set;}
        public DbSet<User> Users {get; set;}
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<User>(entity => {
                entity.HasIndex(e => e.Email).IsUnique();
            });
            /*modelBuilder.Entity<Administrator>()
                .HasOne(p => p.User);
                
            modelBuilder.ApplyConfiguration(new UserMap());*/
        }
    }
}