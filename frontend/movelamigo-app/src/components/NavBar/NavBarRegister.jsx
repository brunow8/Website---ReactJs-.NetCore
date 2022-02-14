import {motion} from 'framer-motion'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NavBarRegister(props) {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    const history = useHistory();
    const registo = () =>{
        history.push('/signup')
    }
    const Login = () =>{
        history.push('/login')
    }
  return (
    <nav> 
                <ul>
                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <button  className='btn btn-outline-dark rounded text-primary' onClick={() => Login()}>Entrar</button>
                    </motion.li>

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
                    <motion.li initial={animateFrom} animate={animateTo}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <button  className='btn btn-outline-dark rounded text-warning' onClick={() => registo()}>Criar conta</button>
                    </motion.li>
                </ul>
            </nav>
  )
}
