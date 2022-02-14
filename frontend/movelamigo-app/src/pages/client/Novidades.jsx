import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import capitalmovel from './images/capita-movel.png'
import feiramovel from './images/feira-mobiliario.png'
import Footer from './../../components/Footer'

export default function Novidades() {
    return (
        <>
            <section className="video-capa video-help">
                <div className="heroText">
                    <h1 className="titulo-video text-white" data-aos="fade-up">
                        57.ª Capital do Móvel - Feira de mobiliário e decoração
                    </h1>

                    <div className="d-flex justify-content-center align-items-center">
                        <a href="." className="text-secondary-white-color social-share-link bi-bookmark-fill ms-3 me-4">
                            <i className="fa fa-calendar-days me-2"></i>
                            4 a 12 Setembro de 2022
                        </a>
                    </div>
                </div>

                <div className="videoWrapper">
                    <img src={capitalmovel} className="img-fluid news-detail-image" alt=""/>
                </div>

                <div className="overlay"></div>
            </section>
            <NavBar/>
            <section className="section-novidade">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-10 mx-auto">
                            <h2 className="mb-3"><strong>O que é a 57.ª Capital Móvel - Feira mobiliário e decoração?</strong></h2>

                            <p className="me-4 text-black">A 57.ª edição da Capital do Móvel, organizada pela Associação Empresarial de Paços de Ferreira (AEPF), está em contagem decrescente para mostrar o que de melhor se faz na área do mobiliário. O certame irá realizar-se entre os dias 4 e 12 de setembro, na Alfândega do Porto, sob o mote “Móveis que são a sua casa”. Este é o terceiro ano que o evento acontece em Portugal no contexto de pandemia, por isso a primeira preocupação da organização foi garantir todas as medidas de segurança.<br></br>
                            “O edifício, tem cerca de 6 mil metros quadrados, assim garante espaço suficiente para assegurar a distância de segurança entre os visitantes e oferece corredores largos para definir caminhos de circulação”, explica Filipa Belo, diretora-executiva da AEPF.</p>
                            <br></br>
                            <h3>A 57.ª Capital do Móvel espera receber mais de 15 mil visitantes</h3>

                            <div className="clearfix my-4 mt-lg-0 mt-5">
                                <div className="col-md-6 float-md-end mb-3 ms-md-3">
                                    <figure className="figure">
                                        <img src={feiramovel} className="img-fluid news-image" alt=""/>
                                    </figure>
                                </div>

                                  <p className="text-black">
                                    Por outro lado, a responsável salienta que a realização da 57.ª edição da Capital do Móvel é mais importante do que nunca numa altura em que muitos empresários atravessam dificuldades, devido à COVID-19:<br></br> “Nesta fase difícil que atravessamos, era perentório a realização da feira. Nesta altura, o Governo está a lançar medidas de apoio ao consumo interno, logo é um bom momento para mostrar o que é nosso e a qualidade do nosso mobiliário”. 
                                  </p>

                                <br></br>
                                <hr></hr>
                                  <p className="text-black">
                                    A 57.ª Capital do Móvel irá reunir durante nove dias 50 expositores, que prometem mostrar o que melhor se faz na área do mobiliário em Portugal e a organização espera cerca mais de 15 mil visitantes, uma previsão semelhante às previsões da edição do ano passado.
                                  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>    
    )
}
