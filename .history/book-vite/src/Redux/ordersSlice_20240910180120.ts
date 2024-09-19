import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types'; // Import Order type

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    // Các reducer khác nếu cần
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
