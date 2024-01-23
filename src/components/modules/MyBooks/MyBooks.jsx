
import { useDispatch, useSelector } from "react-redux";
import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";
import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBooksList from "./MyBooksList/MyBooksList";
import styles from "./my-books.module.scss";
import { getFilteredBooks } from "../../../redux/books/books-selectors";
import { getFilter } from "../../../redux/filter/filter-selectors";
import { setFilter } from "../../../redux/filter/filter-actions";
import { addBook, deleteBook, fetchBooks } from "../../../redux/books/books-operations";
import { useEffect } from "react";



const MyBooks = () => {
   
    const filteredBooks = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);


    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchBooks());
}, [dispatch])

    const handleFilter = ({ target }) => {
       dispatch(setFilter(target.value));  
    }
    
    const onAddBook = ({ title, author, favorite }) => {
        
        dispatch(addBook({ title, author, favorite }));
    }

    const onDeleteBook = (id) => {
         dispatch(deleteBook(id));
    }


    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>My Books</h3>
            <div className={styles.blocks}>
                <MyBooksBlock title="Add book">
                    <MyBooksForm onSubmit={onAddBook} />
                </MyBooksBlock>
                <MyBooksBlock title="Book list">
                    <input value={filter} name="filter" onChange={handleFilter} className={styles.textField} placeholder="enter book title or author"/>
                    <MyBooksList items={filteredBooks} onDeleteBook={onDeleteBook} />
                </MyBooksBlock>
            </div>
        </div>
    )
}
export default MyBooks;