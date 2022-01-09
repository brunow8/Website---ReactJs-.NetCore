import './App.css';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
/*import Dashboard from './pages/dashboard/Dashboard';
import Cliente from './pages/clientes/Cliente';
import ClienteForm from './pages/clientes/ClienteForm';
import Atividade from "./pages/atividades/Atividade";*/
import Produto from './pages/admin/Produto';

export default function App() {

  return (
    <Switch>
        <Route path='/' exact component={Produto} />
        {/*<Route path='/atividade/lista' component={Atividade} />
        <Route path='/cliente/lista' component={Cliente} />
        <Route path='/cliente/:id/atividade' component={Atividade} />
        <Route path='/cliente/detalhe/:id?' component={ClienteForm} />*/}
        <Route component={PageNotFound}/>
    </Switch>
  );
}