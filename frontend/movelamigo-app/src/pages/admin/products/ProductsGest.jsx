import Menu from './../Menu';
import { useHistory } from 'react-router-dom'
import ftcozinha from './images/cozinha.jpg'
import ftsalaestar from './images/salaestar.jpg'
import ftsalajantar from './images/salajantar.jpg'
import ftquarto from './images/quarto.jfif'
import ftwc from './images/casabanho.jpg'
import ftescritorio from './images/escritorio.jfif'
import ftexterior from './images/exterior.png'
import ftcomplementos from './images/complementos.jpg'

export default function ProductsGest() {
    const history = useHistory();

    const cozinha = () => {     
        history.push('/Cozinhacategory')
    }
    const salaestar = () => {     
        history.push('/SalaEstarcategory')
    }
    const salajantar = () => {     
        history.push('/SalaJantarcategory')
    }
    const quarto = () => {     
        history.push('/quartocategory')
    }
    const escritorio = () => {     
        history.push('/Escritoriocategory')
    }
    const casabanho = () => {     
        history.push('/CasaBanho/')
    }
    const exterior = () => {     
        history.push('/Exteriorcategory')
    }
    const complementos = () => {     
        history.push('/Complementos/')
    }
    const admin = () => {     
        history.push('/admin')
    }
  return (
    <>
    <Menu/>
    <nav className='ProductstPage border border-dark'>
        <div className='container '>
        <div className='row'>
            <div className='d-flex justify-content-between mt-3 mb-4'>
                <button className='btn btn-outline-dark rounded border' onClick={() => admin()}>Voltar</button>
                <h3>Produtos</h3>
            </div>
            <hr></hr>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => cozinha()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftcozinha} alt=""/>
                    <h5 align="center" className="titulo-products">Cozinha</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => salaestar()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftsalaestar} alt=""/>
                    <h5 align="center" className="titulo-products">Sala de estar</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => salajantar()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftsalajantar} alt=""/>
                    <h5 align="center" className="titulo-products">Sala de jantar</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => quarto()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftquarto} alt=""/>
                    <h5 align="center" className="titulo-products">Quarto</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => escritorio()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftescritorio} alt=""/>
                    <h5 align="center" className="titulo-products">Escritório</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => casabanho()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftwc} alt=""/>
                    <h5 align="center" className="titulo-products">Casa de banho</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => exterior()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftexterior} alt=""/>
                    <h5 align="center" className="titulo-products">Exterior</h5>
                    <hr></hr>
                </div>
                <div className='col-sm-6 col-md-4 image-popup imageProdA' onClick={() => complementos()}>
                    <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={ftcomplementos} alt=""/>
                    <h5 align="center" className="titulo-products">Complementos</h5>
                    <hr></hr>
                </div>
        </div>
    </div>
    </nav>
    </>
  )
}

