import Menu from './../Menu';
import React, { useEffect, useState } from 'react'
import api from './../../../api/product';
import { useHistory } from 'react-router-dom'


export default function ClientGest() {
    const history = useHistory();
    const [bloqValues, setBloqValues] = useState ([])

    const register = () => {     
        history.push('/SignUpAdmin')
    }
    const admin = () => {     
        history.push('/admin')
    }
    const [userDetails, setUserDetails] = useState([]);

  const catchUserDetails = async () => {
      const response = await api.get('user/register', {withCredentials: true});
      return response.data;
  }
  useEffect(() => {
    const getUserDetails = async () => {
      const AllUserDetails = await catchUserDetails();
        if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/AllUserDetails) 
            setUserDetails(AllUserDetails);
      };
      
      getUserDetails();
    }, []);


    const Bloquear = async(email) => {

        const response = await api.get(`user/BloqUserDetails/${email}`);
        const values = response.data;
        const response1 = await api.put('user/bloquearClient', values);
        window.location.reload();
    }
    const Desbloquear = async(email) => {

        const response = await api.get(`user/BloqUserDetails/${email}`);
        const values = response.data;
        const response1 = await api.put('user/desbloquearClient', values);
        window.location.reload();
    }

  return (
    <>
    <Menu/>
    <nav className='clientPage border border-dark'>
        <div className='container '>
        <div className='row'>
            <div className='d-flex justify-content-between mt-3 mb-4'>
                <button className='btn btn-outline-dark rounded border' onClick={() => admin()}>Voltar</button>
                <h3>Clientes</h3>
            </div>
            <hr></hr>
            <h3>Clientes</h3>
            {userDetails.length > 0 ?
            
            <table className='customers box-shadow'>
                <tr className='textoClientPage'>
                    <th >Nome</th>     
                    <th >Último Nome</th>                      
                    <th >Email</th> 
                    <th >Nif</th>
                    <th >Data de Nascimento</th> 
                    <th >Data de criação</th>                    
                </tr>
                {userDetails.filter((prod) => prod.level === 'Client')
                
                                    .map((prod) => (
                                        <tr key={prod.email} className='sombreado'>
                                            <td>
                                                {prod.name}
                                            </td>
                                            <td >
                                                 {prod.lastName}
                                            </td>
                                            <td >
                                                {prod.email}
                                            </td>
                                            <td >
                                                {prod.nif}
                                            </td>
                                            <td >
                                                {prod.birthday}
                                            </td>
                                            <td >
                                                {prod.creation}
                                            </td>
                                            <td>
                                               {prod.state === 'Active' ? 
                                                    <div>
                                                        <button className='btn btn-outline-primary' onClick={() => Bloquear(prod.email)}><i className="fa fa-circle-check me-2"></i>Ativo</button>
                                                   </div> 
                                                   : 
                                                   <div>
                                                       <button className='btn btn-outline-danger' onClick={() => Desbloquear(prod.email)}><i class="fa fa-circle-xmark me-2"></i> Bloqueado</button>
                                                    </div>} 
                                            </td>
                                        </tr>
                                   ))}
            
            </table>
        : <h6>Nenhum dado encontrado!</h6>}
        
        </div>
    </div>
    </nav>
    </>
  )
}

