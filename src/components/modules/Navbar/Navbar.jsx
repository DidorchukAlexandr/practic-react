import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../../redux/auth/auth-selectors";

import NavbarMenuItems from "./NavbarMenuItems/NavbarMenuItems";
import NavbarUser from "./NavbarUser/NavbarUser";
import NavbarAuth from "./NavbarAuth/NavbarAuth";

import styles from "./navbar.module.scss";
const Navbar = () => {
    const isLogin = useSelector(isUserLogin);

    return (
        <div className="container">
            <div className={styles.navbar}>
                <div className={styles.navbarRow}>
                    <Link to="/">Logo</Link>
                    <NavbarMenuItems />
                    {!isLogin && <NavbarAuth />}
                    {isLogin && <NavbarUser />}
                </div>
            </div>
    </div>
)
}
export default Navbar;