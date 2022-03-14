import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import conjunto from './../images/conjuntosalajantar.jfif'
import mesa from './../images/mesacozinha.jpg'
import cadeira from './../images/cadeirassalajantar.jfif'
import vitrine from './../images/vitrines.jfif'
import aparador from './../images/aparadores.jfif'
import estante from './../images/estantessalajantar.png'

export default function SalaJantarCategory() {
    const history = useHistory();

    const Conjuntos = async () => {  
        history.push('/SalaJantar/Conjuntos')
    }
    const Mesas = () => {     
        history.push('/SalaJantar/Mesas')
    }
    const Cadeiras = () => {     
        history.push('/SalaJantar/Cadeiras')
    }
    const Estantes = () => {     
        history.push('/SalaJantar/Estantes')
    }
    const Vitrines = () => {     
        history.push('/SalaJantar/Vitrines')
    }
    const Aparadores = () => {     
        history.push('/SalaJantar/Aparadores')
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
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Estantes()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={estante} alt=""/>
                    <h5 align="center" className="titulo-products">Estantes</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Vitrines()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={vitrine} alt=""/>
                    <h5 align="center" className="titulo-products">Vitrines</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Aparadores()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={aparador} alt=""/>
                    <h5 align="center" className="titulo-products">Aparadores</h5>
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

