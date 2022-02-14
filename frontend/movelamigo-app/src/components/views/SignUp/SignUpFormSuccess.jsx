import React from 'react'
import { useHistory } from 'react-router-dom';

const SignupFormSuccess = (props) => {
    const history = useHistory();
    const home = () => {     
        history.push('/')
    }
    const Login = () => {
        history.push('/login')
    }
    return (
        <div className="containerSignUp">
            
            <div className="app-wrapper-SignUp ">
                <div className='form-successExit'>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => home()}></i></button>
                </div>
                <h1 className="form-successSU">Conta criada</h1>
                <div className='form-successLogin'>
                  <button className="submitSU" onClick={() => Login()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default SignupFormSuccess