import useForm from "shared/hooks/useForm"
import Button from "components/Button/Button"
import TextField from "components/TextField/TextField"
import initialState from "./initialState"
import fields from "./fields"
import styles from './register-form.module.scss'
const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({initialState, onSubmit});

    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
             <TextField value={name} onChange={handleChange} {...fields.name} />
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <Button>Register</Button>
        </form> 
)
}

export default RegisterForm;