import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Cart from './components/Cart';
import CartButton from './components/CartButton'; // Import CartButton
import Checkout from './pages/Checkout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <CartButton />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
