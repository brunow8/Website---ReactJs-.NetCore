import Menu from './../../Menu';
import { useHistory } from 'react-router-dom'
import camacasal from './../images/camacasal.jpg'
import camaindiv from './../images/camaindiv.jpg'
import camaarrum from './../images/camaarruma.jpg'
import berço from './../images/berços.jfif'
import beliches from './../images/beliches.jfif'
import roupeiros from './../images/roupeiros.jfif'
import comodas from './../images/comodas.jfif'
import mesinhacabeceira from './../images/mesinhacabeceira.jfif'

export default function QuartoCategory() {
    const history = useHistory();

    const CamaCasal = async () => {  
        history.push('/Quarto/CamaCasal')
    }
    const CamaIndividual = () => {     
        history.push('/Quarto/CamaIndividual')
    }
    const CamaArrumacao = () => {     
        history.push('/Quarto/CamaArrumacao')
    }
    const Bercos = () => {     
        history.push('/Quarto/Bercos')
    }
    const Beliches = () => {     
        history.push('/Quarto/Beliches')
    }
    const MesinhaCabeceira = () => {     
        history.push('/Quarto/MesinhaCabeceira')
    }
    const Comodas = () => {     
        history.push('/Quarto/Comodas')
    }
    const Roupeiros = () => {     
        history.push('/Quarto/Roupeiros')
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
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => CamaCasal()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={camacasal} alt=""/>
                    <h5 align="center" className="titulo-products">Camas de casal</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => CamaIndividual()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={camaindiv} alt=""/>
                    <h5 align="center" className="titulo-products">Camas individuais</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => CamaArrumacao()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={camaarrum} alt=""/>
                    <h5 align="center" className="titulo-products">Cama com arrumação</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Bercos()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={berço} alt=""/>
                    <h5 align="center" className="titulo-products">Berços</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Beliches()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={beliches} alt=""/>
                    <h5 align="center" className="titulo-products">Beliches</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => MesinhaCabeceira()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={mesinhacabeceira} alt=""/>
                    <h5 align="center" className="titulo-products">Mesinhas de cabeceira</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Comodas()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={comodas} alt=""/>
                    <h5 align="center" className="titulo-products">Cômodas</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => Roupeiros()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={roupeiros} alt=""/>
                    <h5 align="center" className="titulo-products">Roupeiros</h5>
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

