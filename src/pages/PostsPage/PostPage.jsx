
import PostsSearch from "components/modules/PostsSearch/PostsSearch";
import styles from "./post-page.module.scss"
const PostPage = () => {

    return (
        <div className="container">
            <h1 className={styles.title}>Post page</h1>
            <PostsSearch />
        </div>
    )
}
export default PostPage;