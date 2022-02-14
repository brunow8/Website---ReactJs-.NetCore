import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import Conjuntos from './CategCozinha.jsx/Conjuntos';
import Mesas from './CategCozinha.jsx/Mesas';
import Cadeiras from './CategCozinha.jsx/Cadeiras';
import Louceiros from './CategCozinha.jsx/Louceiros';
import AuxiliarCozinha from './CategCozinha.jsx/AuxiliarCozinha';
import MovelCozinha from './CategCozinha.jsx/MovelCozinha';
import louceiro from './images/imgcozinha/louceiro.jpg'
import movelcozinha from'./images/imgcozinha/movelcozinha.jpg'
import auxiliar from'./images/imgcozinha/auxiliar.jfif'
import conjuntoscozinha from './images/imgcozinha/conjuntos.jfif'
import mesascozinha from './images/imgcozinha/mesascozinha.jpg'
import cadeirascozinha from './images/imgcozinha/cadeirascozinha.jpg'


const Cozinha = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openConjuntos, setOpenConjuntos] = useState(true);
    const [openMesas, setOpenMesas] = useState(false);
    const [openCadeiras, setOpenCadeiras] = useState(false);
    const [openLouceiros, setOpenLouceiros] = useState(false);
    const [openMovelCozinha, setOpenMovelCozinha] = useState(false);
    const [openAuxiliarCozinha, setOpenAuxiliarCozinha] = useState(false);


    const closeConjuntos = () => {
        setOpenConjuntos(!openConjuntos);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenLouceiros(false);
        setOpenMovelCozinha(false);
        setOpenAuxiliarCozinha(false);
    }
    const closeMesas = () => {
        setOpenConjuntos(false);
        setOpenMesas(!openMesas);
        setOpenCadeiras(false);
        setOpenLouceiros(false);
        setOpenMovelCozinha(false);
        setOpenAuxiliarCozinha(false);
    }
    const closeCadeiras = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(!openCadeiras);
        setOpenLouceiros(false);
        setOpenMovelCozinha(false);
        setOpenAuxiliarCozinha(false);
    }
    const closeLouceiros = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenLouceiros(!openLouceiros);
        setOpenMovelCozinha(false);
        setOpenAuxiliarCozinha(false);
    }
    const closeMovelCozinha = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenLouceiros(false);
        setOpenMovelCozinha(!openMovelCozinha);
        setOpenAuxiliarCozinha(false);
    }
    const closeAuxiliarCozinha = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenLouceiros(false);
        setOpenMovelCozinha(false);
        setOpenAuxiliarCozinha(!openAuxiliarCozinha);
    }
    return (
        <>
        <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">

                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Cozinha</h3>
                                <p className='justificado'>A cozinha é uma divisão da casa especificamente usada para preparo da comida. Uma cozinha moderna é tipicamente equipada com eletrodomésticos e móveis de última geração.
                                A cozinha é de certa forma o lugar onde a família come, tendo espaço para isso. Em alguns casos, pode ser o lugar mais confortável da casa, onde a família e visitantes tendem a congregar.</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between '>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={conjuntoscozinha} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeConjuntos()}>Conjuntos</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={mesascozinha} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeMesas()}>Mesas</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={cadeirascozinha} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCadeiras()}>Cadeiras</a>{' '}
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between ">
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={louceiro} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#louceirosdecozinh' onClick={() => closeLouceiros()}>Louceiros</a>{' '}
                                </div>
                                <div className='me-2 col-md-4 col-4 image-popup'>
                                    <img src={movelcozinha} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeMovelCozinha()} align="center">Móveis de cozinha</a>
                                </div>
                                <div className='col-md-4 col-4 image-popup'>
                                    <img src={auxiliar} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className="" href="#auxiliardecozinh" onClick={() => closeAuxiliarCozinha()} align="center">Auxiliares de cozinha</a>
                                </div>
                            </div> 
                        {openConjuntos && <Conjuntos/> }
                        {openMesas &&<Mesas/> }
                        {openCadeiras && <Cadeiras/>}
                        {openLouceiros && <Louceiros/>}
                        {openAuxiliarCozinha && <AuxiliarCozinha/>}
                        {openMovelCozinha && <MovelCozinha/>}    
                    </div>
                </div>
            </section>
        </>
                  
    )
}
export default Cozinha;