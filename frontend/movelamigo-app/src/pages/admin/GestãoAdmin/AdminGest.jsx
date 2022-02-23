import Menu from './../Menu';
import React, { useEffect, useState } from 'react'
import api from './../../../api/product';


export default function AdminGest() {
    const [userDetails, setUserDetails] = useState([]);

  const catchUserDetails = async () => {
      const response = await api.get('user/register', {withCredentials: true});
      console.log(response)
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
                <button className='btn btn-outline-dark rounded border'>Voltar</button>
                <button className='btn btn-primary'> Adicionar administrador</button>
            </div>
            <hr></hr>
            <table className='customers'>
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
