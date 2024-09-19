import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../types';

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [
    { id: 1, image:'', title: 'Sách 1', author: 'Tác giả 1', price: 10, description: 'Mô tả sách 1' },
    { id: 2, image:'', title: 'Sách 2', author: 'Tác giả 2', price: 15, description: 'Mô tả sách 2' },
    { id: 3, image:'', title: 'Sách 3', author: 'Tác giả 3', price: 16, description: 'Mô tả sách 3' },
    { id: 4, image:'', title: 'Sách 4', author: 'Tác giả 4', price: 17, description: 'Mô tả sách 4' },
    // Thêm sách khác
  ]
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
});

export default bookSlice.reducer;
