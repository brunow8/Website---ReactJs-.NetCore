import { useState, useEffect, React } from 'react'
import classes from './../../css/Categorias.module.css';
import Cozinha from './Divisoes/Cozinha';
import SalaEstar from './Divisoes/SalaEstar';
import Aos from "aos";
import './../../css/aos.css'
import SalaJantar from './Divisoes/SalaJantar';
import Quarto from './Divisoes/Quarto';
import Escritorio from './Divisoes/Escritorio';
import CasaBanho from './Divisoes/CasaBanho';
import Complementos from './Divisoes/Complementos';
import Exterior from './Divisoes/Exterior';

const CategoriasForm = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openCozinha, setOpenCozinha] = useState(true);
    const [openSalaEstar, setOpenSalaEstar] = useState(false);
    const [openSalaJantar, setOpenSalaJantar] = useState(false);
    const [openQuarto, setOpenQuarto] = useState(false);
    const [openCasaBanho, setOpenCasaBanho] = useState(false);
    const [openEscritorio, setOpenEscritorio] = useState(false);
    const [openExterior, setOpenExterior] = useState(false);
    const [openComplementos, setOpenComplementos] = useState(false);


    const closeCozinha = () => {
        setOpenCozinha(!openCozinha);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeSalaEstar = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(!openSalaEstar);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeSalaJantar = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(!openSalaJantar);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeQuarto = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(!openQuarto);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeCasaBanho = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(!openCasaBanho);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeEscritorio = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(!openEscritorio);
        setOpenExterior(false);
        setOpenComplementos(false);

    }
    const closeExterior = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(!openExterior);
        setOpenComplementos(false);

    }
    const closeComplementos = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
        setOpenComplementos(!openComplementos);

    }
    return (
        <>
        <section className={classes.CategoriasForm} id="categorias" >
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h1 className="mt-3 text-center text-black">Produtos<p><strong className="custom-underline text-warning"><br></br>Móvel Amigo</strong></p></h1>
                        </div>
                            <div className='col-12 col-md-6 mb-2 mt-2 d-flex justify-content-center'>
                                <button className="me-2 btn btn-outline-dark btn-large" onClick={() => closeCozinha()}> Cozinha</button>
                                <button className="me-2 btn btn-outline-dark btn-large" onClick={() => closeSalaEstar()}> Sala de estar</button>
                                <button className="me-2 btn btn-outline-dark btn-large" onClick={() => closeSalaJantar()}> Sala de jantar</button>
                                <button className="me-2 btn btn-outline-dark btn-large" onClick={() => closeQuarto()}> Quarto</button>{' '}
                            </div>
                            <div className="col-12 col-md-6 mb-2 mt-2 d-flex justify-content-center">
                                <button className="me-2 btn btn-outline-light btn-large text-black" onClick={() => closeCasaBanho()}> Casa de banho</button>
                                <button className="me-2 btn btn-outline-light btn-large text-black" onClick={() => closeEscritorio()}> Escritório</button>
                                <button className="me-2 btn btn-outline-light btn-large text-black" onClick={() => closeExterior()}> Exterior</button> 
                                <button className="me-2 btn btn-outline-light btn-large text-black" onClick={() => closeComplementos()}> Complementos</button> 

                            </div> 
                {openCozinha && <Cozinha/> }
                {openSalaEstar &&<SalaEstar/> }
                {openSalaJantar && <SalaJantar/>}
                {openQuarto && <Quarto/>}
                {openEscritorio && <Escritorio/>}
                {openCasaBanho && <CasaBanho/>}
                {openExterior && <Exterior/>}
                {openComplementos && <Complementos/>} 
                        
                    </div>
                </div>
            </section> 
        </>
                  
    )
}
export default CategoriasForm;