import classes from './../../css/NavBar.module.css';
import NavLinks from "./NavLink";

const Navigation = (props) => {
    return (
        <nav className={classes.Navigation}>
           <NavLinks/> 
        </nav>
        
    );
}

export default Navigation;