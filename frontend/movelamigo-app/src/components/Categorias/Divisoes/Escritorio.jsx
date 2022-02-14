import { useState, useEffect, React } from 'react'
import classes from './../../../css/Categorias.module.css'
import Aos from "aos";
import './../../../css/aos.css'
import Conjuntos from './CategEscritorio/Conjuntos';
import Secretarias from './CategEscritorio/Secretarias';
import Cadeiras from './CategEscritorio/Cadeiras';
import Livrarias from './CategEscritorio/Livrarias';
import imgconjuntos from './images/imgescritorio/conjuntos.jpg'
import imgsecretarias from './images/imgescritorio/secretarias.jpg'
import imgcadeiras from './images/imgescritorio/cadeiras.jpg'
import imglivrarias from './images/imgescritorio/livraria.jfif'


const Escritorio = ()  => {
        useEffect(() => {
            Aos.init({ duration: 1000 });
    }, []);

    const [openConjuntos, setOpenConjuntos] = useState(true);
    const [openSecretarias, setOpenSecretarias] = useState(false);
    const [openCadeiras, setOpenCadeiras] = useState(false);
    const [openLivrarias, setOpenLivrarias] = useState(false);


    const closeConjuntos = () => {
        setOpenConjuntos(!openConjuntos);
        setOpenSecretarias(false);
        setOpenCadeiras(false);
        setOpenLivrarias(false);
    }
    const closeSecretarias = () => {
        setOpenConjuntos(false);
        setOpenSecretarias(!openSecretarias);
        setOpenCadeiras(false);
        setOpenLivrarias(false);
    }
    const closeCadeiras = () => {
        setOpenConjuntos(false);
        setOpenSecretarias(false);
        setOpenCadeiras(!openCadeiras);
        setOpenLivrarias(false);
    }

    const closeLivrarias = () => {
        setOpenConjuntos(false);
        setOpenSecretarias(false);
        setOpenCadeiras(false);
        setOpenLivrarias(!openLivrarias);
    }

    return (
            <section className={classes.CategoriasForm}>
                <div className="container">
                    <div className="row">
                            <div className='col-12'>
                                <h3 align="center" className='text-black titulojust'>Escritório</h3>
                                <p className='justificado'>Um escritório de uma casa é usado como espaço para estudo e/ou trabalho. Também costuma ser a divisão das empresas dedicada às suas funções seja ou não de logística.
                                É composto por uma secretária, cadeira de escritório — ambas as peças adequadas ergonomicamente à actividade exigida de escrita. Também se encontra uma estante de livros, para a consulta como para arquivo de papéis e pastas.
                            Em algumas casas, onde o escritório é espaçoso, também costuma existir um sofá dedicado à leitura descontraída. Em algumas empresas, formas de divisão evitam os barulhos externos.</p>
                            </div>
                        <div className="col-12">
                            <h4 className="mt-3 text-center text-black">Selecione a categoria pretendida..<br></br></h4>
                        </div>

                            <div className='col-md-6 col-12 mb-4 mt-2 escritorio1'>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgconjuntos} alt="" className='rounded-circle img-fluid shadow-lg portfolio-image'></img><br></br>
                                    <a className=""href='#conjuntosdecozinha' onClick={() => closeConjuntos()}>Conjuntos</a>{' '}
                                </div>
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgsecretarias} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeSecretarias()}>Secretárias</a>{' '}
                                </div>
                                
                            </div>
                            <div className="col-md-6 col-12 mb-4 mt-2 escritorio2">
                                <div className=' me-2 col-md-4 col-4 image-popup'>
                                    <img src={imgcadeiras} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a className=""href='#mesasdecozinha' onClick={() => closeCadeiras()}>Cadeiras</a>{' '}
                                </div>
                                <div className='me-2 col-md-4 col-4 image-popup'>
                                    <img src={imglivrarias} alt="" className='rounded-circle img-fluid portfolio-image'></img><br></br>
                                    <a href="#moveldecozinh" onClick={() => closeLivrarias()}>Livrarias</a>
                                </div>
                            </div>                               

                        {openConjuntos && <Conjuntos/> }
                        {openSecretarias &&<Secretarias/> }
                        {openCadeiras && <Cadeiras/>}
                        {openLivrarias && <Livrarias/>}

                    </div>
                </div>
            </section>        
    )
}
export default Escritorio;