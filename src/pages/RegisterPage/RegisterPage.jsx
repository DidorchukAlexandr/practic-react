
import { useDispatch } from 'react-redux';
import styles from './register-page.module.scss';
import { register } from '../../redux/auth/auth-operations';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(register(data));
    }

    return (
         <div className="container">
            <h1 className={styles.title}>Register page</h1>
           <RegisterForm onSubmit={onRegister} />
    </div>
    )
}

export default RegisterPage;