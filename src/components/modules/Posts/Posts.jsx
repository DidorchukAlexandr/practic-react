import { useEffect, useState } from "react";
import { getPosts } from "shared/styles/api/posts";
import PostList from "components/PostList/PostList";
import styles from "./posts.module.scss";


const Posts = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const { data } = await getPosts();
                setItems(data);
            }
            catch ({ respons }) {
                const errorMessage = respons.data.message || "Cannot fetch posts";
                setError(errorMessage);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);
    return (
        <>
            <h2 className={styles.heading}>Posts</h2>
            {loading && <p>...Loading</p>}
            {error && <p className={styles.error}>{error}</p>}
            <PostList items={items} />
        </>
    )
}
export default Posts;