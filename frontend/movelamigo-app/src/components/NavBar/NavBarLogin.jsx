import {motion} from 'framer-motion'
import React, {useEffect, useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import api from '../../api/product';
import CartContext from './../Cart/CartContext';


export default function NavBarLogin(props) {
    const { cartItems, showHideCart } = useContext(CartContext)

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    const history = useHistory();

  const [userDetails, setUserDetails] = useState([]);

    const catchUserDetails = async () => {
        const response = await api.get('user/user', {withCredentials: true});
        return response.data;
    }
    useEffect(() => {
      const getUserDetails = async () => {
        const AllUserDetails = await catchUserDetails();
          if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/AllUserDetails) 
              setUserDetails(AllUserDetails);
        };
        
        getUserDetails();
      }, []);

    const logout = async() => {
        await fetch('https://localhost:5001/api/user/logout',{
            method: 'POST',
            headers:{'Contet-Type':'applciation/json'},
            credentials: 'include'
        });
        window.location.reload();
    }

  return (
    <nav> 
                <ul>
                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <div className='cart_icon'>
                               <i class="fa fa-shopping-cart fa-md" aria-hidden='true' style={{color: "#fff"}} onClick={showHideCart}></i>
                            {cartItems.length > 0 && <div className='item_count'><span>{cartItems.length}</span></div>}
                            {console.log(cartItems)}
                            {console.log(showHideCart)}
                            </div>
                            
                    </motion.li>
                    <li
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Dropdown>
                                <Dropdown.Toggle className="DropdownToogle" id="dropdown-button-dark-example1" variant="dark">
                                <i className="fa-solid fa-user me-1"></i> {userDetails.name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu container="body" variant="dark" className="mt-3 mb-3">
                                <Dropdown.Item href="#/action-1">Dados da conta</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Encomendas</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Métodos de pagamento</Dropdown.Item>
                                <Dropdown.Item href="/PasswordChange">Mudar password</Dropdown.Item>
                                <Dropdown.Item href="/EmailChange">Mudar email</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Produtos favoritos</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Notificações</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Apoio ao cliente</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </li>

                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#home" >Home</a>
                    </motion.li>

                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#categorias" >Categorias</a>
                    </motion.li>

                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#ideias" >Ideias</a>
                    </motion.li>

                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#news" >Novidades e Promoções</a>
                    </motion.li>

                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#about" >O Móvel Amigo</a>
                    </motion.li>
                    {/*<motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <button  className='btn btn-outline-dark rounded text-warning' onClick={() => registo()}>Criar conta</button>
                    </motion.li>*/}
                </ul>
            </nav>
  )
}
