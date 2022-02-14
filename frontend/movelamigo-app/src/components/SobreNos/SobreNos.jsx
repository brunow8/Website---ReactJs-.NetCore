import React from 'react';
import CarouselComp from './CarouselComp';
import cidadeporto from './images/cidade-porto.jpg'

export default function SobreNos() {
  return (
    <section className=" section-about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3" data-aos="fade-up">Quem nós somos...</h2>
                </div>

                <div className="col-lg-6 col-12 mt-3 mb-lg-5">
                    <p className="me-4 text-white" data-aos="fade-up" data-aos-delay="300">O Móvel Amigo é uma loja de mobiliário fundada em 1980 em Portugal, 
                    com sede e único estabelecimento no concelho do Porto. Esta loja já conta com mais de 50 anos no mercado de trabalho mantendo-se sempre fiel aos seus clientes e assegurando a máxima qualidade dos seus produtos.</p>
                    <br></br>
                    <p className="me-4" data-aos="fade-up" data-aos-delay="300"></p>
                </div>

                <div className="col-lg-6 col-12 mt-lg-3 mb-5 portfolio-thumb" data-aos="fade-up">
                    <a href="images/cidade-porto.jpg" className="image-popup">
                        <img src={cidadeporto} className="img-fluid portfolio-image" alt=""/>
                    </a>
                </div> 
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                {/*<div className="col-md-3 col-12 p-0 portfolio-thumb ajuda-sobre">    
                    <div>
                       <img src={helena} className="img-fluid about-image portfolio-image" alt=""/> 
                    </div>  
  </div>*/}

                <div className="col-md-6 col-12 bg-dark">  
                    <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-2 pb-lg-0">
                        <h3 className="text-white mb-3" data-aos="fade-up">Conforto e estética é o nosso lema.</h3>

                        <p className="text-secondary-white-color" data-aos="fade-up">No ramo do mobiliário desde 1968.</p>
                    </div>
                </div>

                <div className="col-md-6 col-12 p-0">  
                    <CarouselComp/>
                </div>
            </div>
        </div>
    </section>
  );
}
