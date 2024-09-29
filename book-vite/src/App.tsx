import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import AdminPage from './pages/AdminPage';
import OrderConfirmation from './pages/OrderConfirmationPage';
import CancelOrder from './components/CancelOrder';
import RouteSignIn from './LayoutLogin/LayoutLogin';
import Login from './pages/Login';
import RouteRegister from './LayoutRegister/LayoutRegister';
import Register from './pages/Register';
import DefaultLayout from './Layouts';
import AdminLayout from './LayoutAdmin/AdminLayout';
import FilteredBooksPage from './pages/BookCategoryPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/Books/login' element={<RouteSignIn />}>
            <Route path='login' element={<Login url={`login`} />} />
          </Route>
          <Route path='/Books/register' element={<RouteRegister />}>
            <Route path='register' element={<Register url={`register`} />} />
          </Route>
          <Route path="/Books/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/Books/books/:id" element={<BookPage />} />
            <Route path="/Books/books/grade/:grade/subject/:subject" element={<FilteredBooksPage />} />
            <Route path="/Books/cart" element={<Cart />} />
            <Route path="/Books/checkout" element={<Checkout />} />
            <Route path="/Books/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/Books/cancel-order" element={<CancelOrder />} />
          </Route>
          <Route path='/Books/adminpage' element={<AdminLayout />}>
            <Route path="/Books/adminpage/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
