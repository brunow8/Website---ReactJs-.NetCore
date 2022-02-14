/*import React, {useState} from 'react';
import api from './../../api/product'
import { useHistory } from 'react-router-dom';
import Footer from './../Footer';
import { Modal, Button } from 'react-bootstrap'
import * as yup from "yup";
import styled from 'styled-components'


const registerInitial = {
        name: '',
        apelido: '',
        gender: '',
        birthday: '',
        nif: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        level: 2,
        state: 1
    }
export default function Register(props) {
    const history = useHistory();
    const [register, setRegister] = useState(registerInitial)
    const [registers, setRegisters] = useState([])

    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*A-Z])(?=.=[a-zA-Z]).{8,}$/;
    const validateShcema = yup.object({
        name: yup.string().min(10, "Insira o seu primeiro nome por favor").required("Primeiro nome é obrigatório"),
        apelido: yup.string().min(9, "Insira o seu apelido por favor").required("Apelido é obrigatório"),
        nif: yup.number().min(9, "Insira o seu nif por favor").max(9, "Insira o seu nif por favor").notRequired("Nif não é obrigatório"),
        email: yup.string().email("Insira o email correto por favor").required("O email é obrigatório"),
        password: yup.string().matches(PASSWORD_REGEX, "Digite uma password mais forte").required(),
        passwordConfirmation: yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false), 
            then: yup.string().oneOf([yup.ref("password")], "As passwords digitadas não são iguais")
        }),
    });
    
    const [smShowSuccessModal, setSmShowSuccessModal] = useState (false);
    const handleSuccessModal = () => {
        console.log("fodase")
        setSmShowSuccessModal(!smShowSuccessModal);
    }
    const sair = () =>{
        handleSuccessModal()
        history.push('/')
    }
    const home = () => {     
        history.push('/')
    }

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        
        setRegister({...register, [name]: value});
    };

    const handleSubmit = (e) => {
        if(validateShcema){
            e.preventDefault();
            addRegisters(register);
            setRegister(registerInitial);
            handleSuccessModal();
        }
        
    };
    const handleCancelar = (e) => {
        e.preventDefault();
        setRegister(registerInitial);
        home();
    };
    const addRegisters = async (regist) =>{
        const response = await api.post('user/register', regist);
        console.log(response.data);
        setRegisters([...registers, response.data]);
      } 
  return (
      <>
      <section className='formatoRegisto border border-dark'>
          <div className='cabecalhoRegisto d-flex justify-content-center col-12'>
              <div className='col-4'></div>
              <div align="center">
                  <button className='btn mt-3' align="center" onClick={() => home()}><h2>Móvel Amigo</h2></button>
              </div>
              <div className='col-4'></div>
          </div>
                <div className='container'>
                <form className='row g-3 mt-3 mb-5' autoComplete='off' onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className='col-sm-3'></div>
                        <div className="col-sm-6  card " align="center" >
                            <div className="card-body">
                                <h5 className="card-title">Nova Conta</h5>
                                <hr></hr>

                                <div className='col-12 d-flex'>
                                        <div className='col-5'>
                                        <input type="text" className="form-control"placeholder='Nome *'
                                        id="name" name='name' onChange={inputTextHandler} value={register.name} required/>
                                    </div>
                                    <div className='col-2'></div>
                                       <div className='col-5'>
                                            <input type="text" className="form-control" required placeholder='Apelido *'id="apelido" 
                                            name='apelido' onChange={inputTextHandler} value={register.apelido}/>
                                        </div> 
                                    
                                </div>
                                <div className='col-12  mt-3' align="start">
                                    <div className='col-6'>
                                        <label className='form-label'>Gênero</label>
                                        <select id="gender" name='gender' onChange={inputTextHandler} 
                                        value={register.gender} className='form-select'>
                                            <option defaultValue="0">Não definido</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                    <div className='col-6'></div>
                                </div>

                                <div className='col-12 d-flex mt-3'>

                                    <div className='col-5' align="start">
                                    <label className='form-label'>Data de nascimento *</label>
                                        <input type="date" className="form-control" id="birthday" 
                                            name='birthday' onChange={inputTextHandler} value={register.birthday} required/>
                                    </div>
                                    <div className='col-2'></div>
                                    <div className='col-5'align="start">
                                    <label className='form-label' >Nif</label>
                                        <input type="number" className="form-control"id="nif" 
                                            name='nif' onChange={inputTextHandler} value={register.nif} required placeholder='example: 123456789'/>
                                    </div>
                                </div>  
                                
                                <div className='col-12 d-flex mt-3' align="start">
                                <label className='form-label' >Email *</label>
                                </div>
                                <div className='col-12 d-flex'>
                                    <input type="email" className="form-control" required id="email" 
                                            name='email' onChange={inputTextHandler} value={register.email}
                                            placeholder='example@gmail.com'/>
                                </div>

                                <div className='col-12 d-flex mt-3'>

                                    <div className='col-5'>
                                        <input type="password" className="form-control"required id="password" 
                                            name='password' onChange={inputTextHandler} value={register.password} placeholder='Password *'/>
                                    </div>
                                    <div className='col-2'></div>
                                    <div className='col-5'>
                                        <input type="password" className="form-control" required id="passwordConfirmation" 
                                            name='passwordConfirmation' onChange={inputTextHandler} value={register.passwordConfirmation} placeholder='Confirmar password *'/>
                                    </div>
                                </div>

                                <div className='col-12 d-flex mt-3'>
                                    <h6>Termos e definições gerais</h6> 
                                </div>
                                <div className="col-12"align="start">
                                    <p className='textoRegisto'>O Móvel Amigo, Lda compromete-se a tratar os dados pessoais de forma confidencial e responsável, assegurando o seu tratamento em estrito cumprimento do RGPD.</p>
                                    <p className='textoRegisto'>Ao assinalar a opção abaixo, declaro que tomei conhecimento e que concordo com os Termos e Condições Gerais da loja online e com a Política de Privacidade 
                                    e Proteção de Dados adotada pelo Móvel Amigo para navegação no site.</p>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" required/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            <p className='textoRegisto'>Declaro que fui informado/a sobre os Termos e Condições Gerais do site www.movelamigo.com e que aceito a criação da conta de 
                                                cliente nos termos acima expostos. *</p>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <p className='text-muted textoRegisto' algin="start">IMPORTANTE! Podes alterar ou retirar o teu consentimento a qualquer momento.</p>
                                </div>

                                <div className="col-12 d-flex">
                                <div className='col-5'>
                                        <button className='btn btn-primary rounded' type='submit'>Criar Conta</button>
                                    </div>
                                    <div className='col-2'></div>
                                    <div className='col-5'>
                                        <button className='btn btn-outline-danger rounded' onClick={handleCancelar}>Sair</button>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='col-12'>
                                    <p className='textoRegisto'>Se tiveres alguma dúvida, não hesites em contactar-nos. Estamos sempre à tua disposição.</p>
                                </div>
                            </div>
                        </div>
                    <div className='col-sm-3'></div> 
                </form>
            </div>
            <Footer/>
      </section>
      <Modal show={smShowSuccessModal} onHide={handleSuccessModal}>
            <Modal.Header closeButton>
                <Modal.Title>Registo</Modal.Title>
            </Modal.Header>
            <Modal.Body>Obrigado pelo seu registo!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => sair()}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    
    
    );
}
export const FieldErrors = styled.span`
    color: #b32e2e;
    font-size: 11px;
    min-height: 18px;
`;*/