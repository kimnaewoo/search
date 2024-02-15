import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  // let movieList = [];
  let page = '1';
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR'
        // ,{
        //   params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko-KR' },
        // }
      )
      .then((response) => {
        console.log(response);
        // movieList = response.data.title;
        setMovieList(response.data.results);
        console.log(movieList);
      })
      .catch((error) => {});
  }, []);
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
      ;
    </>
  );
};
export default Movie;
