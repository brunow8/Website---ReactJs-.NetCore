import './App.css';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Client from './pages/client/Client';
import ProductDetail from './pages/client/ProductDetail';
import Form from './components/views/SignUp/Form';
import Novidades from './pages/client/Novidades';
import FormLogin from './components/views/Login/FormLogin';
import PasswordRecover from './components/views/Login/PasswordRecover';
import api from '../src/api/product';
import React, { useEffect, useState } from 'react'
import AdminPage from './pages/admin/AdminPage';
import Produto from './pages/admin/products/Produto';
import AdminGest from './pages/admin/GestãoAdmin/AdminGest';



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
    console.log(userDetails.level)
  return (
      <Switch>
        <Route path='/' exact component={Client} />
        {userDetails.level === undefined ? <Route path='/login' component={FormLogin} /> : ''}
        {userDetails.level === undefined ? <Route path='/signup' component={Form} /> : ''}
        <Route path='/passwordrecover' component={PasswordRecover} />
        <Route path='/novidades' component={Novidades} />
        {userDetails.level === 'Admin' ? <Route path='/admin' component={AdminPage} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/products' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/GestAdmins' component={AdminGest} /> : ''}


        <Route path='/product/detail/:id?' exact component={ProductDetail} />
        <Route component={PageNotFound}/>
    </Switch>
  );
}