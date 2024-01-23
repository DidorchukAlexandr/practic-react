import { createReducer } from '@reduxjs/toolkit';

import { addBook, deleteBook } from './books-actions';

const booksReducer = createReducer([], builder => {
  builder
    .addCase(addBook, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(deleteBook, (state, { payload }) => {
      return state.filter(item => item.id !== payload);
    });
});

export default booksReducer;
