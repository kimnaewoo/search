import React, { useEffect, useState } from 'react';
import './products.css';
import axios from 'axios';

const Products = () => {
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
      <section className="card-container">
        <section className="card">
          {movieList.map((v, i) => (
            <div key={i}>
              <span>{JSON.stringify(v.title)}</span>
            </div>
          ))}
          {/* <div>{movieList}</div> */}
        </section>
      </section>
    </>
  );
};
export default Products;
