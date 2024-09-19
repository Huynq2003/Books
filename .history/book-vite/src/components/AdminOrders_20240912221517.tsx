import React, { useEffect, useState } from 'react';
interface UserInfo {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface OrderItem {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

interface OrderInfo {
  userInfo: UserInfo;
  paymentMethod: string;
  selectedBank?: string;
  selectedItems: OrderItem[];
  formattedTotalAmount: number;
  orderDate: string; // Ensure this is an ISO 8601 string or correctly formatted
}
const AdminOrders: React.FC = () => {
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);

  useEffect(() => {
    const savedOrderInfo = localStorage.getItem('orderInfo');
    if (savedOrderInfo) {
      setOrderInfo(JSON.parse(savedOrderInfo));
    }
  }, []);

  if (!orderInfo) {
    return <p>Không có thông tin đơn hàng.</p>;
  }
  let orderDate;
  try {
    orderDate = new Date(orderInfo.orderDate);
    if (isNaN(orderDate.getTime())) {
      throw new Error('Invalid Date');
    }
  } catch (error) {
    console.error('Error parsing order date:', error);
    orderDate = new Date(); // Fallback to current date
  }
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Danh Sách Đơn Hàng</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Người Đặt Hàng</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Sản Phẩm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Tiền</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa Chỉ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Điện Thoại</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày Và Giờ Đặt Hàng</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orderInfo.userInfo.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {orderInfo.selectedItems.map((item) => (
                <div key={item.id}>
                  <p>{item.title} (x{item.quantity})</p>
                </div>
              ))}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {orderInfo.selectedItems.reduce((total, item) => total + item.price * item.quantity, 0)}.000 VND
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{orderInfo.userInfo.address}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{orderInfo.userInfo.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {(() => {
                const orderDate = new Date(orderInfo.orderDate);
                const formattedDate = orderDate.toLocaleDateString('vi-VN');
                const formattedTime = orderDate.toLocaleTimeString('vi-VN');
                return `${formattedDate} ${formattedTime}`;
              })()}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default AdminOrders;
