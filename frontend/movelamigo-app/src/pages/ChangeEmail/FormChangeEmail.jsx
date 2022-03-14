import React,{useState} from 'react';
import ChangeEmail from './ChangeEmail';
import ChangeEmailSuccess from './ChangeEmailSuccess';


 const FormChangeEmail = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm=()=>
    {
        setformIsSubmitted(true);
    }
    return (
        <div>
        {!formIsSubmitted ? (<ChangeEmail submitForm={submitForm}/>)
        :( <ChangeEmailSuccess/>
        )}
        
        </div>
    )
}
export default FormChangeEmail;