
import { useSelector } from "react-redux";
import styles from "./my-favorite-books-page.module.scss"
import { getFavoriteBooks } from "../../redux/books/books-selectors";


const MyFavoriteBooksPage = () => {
    const favoriteBooks = useSelector(getFavoriteBooks);

    const elements = favoriteBooks.map(({ id, title, author }) => (
        <li key={id}>{title}. {author}.</li>
    ));

    return (
        <div className="container">
            <h1 className={styles.title}>My favorite books page</h1>
            <ol>{ elements}</ol>
        </div>
    )
}
export default MyFavoriteBooksPage;