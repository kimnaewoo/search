import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import React, { useRef, useState } from 'react';
import './nav.css';
const Nav = ({ onTextChange }) => {
  const query = useRef(null);

  const sendQuery = () => {
    onTextChange(query.current.value);
  };

  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" ref={query} placeholder="영화제목을 입력하세요" />
        <button onClick={sendQuery}>검색</button>
      </div>
      <div className="profile container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
