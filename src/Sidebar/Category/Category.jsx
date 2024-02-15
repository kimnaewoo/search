import React from 'react';
import './category.css';
import Input from '../../components/Input';
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">영화목록</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};
export default Category;
