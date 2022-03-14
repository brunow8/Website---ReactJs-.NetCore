import React from 'react'
import { useHistory } from 'react-router-dom';

const RecoverPasswordSuccess = (props) => {
    const history = useHistory();

    const home = () => {
        history.push('/')
    }
    return (
        <div className="containerSignUp">
            
            <div className="app-wrapper-SignUp ">
                <h1 className="form-successSU">Password mudada com sucesso</h1>
                <div className='form-successLogin'>
                  <button className="submitSU" onClick={() => home()}>Seguir para o website</button>
                </div>
            </div>
        </div>
    )
}

export default RecoverPasswordSuccess