import { useState, useEffect, React } from 'react'
import classes from './../../css/Ideias.module.css';
import Cozinha from './Cozinha';
import SalaEstar from './SalaEstar';
import SalaJantar from './SalaJantar';
import Quarto from './Quarto';
import Escritorio from './Escritorio';
import CasaBanho from './CasaBanho';
import Exterior from './Exterior';
import Aos from "aos";
import './../../css/aos.css'

const IdeiasForm = ()  => {
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

    const closeCozinha = () => {
        setOpenCozinha(!openCozinha);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
    }
    const closeSalaEstar = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(!openSalaEstar);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
    }
    const closeSalaJantar = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(!openSalaJantar);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
    }
    const closeQuarto = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(!openQuarto);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(false);
    }
    const closeCasaBanho = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(!openCasaBanho);
        setOpenEscritorio(false);
        setOpenExterior(false);
    }
    const closeEscritorio = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(!openEscritorio);
        setOpenExterior(false);
    }
    const closeExterior = () => {
        setOpenCozinha(false);
        setOpenSalaEstar(false);
        setOpenSalaJantar(false);
        setOpenQuarto(false);
        setOpenCasaBanho(false);
        setOpenEscritorio(false);
        setOpenExterior(!openExterior);
    }
    return (
            <section className={classes.IdeiasForm} id="ideias" >
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="mt-3 text-center text-black">Você idealiza,<br></br>nós concretizamos..</h2>
                        </div>
                            <div className='col-xs-12 mb-4 mt-2 d-flex justify-content-center'>
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeCozinha()}> Cozinha</button>
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeSalaEstar()}> Sala de estar</button>
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeSalaJantar()}> Sala de jantar</button>
                            </div>
                            <div className="col-xs-12 mb-4 mt-2 d-flex justify-content-center">
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeQuarto()}> Quarto</button>{' '}
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeCasaBanho()}> Casa de banho</button>
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeEscritorio()}> Escritório</button>
                                <button className="me-2 btn btn-outline-light btn-large" onClick={() => closeExterior()}> Exterior</button> 
                            </div> 
                               

                        {openCozinha && <Cozinha/> }
                        {openSalaEstar &&<SalaEstar/> }
                        {openSalaJantar && <SalaJantar/>}
                        {openQuarto && <Quarto/>}
                        {openEscritorio && <Escritorio/>}
                        {openCasaBanho && <CasaBanho/>}
                        {openExterior && <Exterior/>}
                    </div>
                </div>
            </section>        
    )
}
export default IdeiasForm;