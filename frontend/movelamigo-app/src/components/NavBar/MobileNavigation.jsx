import classes from './../../css/NavBar.module.css';
import NavLinks from "./NavLink";
import {CgCloseO, CgMenuRound} from 'react-icons/cg';
import { useState } from 'react';

const MobileNavigation = () => {
    const [openHamburger, setOpenHamburguer] = useState(false);
    
    const hamburgerIcon = <>
                            <a className="navbar-brand" href="index.html">
                                <strong>Móvel Amigo</strong>
                            </a>
                            <CgMenuRound className={classes.Hamburger} size="40px" color='white'
                                onClick={() => setOpenHamburguer(!openHamburger)}/>
                            </>
    const closeIcon =   <>
                        <a className="navbar-brand" href="index.html">
                            <strong>Móvel Amigo</strong>
                        </a>
                        <CgCloseO className={classes.Hamburger} size="40px" color='white'
                            onClick={() => setOpenHamburguer(!openHamburger)}/>
                        </>
    

    const closeMobileMenu = () => setOpenHamburguer(false);
    return (
        <nav className={classes.MobileNavigation}>
        {openHamburger ? closeIcon : hamburgerIcon}   
        {openHamburger && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/> } 
        </nav>
        
    );
}

export default MobileNavigation;