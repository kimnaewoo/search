import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Movie = ({ props, page }) => {
  const [movieList, setMovieList] = useState([]);

  const sendTotalPage = (totalpage) => {
    props.getTotalPage(totalpage);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=${page}`
        // ,{ params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko-KR' },}
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
        sendTotalPage(response.data.total_pages);
        console.log(movieList);
      })
      .catch((error) => {});
  }, [page]);

  return (
    <>
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
          {/* <div>{movieList}</div> */}
        </section>
      ))}
    </>
  );
};
export default Movie;
