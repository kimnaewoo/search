import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import './products.css';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Products = ({ searchdata, data, totalpage, updateCurrentPage }) => {
  // console.log(searchdata);
  const [currentPage, setCurrentPage] = useState(1);

  const pageChange = (event) => {
    const currentPageIndex = Number(event.target.outerText);

    setCurrentPage(currentPageIndex);
    updateCurrentPage(currentPageIndex);
  };

  return (
    <>
      <section className="movie-container">
        {searchdata.length > 0 ? (
          <>
            {searchdata.map((v, i) => (
              <section className="movie" key={i}>
                <img src={'https://image.tmdb.org/t/p/original' + v.poster_path} alt={v.title} className="movie-img" />
                <div className="movie-details">
                  <h3 className="movie-title">{JSON.stringify(v.title)}</h3>
                  <section className="movie-reviews">
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <span className="total-review">4</span>
                  </section>
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            {data.map((v, i) => (
              <section className="movie" key={i}>
                <img src={'https://image.tmdb.org/t/p/original' + v.poster_path} alt={v.title} className="movie-img" />
                <div className="movie-details">
                  <h3 className="movie-title">{JSON.stringify(v.title)}</h3>
                  <section className="movie-reviews">
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <span className="total-review">4</span>
                  </section>
                </div>
              </section>
            ))}
          </>
        )}
      </section>
      <Pagination
        count={totalpage}
        page={currentPage}
        defaultPage={1}
        onChange={pageChange}
        renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
      />
      {/* <Pagenation page={page} totalpage={totalpage} /> */}
    </>
  );
};
export default Products;
