import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import styles from './login-form.module.scss';
import TextField from "components/TextField/TextField";
import Button from "components/Button/Button";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({initialState, onSubmit});

    const { email, password } = state;

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <Button>Login</Button>
        </form> 
        </div>
    )
}

export default LoginForm;