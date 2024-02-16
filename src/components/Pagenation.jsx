import React, { useEffect, useState } from 'react';

const Pagenation = (props) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  // console.log(totalPage);

  const nextPage = () => {
    props.totalPage((nextPage) => nextPage + 1);
  };

  const prevPage = () => {
    props.totalPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const pageArr = Array(props.totalPage)
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
            <button onClick={() => nextPage(p + 1)}>{p + 1}</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage} disabled={page === props.totalPage}>
        다음
      </button>
    </div>
  );
};

export default Pagenation;
