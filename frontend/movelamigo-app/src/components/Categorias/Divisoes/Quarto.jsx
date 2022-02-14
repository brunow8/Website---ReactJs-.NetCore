import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import CamaCasal from './CategQuarto/CamaCasal';
import CamaIndiv from './CategQuarto/CamaIndiv';
import CamaArrum from './CategQuarto/CamaArrum';
import Berços from './CategQuarto/Berços';
import Beliches from './CategQuarto/Beliches';
import Comodas from './CategQuarto/Comodas';
import Roupeiros from './CategQuarto/Roupeiros';
import MesaCabeceira from './CategQuarto/MesaCabeceira';
import imgcamacasal from './images/imgquarto/camacasal.jpg';
import imgcamaindiv from './images/imgquarto/camaindividual.jpg'
import imgcamaarrum from './images/imgquarto/camaarrumacao.jpg'
import imgbercos from './images/imgquarto/berco.jpg'
import imgbeliches from './images/imgquarto/beliches.jpg';
import imgcabeceira from './images/imgquarto/mesacabeceira.jfif';
import imgcomodas from './images/imgquarto/comodas.jpg';
import imgroupeiros from './images/imgquarto/roupeiros.jpg';


const Quarto = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openCamaCasal, setOpenCamaCasal] = useState(true);
    const [openCamaIndiv, setOpenCamaIndiv] = useState(false);
    const [openCamaArrum, setOpenCamaArrum] = useState(false);
    const [openBerços, setOpenBerços] = useState(false);
    const [openBeliches, setOpenBeliches] = useState(false);
    const [openComodas, setOpenComodas] = useState(false);
    const [openRoupeiros, setOpenRoupeiros] = useState(false);
    const [openMesaCabeceira, setOpenMesaCabeceira] = useState(false);

    



    const closeCamaCasal = () => {
        setOpenCamaCasal(!openCamaCasal);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);
    }
    const closeCamaIndiv = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(!openCamaIndiv);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);

    }
    const closeCamaArrum = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(!openCamaArrum);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);

    }
    const closeBerços = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(!openBerços);
        setOpenBeliches(false);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);

    }
    const closeBeliches = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(!openBeliches);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);

    }
    const closeRoupeiros = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenRoupeiros(!openRoupeiros);
        setOpenComodas(false);
        setOpenMesaCabeceira(false);

    }
    const closeComodas = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenComodas(!openComodas);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(false);

    }
    const closeMesaCabeceira = () => {
        setOpenCamaCasal(false);
        setOpenCamaIndiv(false);
        setOpenCamaArrum(false);
        setOpenBerços(false);
        setOpenBeliches(false);
        setOpenComodas(false);
        setOpenRoupeiros(false);
        setOpenMesaCabeceira(!openMesaCabeceira);

    }
    return (
            <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">
                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Quarto</h3>
                                <p className='justificado'>O quarto geralmente é utilizado para descansar.
                                O mobiliário associado a um quarto costuma ser uma cama, as mesinhas de cabeceira a acompanhar a cama, uma cômoda ao fim da cama e armários para colocação da roupa.</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between '>
                                <div className=' me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgcamacasal} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeCamaCasal()} align="center">Camas de casal</a>{' '}
                                </div>
                                <div className=' me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgcamaindiv} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCamaIndiv()} align="center">Camas individuais</a>{' '}
                                </div>
                                <div className=' me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgcamaarrum} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCamaArrum()} align="center">Camas com arrumação</a>{' '}
                                </div>
                                <div className=' me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgbercos} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeBerços()}>Berços</a>{' '}
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between ">
                                <div className=' me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgbeliches} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#louceirosdecozinh' onClick={() => closeBeliches()}>Beliches</a>{' '}
                                </div>
                                <div className='me-2 col-md-3 col-3 image-popup'>
                                    <img src={imgcomodas} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeComodas()}>Cômodas</a>
                                </div>
                                <div className='col-md-3 col-3 image-popup'>
                                    <img src={imgroupeiros} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className="" href="#auxiliardecozinh" onClick={() => closeRoupeiros()}>Roupeiros</a>
                                </div>
                                <div className='col-md-3 col-3 image-popup'>
                                    <img src={imgcabeceira} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className="" href="#auxiliardecozinh" onClick={() => closeMesaCabeceira()} align="center">Mesinha de cabeceira</a>
                                </div>
                            </div>                              

                        {openCamaCasal && <CamaCasal/> }
                        {openCamaIndiv &&<CamaIndiv/> }
                        {openCamaArrum && <CamaArrum/>}
                        {openBerços && <Berços/>}
                        {openBeliches && <Beliches/>}
                        {openComodas && <Comodas/>}
                        {openRoupeiros && <Roupeiros/>}
                        {openMesaCabeceira && <MesaCabeceira/>}

                    </div>
                </div>
            </section>        
    )
}
export default Quarto;