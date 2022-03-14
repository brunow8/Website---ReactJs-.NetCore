import React from 'react'
import { useHistory } from 'react-router-dom';

const SignupFormSuccess = (props) => {
    const history = useHistory();
    const home = () => {     
        history.push('/')
    }
    const adminPage = () => {
        history.push('/GestAdmins')
    }
    return (
        <div className="containerSignUp">
            
            <div className="app-wrapper-SignUp ">
                <div className='form-successExit'>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => adminPage()}></i></button>
                </div>
                <h1 className="form-successSU">Conta criada</h1>
            </div>
        </div>
    )
}
export default SignupFormSuccess