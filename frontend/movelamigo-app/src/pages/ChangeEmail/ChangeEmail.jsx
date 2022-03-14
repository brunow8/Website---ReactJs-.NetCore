import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import api from './../../api/product'

const ChangeEmail = ({submitForm}) => {
    const [values, setvalues] = useState({
            newEmail: '',
            newEmailConfirmation: '',
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
    const [mailExiste, setMailExiste] =  useState('');

    const submit = async (e) => {
        e.preventDefault();
        
        let errors = {};
        
        let regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/; 
        if(!values.newEmail){
            errors.email="Email é obrigatório."
        }else if (regexEmail.test(values.newEmail) === false){
            errors.email="Email é inválido"
        }else if(values.newEmail !== values.newEmailConfirmation){
            errors.emailConfirmation = "Ambas os email's têm de ser iguais."
        }
        seterrors(errors)
        console.log(values.newEmail)
        if(Object.keys(errors).length === 0){
            const response3 = await api.get(`user/emailCheck/${values.newEmail}`);
            console.log(response3)
            if(response3.status === 200){
                    const response = await api.get('user/user', {withCredentials: true});
                    response.data.email = values.newEmail
                    console.log(response)
                    
                    const response2 = await api.put('/user/emailChangee', response.data)  
                        if(response2.status === 200){
                            submitForm(true)
                        }
            }   
                errors.email = "Email já existente!"
                errors.emailConfirmation = "Email já existente!"
                seterrors(errors)
                console.log(Object.keys(errors))
        }
    }
    
    return (
        <>
        <div className="containerSignUp2">
          <div className="app-wrapper-Login">

              <div className='d-flex justify-content-between'>
                    <h2 className="titleLogin">Mudar Email</h2>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => home()}></i></button>
              </div>
              
              <form className="form-wrapper" onSubmit={submit}>
                    
                    <div className="passwordSU">
                        <label className="label">Novo email</label>
                        <input className="inputLO" type="text" name="newEmail" value={values.newEmail}  onChange={handlechange}/>
                        {errors.email && <p className="errorSU">{errors.email}</p>} 
                        {mailExiste && <p className="errorSU">{mailExiste}</p>} 

     
                    </div>

                    <div className="passwordSU">
                        <label className="label">Confirmar novo email</label>
                        <input className="inputLO" type="text" name="newEmailConfirmation" value={values.newEmailConfirmation} onChange={handlechange}/>
                        {errors.emailConfirmation && <p className="errorSU">{errors.emailConfirmation}</p>}
                        {mailExiste && <p className="errorSU">{mailExiste}</p>} 

     
                    </div>
                                
                  <button type="submit" className="submitLO mb-5">Mudar</button>

              </form>
              </div>
    </div>
    </>
    ) 
}  
export default ChangeEmail;
