import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { getPostById } from "shared/styles/api/posts";

const SinglePostPage = () => {
    const [post, setPost] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await getPostById(id);
                setPost(data);
            }
            catch ({ response }) {
                console.log(response.data.message);
            }
        }
        fetchPost();

    }, [])

    const goBack = () => navigate(from);

    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            <h1 className="page-title">{post.title}</h1>
            <p>{post.body}</p>
            <Link state={{from}} to="comments">Comments</Link>
            <Outlet />
        </div>
    )

}

export default SinglePostPage;