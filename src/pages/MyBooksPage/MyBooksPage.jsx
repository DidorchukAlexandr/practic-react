import MyBooks from "components/modules/MyBooks/MyBooks";
import styles from "./my-books-page.module.scss";
const MyBooksPage = () => {
    return (
        <div className="container">
            <h1 className={styles.title}>My books page</h1>
            <MyBooks />
    </div>
)
}
export default MyBooksPage;
