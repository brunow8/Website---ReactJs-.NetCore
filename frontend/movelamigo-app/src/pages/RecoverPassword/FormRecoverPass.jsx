import React,{useState} from 'react';
import RecoverPassword from './../RecoverPassword/RecoverPassword';
import RecoverPasswordSuccess from './../RecoverPassword/RecoverPasswordSuccess';


 const FormRecoverPass = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm=()=>
    {
        setformIsSubmitted(true);
    }
    return (
        <div>
        {!formIsSubmitted ? (<RecoverPassword submitForm={submitForm}/>)
        :( <RecoverPasswordSuccess/>
        )}
        
        </div>
    )
}
export default FormRecoverPass;