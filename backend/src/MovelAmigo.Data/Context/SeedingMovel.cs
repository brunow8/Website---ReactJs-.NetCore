using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovelAmigo.Domain.Entities;
using MovelAmigo.Data.Context;

namespace MovelAmigo.Data.Context {
    public class SeedingMovel {
        private DataContext _context;
        public SeedingMovel(DataContext context) {
            _context = context;
        }
        /*
        public void Seed() {
            if (_context.Division.Any() || _context.Product.Any()){
                return; //DB has been seeded
            }
        /*
            Division d1 = new Division(1, "Cozinha", "Active");
            Division d2 = new Division(2, "Sala de estar", "Active");
            Division d3 = new Division(3, "Sala de jantar", "Active");
            Division d4 = new Division(4, "Quarto", "Active");
            Division d5 = new Division(5, "Escritório", "Active");
            Division d6 = new Division(6, "Complementos", "Active");
            Division d7 = new Division(7, "Exterior", "Active");
            Division d8 = new Division(8, "WC", "Active");

            Product p1 = new Product(1, "Mesa de cozinha", 0.00, "Mesa quadrada", 100, d1);
            Product p2 = new Product(2, "Cadeira de cozinha", 0.00, "Banco confortável", 100, d1);
            Product p3 = new Product(3, "Louceiro", 0.00, "Louceiro bom", 100, d1);
            Product p4 = new Product(4, "Bancos bar", 0.00, "Banco bar confortáveis", 100, d1);
            Product p5 = new Product(5, "Alçado louceiro", 0.00, "Alçado porreiro", 100, d1);
            Product p6 = new Product(6, "Estante cozinha", 0.00, "Estante sufeciente", 100, d1);
            Product p7 = new Product(7, "Auxiliar de cozinha", 0.00, "Auxiliar de cozinha agradável", 100, d1);

            Product p8 = new Product(8, "Sofá", 0.00, "...", 100, d2);
            Product p9 = new Product(9, "Mesinha de centro", 0.00, "...", 100, d2);
            Product p10 = new Product(10, "Estante", 0.00, "...", 100, d2);
            Product p11 = new Product(11, "Prateleiras", 0.00, "...", 100, d2);
            Product p12 = new Product(12, "Bases de TV", 0.00, "...", 100, d2);
            Product p13 = new Product(13, "Mesas de apoio", 0.00, "...", 100, d2);
            Product p14 = new Product(14, "Móveis de bar", 0.00, "...", 100, d2);

            Product p15 = new Product(15, "Aparadores", 0.00, "...", 100, d3);
            Product p16 = new Product(16, "Mesa de sala", 0.00, "...", 100, d3);
            Product p17 = new Product(17, "Cadeira de sala", 0.00, "...", 100, d3);
            Product p18 = new Product(18, "Vitrines", 0.00, "...", 100, d3);
            Product p19 = new Product(19, "Estantes", 0.00, "...", 100, d3);
            Product p20 = new Product(20, "Móveis de bar", 0.00, "...", 100, d3);
            Product p21 = new Product(21, "Mesinha de apoio", 0.00, "...", 100, d3);

            Product p22 = new Product(22, "Cama casado", 0.00, "...", 100, d4);
            Product p23 = new Product(23, "Cômoda", 0.00, "...", 100, d4);
            Product p24 = new Product(24, "Mesinha de cabeceira", 0.00, "...", 100, d4);
            Product p25 = new Product(25, "Camiseiros", 0.00, "...", 100, d4);
            Product p26 = new Product(26, "Roupeiros", 0.00, "...", 100, d4);
            Product p27 = new Product(27, "Cama solteiro", 0.00, "...", 100, d4);
            Product p28 = new Product(28, "Beliche", 0.00, "...", 100, d4);

            Product p29 = new Product(29, "Secretária", 0.00, "...", 100, d5);
            Product p30 = new Product(30, "Cadeira de escritório", 0.00, "...", 100, d5);
            Product p31 = new Product(31, "Bloco de gavetas", 0.00, "...", 100, d5);
            Product p32 = new Product(32, "Livrarias", 0.00, "...", 100, d5);
            Product p33 = new Product(33, "Armário", 0.00, "...", 100, d5);
            Product p34 = new Product(34, "Estante", 0.00, "...", 100, d5);
            Product p35 = new Product(35, "Cadeira gaming", 0.00, "...", 100, d5);

            Product p36 = new Product(36, "Consola", 0.00, "...", 100, d6);
            Product p37 = new Product(37, "Móvel de entrada", 0.00, "...", 100, d6);
            Product p38 = new Product(38, "Sapateira", 0.00, "...", 100, d6);
            Product p39 = new Product(39, "Moldura", 0.00, "...", 100, d6);
            Product p40 = new Product(40, "Bengaleiro e cabide", 0.00, "...", 100, d6);

            Product p41 = new Product(41, "Mesa de jardim", 0.00, "...", 100, d7);
            Product p42 = new Product(42, "Cadeira de jardim", 0.00, "...", 100, d7);
            Product p43 = new Product(43, "Baloiço", 0.00, "...", 100, d7);
            Product p44 = new Product(44, "Banco dobrável", 0.00, "...", 100, d7);
            Product p45 = new Product(45, "Banco de bar", 0.00, "...", 100, d7);

            Product p46 = new Product(46, "Coluna", 0.00, "...", 100, d8);
            Product p47 = new Product(47, "Cesto de roupa", 0.00, "...", 100, d8);
            Product p48 = new Product(48, "Móvel de casa de banho", 0.00, "...", 100, d8);
            Product p49 = new Product(49, "Auxiliar de chão", 0.00, "...", 100, d8);
            Product p50 = new Product(50, "Espelho de parede", 0.00, "...", 100, d8);
            Product p51 = new Product(51, "Espelho de teto", 0.00, "...", 100, d8);
            Product p52 = new Product(52, "Vidro de banheira", 0.00, "...", 100, d8);

            _context.Division.AddRange(d1, d1, d3, d4, d5, d6, d7, d8);
            _context.Product.AddRange(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,
            p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36,
            p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52);
            _context.SaveChanges();
            */
    }
}
