import React,{useState} from 'react';
import SignUp from './SignUp';
import SignUpFormSuccess from './SignUpFormSuccess';


 const Form = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm=()=>
    {
        setformIsSubmitted(true);
    }
    return (
        <div>
        {!formIsSubmitted ? (<SignUp submitForm={submitForm}/>)
        :( <SignUpFormSuccess/>
        )}
        
        </div>
    )
}
export default Form;