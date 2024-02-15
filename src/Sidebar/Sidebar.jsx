import React from 'react';
import Category from './Category/Category';
import Ages from './Ages/Ages';
import './sidebar.css';

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>📽</h1>
        </div>
        <Category />
        <Ages />
      </section>
    </>
  );
};
export default Sidebar;
