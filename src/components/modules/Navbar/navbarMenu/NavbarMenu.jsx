import { NavLink } from "react-router-dom";
import items from "./navbarMenuItems.json";
import styles from "./navbar-menu.module.scss"
const NavbarMenu = () => {
    const elements = items.map(({ id, link, text }) => {
        return (
            <li key={id}>
                <NavLink to={link} className={styles.link}>{text}</NavLink>
            </li>
        )
    });
    return (
        <ul className={styles.menu}>{elements}</ul>
    )
}
export default NavbarMenu;