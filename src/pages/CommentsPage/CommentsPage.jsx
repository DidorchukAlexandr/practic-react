import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "shared/styles/api/posts";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const { data } = await getPostComments(id);
                setComments(data);
            }
            catch ({ response }) {
                console.log(response.data.message);
            }
        }
        fetchComments();
    }, [id])

    const elements = comments.map(({id, name, body}) => (
        <li key={id}>
            <p>Autor: {name}</p>
            <p>{body}</p>
</li>
))

    return (
        <ol>{elements}</ol>
    )

}

export default CommentsPage;