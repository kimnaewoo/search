import React, { useState } from 'react';

const Pagenation = ({ props, totalPage }) => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const pageArr = Array(totalPage)
    .fill()
    .map((p, i) => {
      return i;
    });

  const sendPage = (Page) => {
    props.getPage(Page);
  };
  return (
    <div>
      <button onClick={prevPage} disabled={page === 1}>
        이전
      </button>
      <ul>
        {pageArr.map((p, i) => (
          <li key={i}>
            <button onClick={() => setPage(p + 1)}>{p + 1}</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage} disabled={page === totalPage}>
        다음
      </button>
    </div>
  );
};

export default Pagenation;
