import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import conjunto from './../images/conjuntoescritorio.jfif'
import secretaria from './../images/secretaria.jpg'
import cadeira from './../images/cadeiraescritorio.jpg'
import livraria from './../images/livrarias.jfif'

export default function EscritorioCategory() {
    const history = useHistory();

    const Conjuntos = async () => {  
        history.push('/Escritorio/Conjuntos')
    }
    const Secretárias = () => {     
        history.push('/Escritorio/Secretarias')
    }
    const Cadeiras = () => {     
        history.push('/Escritorio/Cadeiras')
    }
    const Livrarias = () => {     
        history.push('/Escritorio/Livrarias')
    }
    const productsPage = () => {
        history.push("/products")
    }
    
  return (
    <>
    <Menu/>
    <nav className='ProductstPage border border-dark'>
        <div className='container '>
        <div className='row'>
            <div className='d-flex justify-content-between mt-3 mb-4'>
                <button className='btn btn-outline-dark rounded border' onClick={() => productsPage()}>Voltar</button>
                <h3>Produtos</h3>
            </div>
            <hr></hr>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Conjuntos()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={conjunto} alt=""/>
                    <h5 align="center" className="titulo-products">Conjuntos</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Secretárias()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={secretaria} alt=""/>
                    <h5 align="center" className="titulo-products">Secretárias</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Cadeiras()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={cadeira} alt=""/>
                    <h5 align="center" className="titulo-products">Cadeiras</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Livrarias()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={livraria} alt=""/>
                    <h5 align="center" className="titulo-products">Livrarias</h5>
                    <hr></hr>
                </div>
                <div style={{height: "18px"}}>
                </div>
        </div>
    </div>
    </nav>
        
    
    </>
  )
}

