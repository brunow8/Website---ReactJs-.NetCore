import React from 'react';
import GoogleMaps from './GoogleMaps/GoogleMaps';

export default function Footer() {
  return (
    <footer >
        <div className="novidade-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 mb-5">
                        <p className='text-white'><strong className='border-bottom border-warning'>Contactos:</strong></p><br></br>
                        <p ><i className="fa fa-mobile me-2" ></i><strong>:</strong> 918065721</p>
                        <p ><i className="fa fa-phone-flip me-2" ></i><strong>:</strong> 224112597</p>
                        <p ><i className="fa fa-envelope" ></i><strong>:</strong> movelamigo@gmail.com</p><br></br>

                        <p className='text-white'><strong className='border-bottom border-warning'>Redes Sociais:</strong></p>
                        <a href='https://www.instagram.com/'><i className="fa-brands fa-instagram fa-xl ms-4 me-4"></i></a>
                        <a href="https://pt-pt.facebook.com/"><i className="fa-brands fa-facebook fa-xl"></i></a>

                    </div>
                    <div className="col-sm-6 col-xs-12 google-help" >
                        <h5 className="text-white me-3" align="center">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            Porto, Portugal
                        </h5>
                        <GoogleMaps/>
                    </div>
                    <p align="center" className="copyright-text me-4">Copyright © Móvel Amigo 2022</p>
                </div>
            </div> 
        </div>
           
        <div className='preto'>
            <br></br>
            <h5 className='text-muted ms-5 textSite'>Loja demobiliário</h5>
            <p className='text-white ms-5 textSite cima2'>Inspiração para fazer de uma casa a nossa casa<br/>
            Têm questões acerca de artigos ou encomendas?</p>
            <p className='text-muted ms-5 textSite cima'>... mais</p>
            <p className='sitecolor ms-5 cima'>www.movelamigo.com/pt/pt/</p>
            <br></br>

        </div>
    </footer>
  )
  ;
}
