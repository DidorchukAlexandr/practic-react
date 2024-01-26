import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../../redux/auth/auth-selectors";

import NavbarUser from "./NavbarUser/NavbarUser";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import styles from "./navbar.module.scss";
const Navbar = () => {
    const isLogin = useSelector(isUserLogin);

    return (
        <div className="container">
            <div className={styles.navbar}>
                <div className={styles.navbarRow}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    {!isLogin && <NavbarAuth />}
                    {isLogin && <NavbarUser />}
                </div>
            </div>
    </div>
)
}
export default Navbar;