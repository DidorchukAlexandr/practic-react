import Button from "components/Button/Button";

import styles from "./my-books-list.module.scss";

const MyBooksList = ({items, onDeleteBook}) => {
    const elements = items.map(({ id, title, author }) => (
        <li key={id} className={styles.listItem}>
            Title: {title}. Author: {author}.
            <Button onClick={() => onDeleteBook(id)}>delete</Button>
        </li>
    ))
    
    return (
        <ol className={styles.list}>{elements}</ol>
    )
}
export default MyBooksList;