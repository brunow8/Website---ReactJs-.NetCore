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
import AdminSignUp from './pages/admin/GestãoAdmin/SignUpAdmin/Form';
import ClientGest from './pages/admin/GestãoClientes/ClientGest';
import FormRecoverPass from './pages/RecoverPassword/FormRecoverPass';
import FormChangeEmail from './pages/ChangeEmail/FormChangeEmail';
import ProductsGest from './pages/admin/products/ProductsGest';
import CozinhaCategory from './pages/admin/products/ProductsCategories/CozinhaCategory';
import SalaEstarCategory from './pages/admin/products/ProductsCategories/SalaEstarCategory';
import SalaJantarCategory from './pages/admin/products/ProductsCategories/SalaJantarCategory';
import QuartoCategory from './pages/admin/products/ProductsCategories/QuartoCategory';
import EscritorioCategory from './pages/admin/products/ProductsCategories/EscritorioCategory';
import ExteriorCategory from './pages/admin/products/ProductsCategories/ExteriorCategory';



export default function App() {
  const [userDetails, setUserDetails] = useState([]);

  const catchUserDetails = async () => {
      const response = await api.get('user/user', {withCredentials: true});
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
        {userDetails.level === undefined ? <Route path='/login' component={FormLogin} /> : ''}
        {userDetails.level === undefined ? <Route path='/signup' component={Form} /> : ''}
        <Route path='/passwordrecover' component={PasswordRecover} />
        <Route path='/novidades' component={Novidades} />
        {userDetails.level === 'Admin' ? <Route path='/admin' component={AdminPage} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/products' component={ProductsGest} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/GestAdmins' component={AdminGest} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SignUpAdmin' component={AdminSignUp} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/GestClients' component={ClientGest} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/Cozinhacategory' component={CozinhaCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/Conjuntos' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/Mesas' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/Cadeiras' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/Louceiros' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/MovelCozinha' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Cozinha/AuxiliarCozinha' component={Produto} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/SalaEstarcategory' component={SalaEstarCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/Sofas' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/Estantes' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/Prateleiras' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/BasesTV' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/MovelBar' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaEstar/MesinhaCentro' component={Produto} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/SalaJantarcategory' component={SalaJantarCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Conjuntos' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Mesas' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Cadeiras' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Vitrines' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Aparadores' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/SalaJantar/Estantes' component={Produto} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/Quartocategory' component={QuartoCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/CamaCasal' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/CamaIndividual' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/Bercos' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/Beliches' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/MesinhaCabeceira' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/CamaArrumacao' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/Comodas' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Quarto/Roupeiros' component={Produto} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/CasaBanho/' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Complementos/' component={Produto} /> : ''}
        
        {userDetails.level === 'Admin' ? <Route path='/Escritoriocategory' component={EscritorioCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Escritorio/Conjuntos' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Escritorio/Secretarias' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Escritorio/Cadeiras' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Escritorio/Livrarias' component={Produto} /> : ''}

        {userDetails.level === 'Admin' ? <Route path='/Exteriorcategory' component={ExteriorCategory} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Exterior/Conjuntos' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Exterior/Mesas' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Exterior/Cadeiras' component={Produto} /> : ''}
        {userDetails.level === 'Admin' ? <Route path='/Exterior/Bancos' component={Produto} /> : ''}

        <Route path='/PasswordChange' component={FormRecoverPass} />
        <Route path='/EmailChange' component={FormChangeEmail} />





        <Route path='/product/detail/:id?' exact component={ProductDetail} />
        <Route component={PageNotFound}/>
    </Switch>
  );
}