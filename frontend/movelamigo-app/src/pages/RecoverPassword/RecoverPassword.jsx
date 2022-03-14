import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import api from './../../api/product'

const RecoverPassword = ({submitForm}) => {
    const [values, setvalues] = useState({
            newPassword: '',
            newPasswordConfirmation: '',
            valor: 0
        }
    );
    const handlechange=(e)=>{
        setvalues({
            ...values,
            [e.target.name]:e.target.value,
        })
    }
    
    const history = useHistory();
    const home = () => {     
        history.push('/')
    }
    const [errors, seterrors] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        
        let errors = {};
        
        let regexPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(!values.newPassword){
            errors.password="Password é obrigatório."
        }else if (regexPassword.test(values.newPassword)===false){
            errors.password="Password tem de conter pelo menos uma letra maiúscula, uma letra minúscula, um digíto, um caractér especial e tem de ter pelo menos 8 caracteres."
        }
        if(values.newPasswordConfirmation !== values.newPassword){
            errors.passwordConfirmation = "Ambas as passwords têm de ser iguais."
        }
        seterrors(errors)
        if(Object.keys(errors).length === 0){
            console.log("oh carlos vai te fuder")
           const response = await api.get('user/user', {withCredentials: true});
            response.data.password = values.newPassword
             const response2 = await api.put('/user/passwordChange', response.data)  
                if(response2.status === 200){
                   submitForm(true)
        }
        }
    }
    return (
        <>
        <div className="containerSignUp1">
          <div className="app-wrapper-Login">

              <div className='d-flex justify-content-between'>
                    <h2 className="titleLogin">Mudar Password</h2>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => home()}></i></button>
              </div>
              
              <form className="form-wrapper" onSubmit={submit}>
                    
                    <div className="passwordSU">
                        <label className="label">Nova password</label>
                        <input className="inputLO" type="password" name="newPassword" value={values.newPassword}  onChange={handlechange}/>
                        {errors.password && <p className="errorSU">{errors.password}</p>} 
     
                    </div>

                    <div className="passwordSU">
                        <label className="label">Confirmar nova password</label>
                        <input className="inputLO" type="password" name="newPasswordConfirmation" value={values.newPasswordConfirmation} onChange={handlechange}/>
                        {errors.passwordConfirmation && <p className="errorSU">{errors.passwordConfirmation}</p>}         
     
                    </div>
                                
                  <button type="submit" className="submitLO mb-5">Mudar</button>

              </form>
              </div>
    </div>
    </>
    ) 
}  
export default RecoverPassword;
