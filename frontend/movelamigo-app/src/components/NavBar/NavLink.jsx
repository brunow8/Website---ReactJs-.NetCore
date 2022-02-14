import React, { useEffect, useState } from 'react'
import NavBarLogin from './NavBarLogin';
import NavBarRegister from './NavBarRegister';
import api from '../../api/product';
import NavBarAdmin from './NavBarAdmin';



const NavLink = (props) => {
    const [userDetails, setUserDetails] = useState([]);

    const catchUserDetails = async () => {
        const response = await api.get('user/user', {withCredentials: true});
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
    const render = () =>{
            if(userDetails.level === "Client"){
            return <NavBarLogin/> 
        }else if(userDetails.level === "Admin"){
            return <NavBarAdmin/>
        }else{
            return <NavBarRegister/>
        }
    }
    return (
        render()
    );
}

export default NavLink;