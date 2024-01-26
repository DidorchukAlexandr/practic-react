import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "../../../../redux/auth/auth-selectors";

import items from "./navbarItems.json";
import styles from "./navbar-menu-items.module.scss"
const NavbarMenuItems = () => {
    const isLogin = useSelector(isUserLogin);
    const menuItems = !isLogin ? items.filter(item => !item.private) : items;


    const elements = menuItems.map(({ id, link, text }) => {
        return (
            <li key={id}>
                <NavLink to={link} className={styles.lin}>{text}</NavLink>
            </li>
        )
    });
    return (
        <ul className={styles.menu}>{elements}</ul>
    )
}
export default NavbarMenuItems;