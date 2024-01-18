import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CommentsPage = lazy(() => import('pages/CommentsPage/CommentsPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const PostPage = lazy(() => import('pages/PostsPage/PostPage'));
const SinglePostPage = lazy(() =>
  import('pages/SinglePostPage/SinglePostPage')
);
const MyFavoriteBooksPage = lazy(() =>
  import('pages/HomePage/MyFavoriteBooksPage/MyFavoriteBooksPage')
);
const MyBooksPage = lazy(() => import('pages/MyBooksPage/MyBooksPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />}>
          <Route path="comments" element={<CommentsPage />} />
        </Route>
        <Route path="/my-books" element={<MyBooksPage />} />
        <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
