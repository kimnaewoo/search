import React from 'react';
import './ages.css';
import Input from '../../components/Input';
const Ages = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title ages-title">연령별 영화</h2>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>전체이용가
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>12세이용가
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>15세이용가
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>18세이용가
      </label>
    </div>
  );
};
export default Ages;
