import './App.css';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Produto from './pages/admin/Produto';
import Client from './pages/client/Client';
import ProductDetail from './pages/client/ProductDetail';
import Form from './components/views/SignUp/Form';
import Novidades from './pages/client/Novidades';
import FormLogin from './components/views/Login/FormLogin';
import PasswordRecover from './components/views/Login/PasswordRecover';
import api from '../src/api/product';
import React, { useEffect, useState } from 'react'



export default function App() {
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
  return (
      <Switch>
        <Route path='/' exact component={Client} />
        <Route path='/signup' component={Form} />
        <Route path='/login' component={FormLogin} />
        <Route path='/passwordrecover' component={PasswordRecover} />
        <Route path='/novidades' component={Novidades} />
        {userDetails.level === 'Admin' ? <Route path='/admin' component={Produto} /> : ''}
        <Route path='/product/detail/:id?' exact component={ProductDetail} />
        <Route component={PageNotFound}/>
    </Switch>
  );
}