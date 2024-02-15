import { useEffect, useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';

function App() {
  // const [movieList, setMovieList] = useState([]);
  // // let movieList = [];
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR'
  //       // ,{
  //       //   params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko-KR' },
  //       // }
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       // movieList = response.data.title;
  //       setMovieList(response.data.results);
  //       console.log(movieList);
  //     })
  //     .catch((error) => {});
  // }, []);

  // const [seletedCategory, setSeletedCategoty] = useState(null);
  // // input filter
  // const [query, setQuery] = useState('');
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  // const fillteredItems = movieList.filter((movieList) => movieList.title);

  // console.log(fillteredItems);

  // radio filter
  // const handleChange = (event) => {
  //   setSeletedCategoty(event.target.value);
  // };
  // const handleClick = (event) => {
  //   setSeletedCategoty(event.target.value);
  // };
  // function filteredData(movieList, selected, query) {
  //   let filteredMovieList = movieList;
  //   if (query) {
  //     filteredMovieList = fillteredItems;

  //   }
  // }
  // button filter
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
