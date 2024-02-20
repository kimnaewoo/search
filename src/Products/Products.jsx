import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './products.css';

const Products = ({ data }) => {
  return (
    <>
      <section className="movie-container">
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
      </section>
      {/* <Pagenation totalPage={totalPage} /> */}
    </>
  );
};
export default Products;
