import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CommentsPage = lazy(() => import('pages/CommentsPage/CommentsPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const PostPage = lazy(() => import('pages/PostsPage/PostPage'));
const SinglePostPage = lazy(() =>
  import('pages/SinglePostPage/SinglePostPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/posts" element={PostPage} />
        <Route path="/posts/:id" element={SinglePostPage}>
          <Route path="comments" element={CommentsPage} />
        </Route>

        <Route path="*" element={NotFoundPage} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
