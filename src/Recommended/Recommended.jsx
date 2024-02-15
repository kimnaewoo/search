import React from 'react';
import './recommended.css';

const Recommended = () => {
  return (
    <>
      <div>
        <h2></h2>
        <div className="recommended-flex">
          <button className="btns">모든 영화</button>
          <button className="btns">한국 영화</button>
          <button className="btns">외국 영화</button>
          <button className="btns">일본 영화</button>
          <button className="btns">중국 영화</button>
        </div>
      </div>
    </>
  );
};
export default Recommended;
