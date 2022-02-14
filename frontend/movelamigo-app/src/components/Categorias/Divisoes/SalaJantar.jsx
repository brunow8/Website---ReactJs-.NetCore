import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import Conjuntos from './CategSalaJantar/Conjuntos';
import Mesas from './CategSalaJantar/Mesas';
import Cadeiras from './CategSalaJantar/Cadeiras';
import Estantes from './CategSalaJantar/Estantes';
import Aparadores from './CategSalaJantar/Aparadores';
import Vitrines from './CategSalaJantar/Vitrines';
import imgconjuntos from './images/imgsalajantar/conjuntos.jpg';
import imgmesas from './images/imgsalajantar/mesas.jpg';
import imgcadeiras from './images/imgsalajantar/cadeiras.jpg';
import imgestantes from './images/imgsalajantar/estante.jpg';
import imgvitrines from './images/imgsalajantar/vitrine.jpg';
import imgaparadores from './images/imgsalajantar/aparadores.jpg';


const SalaJantar = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openConjuntos, setOpenConjuntos] = useState(true);
    const [openMesas, setOpenMesas] = useState(false);
    const [openCadeiras, setOpenCadeiras] = useState(false);
    const [openEstantes, setOpenEstantes] = useState(false);
    const [openVitrines, setOpenVitrines] = useState(false);
    const [openAparadores, setOpenAparadores] = useState(false);


    const closeConjuntos = () => {
        setOpenConjuntos(!openConjuntos);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenEstantes(false);
        setOpenVitrines(false);
        setOpenAparadores(false);
    }
    const closeMesas = () => {
        setOpenConjuntos(false);
        setOpenMesas(!openMesas);
        setOpenCadeiras(false);
        setOpenEstantes(false);
        setOpenVitrines(false);
        setOpenAparadores(false);
    }
    const closeCadeiras = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(!openCadeiras);
        setOpenEstantes(false);
        setOpenVitrines(false);
        setOpenAparadores(false);
    }
    const closeEstantes = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenEstantes(!openEstantes);
        setOpenVitrines(false);
        setOpenAparadores(false);
    }
    const closeVitrines = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenEstantes(false);
        setOpenVitrines(!openVitrines);
        setOpenAparadores(false);
    }
    const closeAparadores = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenEstantes(false);
        setOpenVitrines(false);
        setOpenAparadores(!openAparadores);
    }
    return (
            <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">
                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Sala de jantar</h3>
                                <p className='justificado'>Sala de jantar é uma sala onde pessoas costumam se reunir para consumir alimentos coletivamente, desde durante um jantar propriamente dito ou qualquer outra refeição do dia.
                                Há indícios que as refeições são feitas em mesas desde 3 mil anos antes de Cristo. Desde o Egito Antigo e Mesopotâmia os jantares são servidos na mesa. Os materiais dessas mesas foram de acordo com cada região, desde mesas de madeira talhada, com metal ou marfim incrustados à mesas de pedras.</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between '>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgconjuntos} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeConjuntos()}>Conjuntos</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgmesas} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeMesas()}>Mesas</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgcadeiras} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCadeiras()}>Cadeiras</a>{' '}
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 d-flex justify-content-between ">
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgestantes} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#louceirosdecozinh' onClick={() => closeEstantes()}>Estantes</a>{' '}
                                </div>
                                <div className='me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgvitrines} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeVitrines()}>Vitrines</a>
                                </div>
                                <div className='col-md-4 col-4 image-popup'>
                                    <img src={imgaparadores} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className="" href="#auxiliardecozinh" onClick={() => closeAparadores()}>Aparadores</a>
                                </div>
                            </div>                                

                        {openConjuntos && <Conjuntos/> }
                        {openMesas &&<Mesas/> }
                        {openCadeiras && <Cadeiras/>}
                        {openEstantes && <Estantes/>}
                        {openAparadores && <Aparadores/>}
                        {openVitrines && <Vitrines/>}

                    </div>
                </div>
            </section>        
    )
}
export default SalaJantar;