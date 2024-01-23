import axios from 'axios';

const booksInstance = axios.create({
  baseURL: 'https://64b55b40f3dbab5a95c732b2.mockapi.io/books',
});

export const getAllBooks = () => booksInstance.get('/');

export const deleteBook = id => {
  return booksInstance.delete(`/${id}`);
};

export const addBook = data => {
  return booksInstance.post('/', data);
};
