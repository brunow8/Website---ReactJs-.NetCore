import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import conjunto from './../images/conjuntoexterior.jpg'
import mesa from './../images/mesaexterior.jfif'
import cadeira from './../images/cadeirasexterior.jfif'
import banco from './../images/bancoexterior.jfif'

export default function ExteriorCategory() {
    const history = useHistory();

    const Conjuntos = async () => {  
        history.push('/Exterior/Conjuntos')
    }
    const Mesas = () => {     
        history.push('/Exterior/Mesas')
    }
    const Cadeiras = () => {     
        history.push('/Exterior/Cadeiras')
    }
    const Bancos = () => {     
        history.push('/Exterior/Bancos')
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
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Mesas()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={mesa} alt=""/>
                    <h5 align="center" className="titulo-products">Mesas</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Cadeiras()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={cadeira} alt=""/>
                    <h5 align="center" className="titulo-products">Cadeiras</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Bancos()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={banco} alt=""/>
                    <h5 align="center" className="titulo-products">Bancos</h5>
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

