import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import api from './../../../api/product'



const Login = ({submitForm}) => {

    const [showBloqWarning, setShowBloqWarning] = useState (false);
    const handleBloqWarning = () => setShowBloqWarning(!showBloqWarning);
     
            
    const history = useHistory();
    const home = () => {     
        history.push('/')
    }
    const PasswordRecover = () => {     
        history.push('/passwordrecover')
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(null);
    
    const submit = async (e) => {
        e.preventDefault();
        
        const response2 = await fetch('https://localhost:5001/api/user/loginDetails',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email : email,
                password : password
            })
        });
          if(response2.ok === true){
            const response1 = await api.get(`user/BloqUserDetails/${email}`);
            const values = response1.data;
            if(values.state === 'Active'){
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
                    setCheck(true);
                    submitForm(true);
                  }else{
                      setCheck(false);
                  }
          }if(values.state === 'Inactive'){
            handleBloqWarning();
          }
        }
        
        if(response2.ok === false){
            setCheck(false);
        }
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
            <Modal show={showBloqWarning} onHide={handleBloqWarning} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>ERRO!!</Modal.Title>
              </Modal.Header>
              <Modal.Body>A sua conta foi bloqueada devido a actividades suspeitas!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleBloqWarning}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </>
    ) 
}  
export default Login;
