import React, { useEffect, useState } from 'react';
import './products.css';
import Movie from '../components/Movie';
import Pagenation from '../components/Pagenation';
const Products = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  function getTotalPage(totalpage) {
    setTotalPage(totalpage);
  }
  function getPage(page) {
    setPage(page);
  }

  return (
    <>
      <section className="movie-container">
        <Movie getTotalPage={getTotalPage} page={page} />
      </section>
      <Pagenation totalPage={totalPage} getPage={getPage} />
    </>
  );
};
export default Products;
