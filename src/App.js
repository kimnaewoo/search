import { useEffect, useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA2ODgxM2M2ZmZmYjZjNDA3ZDM4MzNkNWMyNTgwZCIsInN1YiI6IjYwNGIwMTdlODc0MWM0MDAyYmEwMjY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.297DQDj_KXmX6tYM1VszQoyv03zkB-faCLu2sFmhZFw';

function App() {
  const [data, setData] = useState([]);
  const [filtereddata, setFilteredData] = useState([]);
  const [totalpage, setTotalpage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  useEffect(() => {
    searchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=${currentPage}`
      );
      console.log(response);
      setData(response.data.results);
      setTotalpage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const searchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const onSetCurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const onTextChange = (text) => {
    setQuery(text);
    console.log(text);
  };

  return (
    <>
      <Sidebar />
      <Nav onTextChange={onTextChange} />
      <Recommended />
      <Products
        query={query}
        data={data}
        totalpage={totalpage}
        updateCurrentPage={onSetCurrentPage}
      />
    </>
  );
}

export default App;
