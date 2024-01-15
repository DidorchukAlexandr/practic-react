import { Link } from "react-router-dom";
import NavbarMenu from "./navbarMenu/NavbarMenu";
import styles from "./navbar.module.scss";
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navbarRow}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <button>To books list</button>
                </div>
            </div>
    </div>
)
}
export default Navbar;