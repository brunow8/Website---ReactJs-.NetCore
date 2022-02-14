import React from 'react'
import { useHistory } from 'react-router-dom';

const PasswordRecover = (props) => {
    const history = useHistory();

    const home = () => {
        history.push('/')
    }
    return (
        <div className="containerSignUp ">
                    
            
            <div className="app-wrapper-Password">
                <div className='d-flex justify-content-end'>
                    <button className='btn' align="end"><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => home()}></i></button>
                </div>
                
                <form className=' g-3 mt-3 mb-5' autoComplete='off' encType="multipart/form-data">
    
                        <input type="emailSU" className="inputSU" id="name" name='name' placeholder='Email *'/>
                    <div className='d-flex mt-3 justify-content-center'>
                        <button className='btn btn-md submitSU  text-white rounded' align="center">Pedir nova password</button>
                    </div>

                    <div className='passwordRecover mt-2'>
                        <h6 className='text-muted text-center'>
                            IMPORTANTE: O preenchimento deste formulário pode dar origem ao envio de um e-mail
                        </h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordRecover