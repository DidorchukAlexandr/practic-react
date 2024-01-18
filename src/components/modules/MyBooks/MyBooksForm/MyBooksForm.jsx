
import { useEffect, useRef, useState } from "react";
import initialState from "./initialState";
import styles from "./my-books-form.module.scss";

const MyBooksForm = () => {
    const [state, setState] = useState({ ...initialState });

    const titleRef = useRef(false);

    useEffect(() => {
        titleRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value, checked, type } = target;
            const newValue = type === "checkbox" ? checked : value;

            return {...prevState, [name]: newValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit({ ...state });
        setState({ ...initialState });
    }

    const { title, author, favorite } = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Book title</label>
                <input ref={titleRef} value={title} name="title" onChange={handleChange} className={styles.textFieled} />
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input value={author} name="author" onChange={handleChange} className={styles.textFieled} />
            </div>
            <div className={styles.formGroup}>
                <label>Favorite</label>
                <input checked={favorite} name="favorite" onChange={handleChange} className={styles.checkbox} />
            </div>
            <button type="submit">Add book</button>
    </form>
)
}

export default MyBooksForm;