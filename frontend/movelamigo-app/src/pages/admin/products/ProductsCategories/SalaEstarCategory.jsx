import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import sofa from './../images/sofa.jpg'
import estante from './../images/estantes.jfif'
import prateleira from './../images/prateleiras.jfif'
import movelBar from './../images/movelbar.jpg'
import basetv from './../images/basestv.png'
import mesinhacentro from './../images/mesinhacentro.jfif'

export default function SalaEstarCategory() {
    const history = useHistory();

    const Sofás = async () => {  
        history.push('/SalaEstar/Sofas')
    }
    const Estantes = () => {     
        history.push('/SalaEstar/Estantes')
    }
    const Prateleiras = () => {     
        history.push('/SalaEstar/Prateleiras')
    }
    const BasesTV = () => {     
        history.push('/SalaEstar/BasesTV')
    }
    const MovelBar = () => {     
        history.push('/SalaEstar/MovelBar')
    }
    const MesinhaCentro = () => {     
        history.push('/SalaEstar/MesinhaCentro')
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
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Sofás()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={sofa} alt=""/>
                    <h5 align="center" className="titulo-products">Sofás</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Prateleiras()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={prateleira} alt=""/>
                    <h5 align="center" className="titulo-products">Prateleiras</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Estantes()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={estante} alt=""/>
                    <h5 align="center" className="titulo-products">Estantes</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => BasesTV()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={basetv} alt=""/>
                    <h5 align="center" className="titulo-products">Bases de Multimédia</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => MovelBar()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={movelBar} alt=""/>
                    <h5 align="center" className="titulo-products">Móveis de Bar</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => MesinhaCentro()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={mesinhacentro} alt=""/>
                    <h5 align="center" className="titulo-products">Mesinhas de centro/apoio</h5>
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

