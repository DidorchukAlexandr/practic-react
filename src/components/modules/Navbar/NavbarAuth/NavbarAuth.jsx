import { NavLink } from "react-router-dom";
import stayles from './navbar-auth.module.scss';

const NavbarAuth = () => {
    return (
        <div>
            <NavLink className={stayles.link} to='/register'>Register</NavLink>
            |
            <NavLink className={stayles.link} to='/login'>Login</NavLink>
        </div>
    )
}

export default NavbarAuth;