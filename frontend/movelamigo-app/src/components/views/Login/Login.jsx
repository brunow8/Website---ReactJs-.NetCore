import React,{useState} from 'react'
import Validation from './ValidationLogin';
import { Redirect, useHistory } from 'react-router-dom';



const Login = ({submitForm}) => {
    const history = useHistory();
    const home = () => {     
        history.push('/')
    }
    const PasswordRecover = () => {     
        history.push('/passwordrecover')
    }
    const [errors, seterrors] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [check, setCheck] = useState(null);
    
    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://localhost:5001/api/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email : email,
                password : password
            })
        });
        if(response.ok === true){
            setRedirect(true);
            setCheck(true);
        }else{
            setCheck(false);
        }
    }
    if(redirect){
        return <Redirect to="/"/>
    }
  
    return (
        <>
        
       
        <div className="containerSignUp">
          <div className="app-wrapper-Login">

              <div className='d-flex justify-content-between'>
                    <h2 className="titleLogin">Entrar na sua conta</h2>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => home()}></i></button>
              </div>
              
              
              <form className="form-wrapper" onSubmit={submit}>
                    
                    <div className="emailSU">
                      <label className="label">Email</label>
                      <input className="inputLO" type="text" name="email"  onChange={e => setEmail(e.target.value)}/> 
                      {check === false ? <p className="errorLO">O email ou a password estão incorretos.</p> : ''}
                    </div>

                    <div className="passwordSU">
                        <label className="label">Password</label>
                        <input className="inputLO" type="password" name="password"  onChange={e => setPassword(e.target.value)}/>
                        {check === false ? <p className="errorLO">O email ou a password estão incorretos.</p> : ''}
     
                    </div>
                                
                  <button type="submit" className="submitLO mb-5">Login</button>
                  <hr></hr>
                <div className='d-flex justify-content-center '>
                    <button className='btn text-muted ' onClick={() => PasswordRecover()}>Esqueceste-te da tua password?</button>
                </div>
              </form>
              </div>
    </div>
    </>
    ) 
}  
export default Login;
