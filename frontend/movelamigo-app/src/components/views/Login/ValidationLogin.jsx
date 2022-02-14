/*const validation = (values) => {
    let errors = {};

    let regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/; 
    if(!values.email){
        errors.email="Email é obrigatório."
    }else if (regexEmail.test(values.email) === false){
        errors.email="Email é inválido"
    }
    let regexPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!values.password){
        errors.password="Password é obrigatório."
    }else if (regexPassword.test(values.password)===false){
        errors.password="Password tem de conter pelo menos uma letra maiúscula, uma letra minúscula, um digíto, um caractér especial e tem de ter pelo menos 8 caracteres."
    }
    if(values.passwordConfirmation !== values.password){
        errors.passwordConfirmation = "Ambas as passwords têm de ser iguais."
    }
    return errors;
};
export default validation;*/
