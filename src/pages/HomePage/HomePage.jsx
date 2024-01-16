import Posts from "components/modules/Posts/Posts";
 import styles from "./home-page.module.scss";
const HomePage = () => {
    return (
        <div className="container">
            <h1 className={styles.title}>Home page</h1>
            <Posts />
    </div>
)
}
export default HomePage;