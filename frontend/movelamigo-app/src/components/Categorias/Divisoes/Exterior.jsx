import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import Conjuntos from './CategExterior/Conjuntos';
import Mesas from './CategExterior/Mesas';
import Cadeiras from './CategExterior/Cadeiras';
import Bancos from './CategExterior/Bancos';
import imgconjuntos from './images/imgexterior/conjuntos.jpg';
import imgmesas from './images/imgexterior/mesas.png';
import imgcadeiras from './images/imgexterior/cadeiras.jpg';
import imgbancos from './images/imgexterior/bancos.jpg';



const Exterior = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openConjuntos, setOpenConjuntos] = useState(true);
    const [openMesas, setOpenMesas] = useState(false);
    const [openCadeiras, setOpenCadeiras] = useState(false);
    const [openBancos, setOpenBancos] = useState(false);

    const closeConjuntos = () => {
        setOpenConjuntos(!openConjuntos);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenBancos(false);
    }
    const closeMesas = () => {
        setOpenConjuntos(false);
        setOpenMesas(!openMesas);
        setOpenCadeiras(false);
        setOpenBancos(false);
    }
    const closeCadeiras = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(!openCadeiras);
        setOpenBancos(false);
    }
    const closeBancos = () => {
        setOpenConjuntos(false);
        setOpenMesas(false);
        setOpenCadeiras(false);
        setOpenBancos(!openBancos);
    }

    return (
            <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">
                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Exterior</h3>
                                <p className='justificado'>Um exterior de uma casa é usado como espaço para relaxamento seja sozinho ou com amigos e familiares. Dessa mesma maneira costuma ser composto por uma 
                                mesa resistente às condições climatéricas como também a bancos e cadeiras para se poder relaxar.</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 exterior1'>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgconjuntos} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeConjuntos()}>Conjuntos</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgmesas} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeMesas()}>Mesas</a>{' '}
                                </div>
                                
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 exterior2">
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgcadeiras} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCadeiras()}>Cadeiras</a>{' '}
                                </div>
                                <div className='me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgbancos} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeBancos()}>Bancos</a>
                                </div>
                            </div> 
                               
                        {openConjuntos && <Conjuntos/> }
                        {openMesas &&<Mesas/> }
                        {openCadeiras && <Cadeiras/>}
                        {openBancos && <Bancos/>}

                    </div>
                </div>
            </section>        
    )
}
export default Exterior;