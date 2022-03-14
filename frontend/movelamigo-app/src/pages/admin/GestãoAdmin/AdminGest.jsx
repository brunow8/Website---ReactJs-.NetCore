import Menu from './../Menu';
import React, { useEffect, useState } from 'react'
import api from './../../../api/product';
import { useHistory } from 'react-router-dom'


export default function AdminGest() {
    const history = useHistory();
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

  return (
    <>
    <Menu/>
    <div className='container'>
        <div className='row'>
            <div className='d-flex justify-content-between mt-3 mb-4'>
                <button className='btn btn-outline-dark rounded border' onClick={() => admin()}>Voltar</button>
                <button className='btn btn-primary' onClick={() => register()}> Adicionar administrador</button>
            </div>
            <hr></hr>
            <h3>Admnistradores</h3>
            <table className='customers box-shadow'>
                <tr>
                    <th>Nome</th>     
                    <th>Último Nome</th>                      
                    <th>Email</th>                      
                </tr>
                {userDetails.filter((prod) => prod.level === 'Admin' && prod.state === 'Active')
                
                                    .map((prod) => (
                                        <tr key={prod.id} className='sombreado'>
                                            <td >
                                                {prod.name}
                                            </td>
                                            <td >
                                                 {prod.lastName}
                                            </td>
                                            <td >
                                                {prod.email}
                                            </td>
                                        </tr>
                                   ))}
            </table>
        </div>
    </div>
    </>
  )
}
