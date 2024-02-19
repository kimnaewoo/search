import React from 'react';
import './category.css';
import Input from '../../components/Input';
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">영화목록</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>한국영화
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>외국영화
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>일본영화
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>중국영화
        </label>
      </div>
    </div>
  );
};
export default Category;
