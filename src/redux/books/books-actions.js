import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addBook = createAction('books/add', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});

export const deleteBook = createAction('books/delete');
