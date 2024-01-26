import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import styles from './login-page.module.scss';
import LoginForm from "components/modules/LoginForm/LoginForm";

const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }

    return (
     <div className="container">
            <h1 className={styles.title}>Login page</h1>
           <LoginForm onSubmit={onLogin} />
    </div>
)
}

export default LoginPage;