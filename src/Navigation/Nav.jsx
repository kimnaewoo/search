import { FiHeart } from 'react-icons/fi';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import React, { useState } from 'react';
import './nav.css';
const Nav = ({ data, Search }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    Search(filteredData);
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
        />
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
