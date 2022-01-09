/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Migrations;
using MovelAmigo.Domain.Entities;

namespace ProAtividade.Data.Mappings
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder){
            builder.ToTable("Users");

            builder.Property(a => a.Name)
                    .HasColumnType("varchar(64)");
            builder.Property(a => a.Password)
                    .HasColumnType("varchar(12)");
        }
        public void Configure(EntityTypeBuilder<Client> builder){
            builder.ToTable("Clients");

            builder.Property(a => a.Name)
                    .HasColumnType("varchar(64)");
            builder.Property(a => a.Password)
                    .HasColumnType("varchar(12)");
        }
    }
}*/