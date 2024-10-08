import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'antd';
import { RootState } from '../redux/store';
import { FaShoppingCart } from "react-icons/fa";

const CartButton: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className='mt-9'>
      <Link to="/Books/cart">
        <Badge count={cartItems.length} showZero>
          <Button type="primary" icon={<FaShoppingCart />}>
            Giỏ hàng
          </Button>
        </Badge>
      </Link>
    </div>
  );
};

export default CartButton;
