import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import './products.css';
import Pagenation from '../components/Pagenation';

const Products = () => {
  const [movieList, setMovieList] = useState([]);
  const [totalPage, setTotalPage] = useState(20);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=${page}`
        // ,{ params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko-KR' },}
      )
      .then((response) => {
        // console.log(response);
        setMovieList(response.data.results);
        setTotalPage(response.data.total_pages);
        console.log(totalPage);
      })
      .catch((error) => {});
  }, [page]);

  return (
    <>
      <section className="movie-container">
        {movieList.map((v, i) => (
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
