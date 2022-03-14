import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import ftcozinha from './../images/cozinha.jpg'
import auxiliar from './../images/auxiliarcozinha.jpg'
import cadeira from './../images/cadeirascozinha.jfif'
import louceiro from './../images/louceiro.jpg'
import movel from './../images/moveiscozinha.jpg'
import mesa from './../images/mesacozinha.jpg'

export default function CozinhaCategory() {
    const history = useHistory();

    const conjuntos = async () => {  
        history.push('/Cozinha/Conjuntos')
    }
    const mesas = () => {     
        history.push('/Cozinha/Mesas')
    }
    const cadeiras = () => {     
        history.push('/Cozinha/Cadeiras')
    }
    const louceiros = () => {     
        history.push('/Cozinha/Louceiros')
    }
    const moveis = () => {     
        history.push('/Cozinha/MovelCozinha')
    }
    const auxiliares = () => {     
        history.push('/Cozinha/AuxiliarCozinha')
    }
    const productsPage = () => {     
        history.push('/products')
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
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => conjuntos()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftcozinha} alt=""/>
                    <h5 align="center" className="titulo-products">Conjuntos</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => mesas()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={mesa} alt=""/>
                    <h5 align="center" className="titulo-products">Mesas</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => cadeiras()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={cadeira} alt=""/>
                    <h5 align="center" className="titulo-products">Cadeiras</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => louceiros()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={louceiro} alt=""/>
                    <h5 align="center" className="titulo-products">Louceiros</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => moveis()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={movel} alt=""/>
                    <h5 align="center" className="titulo-products">Móveis de cozinha</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => auxiliares()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={auxiliar} alt=""/>
                    <h5 align="center" className="titulo-products">Auxiliares de cozinha</h5>
                    <hr></hr>
                </div>
                <div style={{height: "13px"}}>
                </div>
        </div>
    </div>
    </nav>
        
    
    </>
  )
}

