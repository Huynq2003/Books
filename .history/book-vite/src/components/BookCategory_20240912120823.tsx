// components/BookCategory.tsx
import React from 'react';
import { Menu, Collapse } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { textbookCategories } from '../data/categories';

const { Panel } = Collapse;

interface BookCategoryProps {
  onSubjectSelect: (grade: string, subject: string) => void;
}

const BookCategory: React.FC<BookCategoryProps> = ({ onSubjectSelect }) => {
  return (
    <div className="p-6 max-w-xs">
      <h1 className="text-2xl font-bold mb-6">Danh mục sách giáo khoa</h1>
      <Collapse accordion>
        {textbookCategories.map((category) => (
          <Panel
            header={`Lớp ${category.grade}`}
            key={category.grade}
            extra={<BookOutlined />}
          >
            <Menu
              mode="inline"
              onClick={(e) => onSubjectSelect(category.grade, e.key)}
            >
              {category.subjects.map((subject) => (
                <Menu.Item key={subject}>
                  Sách {subject}
                </Menu.Item>
              ))}
            </Menu>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default BookCategory;
