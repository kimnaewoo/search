import { useEffect, useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // const [totalPage, setTotalPage] = useState(20);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=${page}`
      );
      console.log(response);
      setData(response.data.results);
      setFilteredData(response.data.results);
      // setTotalPage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (searchResult) => {
    setFilteredData(searchResult);
  };

  return (
    <>
      <Sidebar />
      <Nav data={data} Search={handleSearch} />
      <Recommended />
      <Products data={filteredData} />
    </>
  );
}

export default App;
