import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import Sofas from './CategSalaEstar/Sofas';
import Estantes from './CategSalaEstar/Estantes';
import Prateleiras from './CategSalaEstar/Prateleiras';
import BasesTV from './CategSalaEstar/BasesTV';
import MesasApoioCentro from './CategSalaEstar/MesasApoioCentro';
import MovelBar from './CategSalaEstar/MovelBar';
import imgsofas from './images/imgsalaestar/sofa.jpg'
import imgestantes from './images/imgsalaestar/estante.jpg'
import imgprateleiras from './images/imgsalaestar/prateleira.jpg'
import imgbasestv from './images/imgsalaestar/moveistv.jpg'
import imgmesasapoio from './images/imgsalaestar/mesinhacentro.jpg'
import imgmovelbar from './images/imgsalaestar/movelbar.png'


const SalaEstar = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openSofas, setOpenSofas] = useState(true);
    const [openEstantes, setOpenEstantes] = useState(false);
    const [openPrateleiras, setOpenPrateleiras] = useState(false);
    const [openBasesTV, setOpenBasesTV] = useState(false);
    const [openMovelBar, setOpenMovelBar] = useState(false);
    const [openMesasApoioCentro, setOpenMesasApoioCentro] = useState(false);


    const closeSofas = () => {
        setOpenSofas(!openSofas);
        setOpenEstantes(false);
        setOpenPrateleiras(false);
        setOpenBasesTV(false);
        setOpenMovelBar(false);
        setOpenMesasApoioCentro(false);
    }
    const closeEstantes = () => {
        setOpenSofas(false);
        setOpenEstantes(!openEstantes);
        setOpenPrateleiras(false);
        setOpenBasesTV(false);
        setOpenMovelBar(false);
        setOpenMesasApoioCentro(false);
    }
    const closePrateleiras = () => {
        setOpenSofas(false);
        setOpenEstantes(false);
        setOpenPrateleiras(!openPrateleiras);
        setOpenBasesTV(false);
        setOpenMovelBar(false);
        setOpenMesasApoioCentro(false);
    }
    const closeBasesTV = () => {
        setOpenSofas(false);
        setOpenEstantes(false);
        setOpenPrateleiras(false);
        setOpenBasesTV(!openBasesTV);
        setOpenMovelBar(false);
        setOpenMesasApoioCentro(false);
    }
    const closeMovelBar = () => {
        setOpenSofas(false);
        setOpenEstantes(false);
        setOpenPrateleiras(false);
        setOpenBasesTV(false);
        setOpenMovelBar(!openMovelBar);
        setOpenMesasApoioCentro(false);
    }
    const closeMesasApoioCentro = () => {
        setOpenSofas(false);
        setOpenEstantes(false);
        setOpenPrateleiras(false);
        setOpenBasesTV(false);
        setOpenMovelBar(false);
        setOpenMesasApoioCentro(!openMesasApoioCentro);
    }
    return (
            <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">
                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Sala de estar</h3>
                                <p className='justificado'>A sala de estar é uma sala onde os residentes de uma casa socializam, onde passam mais tempo.
                                Costuma ter uns sofás e alguns aparelhos de conforto, relaxamento e distração, como aparelhagem, televisão. 
                                Também é usual possuir uma mesa de comer, onde se recebem os convidados sendo nesse caso designada por sala comum (pois junta as funções clássicas de sala de estar e 
                                sala de jantar).</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between '>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgsofas} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeSofas()}>Sofás</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgestantes} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeEstantes()}>Estantes</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgprateleiras} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closePrateleiras()}>Prateleiras</a>{' '}
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between ">
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgbasestv} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#louceirosdecozinh' onClick={() => closeBasesTV()} align="center">Bases de multimédia</a>{' '}
                                </div>
                                <div className='me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgmovelbar} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeMovelBar()} >Móvel de Bar</a>
                                </div>
                                <div className='col-md-4 col-4 image-popup'>
                                    <img src={imgmesasapoio} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className="" href="#auxiliardecozinh" onClick={() => closeMesasApoioCentro()} align="center">Mesinhas de centro/apoio</a>
                                </div>
                            </div>

                        {openSofas && <Sofas/> }
                        {openEstantes &&<Estantes/> }
                        {openPrateleiras && <Prateleiras/>}
                        {openBasesTV && <BasesTV/>}
                        {openMesasApoioCentro && <MesasApoioCentro/>}
                        {openMovelBar && <MovelBar/>}

                    </div>
                </div>
            </section>        
    )
}
export default SalaEstar;