import React,{useState,useEffect} from 'react'
import Validation from './Validation';
import { useHistory } from 'react-router-dom';
import api from './../../../../api/product'



const SignupForm = ({submitForm}) => {
    const history = useHistory();
    const adminPage = () => {     
        history.push('/GestAdmins')
    }
    const [values, setvalues] = useState(
        {
            name:"",
            lastName: '',
            gender: '',
            birthday: '',
            nif: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            level: 1,
            state: 1
        }
    );
    const [users, setUsers] = useState([])

    const catchAllUsers = async () => {
        const response = await api.get('user/register');
        return response.data;
    }
    useEffect(() => {
      const getProductsAdm = async () => {
        const AllUsers = await catchAllUsers();
          if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/AllUsers) 
              setUsers(AllUsers);
        };
        
        getProductsAdm();
      }, []);

    const [errors, seterrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false);
    const handlechange=(e)=>
    {
        setvalues({
            ...values,
            [e.target.name]:e.target.value,
        })
    }
    const submithandler=(e)=>
    {
        e.preventDefault();
        addRegister(values)
        seterrors(Validation(values));
        setdataIsCorrect(true);
    };
    const addRegister = async (regist) =>{
        const response = await api.post('user/register', regist);
        console.log(response.data);
        setvalues([...values, response.data]);
      }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
},[errors]);
  
    return (
        <div className="containerSignUp">
          <div className="app-wrapper-SignUp">
              <div className='d-flex justify-content-between'>
                    <h2 className="titleSU">Adicione um novo admnistrador</h2>
                    <button className='btn'><i className="fa-solid fa-circle-xmark fa-xl" onClick={() => adminPage()}></i></button>
              </div>
              
              
              <form className="form-wrapper">
                    <div className='col-12 d-flex '>
                        <div className='col-6'>
                            <div className="nameSU ">
                                <label className="label">Primeiro Nome</label>
                                <input className="inputSU" type="text" name="name" value={values.name} onChange={handlechange}/>
                                {errors.name && <p className="errorSU">{errors.name}</p>}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="nameSU ">
                                <label className="label">Último Nome</label>
                                <input className="inputSU" type="text" name="lastName" value={values.lastName} onChange={handlechange}/>
                                {errors.lastName && <p className="errorSU">{errors.lastName}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex'>
                        <div className='col-6'>
                            <div className='birthdaySU'>
                                <label className='label'>Data de nascimento *</label>
                                <input type="date" className="inputSU" 
                                name='birthday' onChange={handlechange} value={values.birthday} required/>
                                {errors.birthday && <p className="errorSU">{errors.birthday}</p>}
                            </div>
                        </div>
                        {}
                        <div className='col-6'>
                                <div className='d-flex '>
                                   <div className='col-2'>
                                       <input align="start" className="inputSU " type="radio" name="gender" value="Masculino" onChange={handlechange}
                                    checked={values.gender==="Masculino"}/>

                                    </div> 
                                        <span className='label ms-2 '>Masculino</span>
                                </div>
                                    
                                <div className='d-flex'>
                                    <div className='col-2'>
                                       <input className="inputSU" type="radio" name="gender" value="Feminino" onChange={handlechange}
                                        checked={values.gender ==="Feminino"}/>
                                    </div> 
                                    <span className='label ms-2'>Feminino</span>
                                </div>

                                <div className='d-flex'>
                                    <div className='col-2'>
                                        <input className="inputSU" type="radio" name="gender" value="Outro" 
                                        onChange={handlechange} checked={values.gender ==="Outro"}/>
                                    </div>
                                    <span className='label ms-2'>Outro</span>
                                </div> 
                                {errors.gender && <p className="errorSU ms-4">{errors.gender}</p>}
                            </div>
                    </div>
                    
                    <div className="emailSU">
                      <label  className="label">Email</label>
                      <input  className="inputSU" type="text" name="email" value={values.email} onChange={handlechange}/> 
                      {errors.email && <p className="errorSU">{errors.email}</p>}
                      {users.map(users =>  {
                         if(users.email === values.email){
                              return <p key={users.Id} className='errorSU'>Este email já está a ser utilizado.</p>
                          }
                            return ""
                          })}
                    </div>

                    <div className='col-12 d-flex'>
                        <div className='col-md-6'>
                            <div className="passwordSU">
                                <label className="label">Password</label>
                                <input className="inputSU" type="password" name="password" value={values.password} onChange={handlechange}/>
                                {errors.password && <p className="errorSU">{errors.password}</p>}    
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="passwordSU">
                                <label className="label">Confirmar Password</label>
                                <input className="inputSU" type="password" name="passwordConfirmation" value={values.passwordConfirmation} onChange={handlechange}/>
                                {errors.passwordConfirmation && <p className="errorSU">{errors.passwordConfirmation}</p>}         
                            </div>
                        </div>
                    </div>
                                
                  <button className="submitSU" onClick={submithandler}>Sign Up</button>
                  <hr></hr>
                <div className='col-12'>
                    <p className='textoRegisto' align="center">Se tiveres alguma dúvida, não hesites em contactar-nos. Estamos sempre à tua disposição.</p>
                </div>
              </form>
              </div>
            </div>
    ) }  
export default SignupForm;
