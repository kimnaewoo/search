import React, { useState } from 'react';

const Pagenation = ({ getPage, totalPage }) => {
  const [page, setPage] = useState(1);

  const sendPage = (page) => {
    console.log(page);
    getPage(page);
  };

  const nextPage = () => {
    sendPage((nextPage) => nextPage + 1);
  };

  const prevPage = () => {
    sendPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const pageArr = Array(totalPage)
    .fill()
    .map((p, i) => {
      return i;
    });

  return (
    <div>
      <button onClick={prevPage} disabled={page === 1}>
        이전
      </button>
      <ul>
        {pageArr.map((p, i) => (
          <li key={i}>
            <button onClick={() => sendPage(p + 1)}>{p + 1}</button>
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
