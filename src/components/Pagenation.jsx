import React, { useEffect, useState } from 'react';
import '../css/pagenation.css';

const Pagenation = ({ page, totalpage }) => {
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  // console.log(totalPage);

  const nextPage = () => {
    totalpage((nextPage) => nextPage + 1);
  };

  const prevPage = () => {
    totalpage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const pageArr = Array(totalpage)
    .fill()
    .map((p, i) => {
      return i;
    });

  return (
    <div className="paging">
      <button onClick={prevPage} disabled={page === 1}>
        이전
      </button>
      <ul className="number-list">
        {pageArr.map((p, i) => (
          <li key={i}>
            <button onClick={() => nextPage(p + 1)}>{p + 1}</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage} disabled={page === totalpage}>
        다음
      </button>
    </div>
  );
};

export default Pagenation;
