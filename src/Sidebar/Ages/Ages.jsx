import React from 'react';
import './ages.css';
import Input from '../../components/Input';
const Ages = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title ages-title">연령별 영화</h2>
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};
export default Ages;
