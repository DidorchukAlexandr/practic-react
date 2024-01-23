import axios from 'axios';

const postsInstace = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const getPosts = () => {
  return postsInstace.get('/');
};

export const searchPosts = (q, _page = 1) => {
  return postsInstace.get('/', {
    params: {
      q,
      _page,
      _limit: 4,
    },
  });
};

export const getPostById = id => {
  return postsInstace.get(`/${id}`);
};

export const getPostComments = id => {
  return postsInstace.get(`/${id}/comments`);
};
