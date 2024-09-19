import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Book } from '../types';
import { Button, Card, Rate } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';

const BookDetail: React.FC = () => {
  const { id } = useParams();
  const booksByGrade = useSelector((state: RootState) => state.books.booksByGrade);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const allBooks = Object.values(booksByGrade).flat();
    const foundBook = allBooks.find(b => b.id.toString() === id);
    setBook(foundBook || null);
  }, [id, booksByGrade]);

  if (!book) return <p>Không tìm thấy sách</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Hình ảnh sách */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
          <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        {/* Thông tin chi tiết */}
        <div className="md:ml-6 md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg font-semibold text-red-600 mb-4">{book.price} VND</p>
          <Rate disabled defaultValue={4} className="mb-4" /> {/* Tạm thời để 4 sao */}
          <p className="text-base mb-4">{book.description}</p>
          <p className="text-lg font-semibold mb-4"><strong>Tác giả:</strong> {book.author}</p>
          <div className="flex gap-4">
            <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
              Thêm vào giỏ
            </Button>
            <Button type="default" icon={<HeartOutlined />} size="large">
              Yêu thích
            </Button>
            <Button type="default" icon={<ShareAltOutlined />} size="large">
              Chia sẻ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
