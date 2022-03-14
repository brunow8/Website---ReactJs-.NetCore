import React from 'react'
import Menu from './Menu'
import admin from './images/admin.jpg'
import clientes from './images/clientes.jfif'
import produ from './images/produ.jpg'
import { useHistory } from 'react-router-dom';


export default function AdminPage() {
    const history = useHistory();
    const products = () => {     
        history.push('/products')
    }
    const admins = () => {     
        history.push('/GestAdmins')
    }
    const clients = () => {     
        history.push('/GestClients')
    }
  return (
    <>
    <Menu/>
    <nav className='adminPage border border-dark'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                        <div className='col-3 '></div>
                        <div className='col-6 cartao ' onClick={() => admins()}>
                            <div className='d-flex justify-content-center'>
                                <h3 className='tituloPagAdmin mt-5'>Gestão dos administradores</h3>  
                            </div>
                            
                            <div className='d-flex justify-content-center'>
                               <img className="imagemAdmin ms-3" align="center" src={admin} alt=""/> 
                            </div>
                            
                        </div>
                        <div className='col-3 '></div>
                </div>

                <div className='col-12 d-flex justify-content-center mb-2'>
                        <div className='col-3 '></div>
                        <div className='col-6 cartao 'onClick={() => clients()}>
                            <div className='d-flex justify-content-center'>
                                <h3 className='tituloPagAdmin mt-5'>Gestão dos Clientes</h3>
                            </div>
                            
                            <div className='d-flex justify-content-center'>
                                <img className="imagemAClient ms-3" src={clientes} alt=""/>
                            </div>
                        </div>
                        <div className='col-3 '></div>
                </div>
                  
                <div className='col-12 d-flex justify-content-center mb-2'>
                        <div className='col-3 '></div>
                        <div className='col-6 cartao ' onClick={() => products()}>
                            <div className='d-flex justify-content-center'>
                                <h3 className='tituloPagAdmin mt-5'>Gestão dos Produtos</h3>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className="imagemAClient ms-3" src={produ}  alt=""/>
                            </div>
                        </div>
                        <div className='col-3 '></div>
                </div>   
            </div>
        </div>
    </nav>
    </>
  )
}
