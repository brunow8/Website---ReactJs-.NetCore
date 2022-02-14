import React,{useState} from 'react';
import Login from './Login';
import LoginFormSuccess from './LoginFormSuccess';


 const FormLogin = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm=()=>
    {
        setformIsSubmitted(true);
    }
    return (
        <div>
        {!formIsSubmitted ? (<Login submitForm={submitForm}/>)
        :( <LoginFormSuccess/>
        )}
        
        </div>
    )
}
export default FormLogin;