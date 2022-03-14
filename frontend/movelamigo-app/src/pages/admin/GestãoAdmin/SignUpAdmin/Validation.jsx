
const validation = (values) => {

    let errors = {};
    if(!values.name){
        errors.name= "Nome é obrigatório."
    }else if(values.name.length < 3){
        errors.name="Nome é inválido."
    }
    if(!values.lastName){
        errors.lastName= "Último Nome é obrigatório."
    }else if(values.lastName.length < 3){
        errors.lastName="Último Nome é inválido."
    }
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
    if(!values.gender){
        errors.gender = "Você não escolheu um gênero."
    }
    if(!values.birthday){
        errors.birthday = "Data de nascimento é obrigatório."
    }
    return errors;
};
export default validation;
