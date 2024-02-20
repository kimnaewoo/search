import { useEffect, useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalpage, setTotalpage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=${currentPage}`
      );
      console.log(response);
      setData(response.data.results);
      setFilteredData(response.data.results);
      setTotalpage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const onSetCurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const handleSearch = (searchResult) => {
    setFilteredData(searchResult);
  };

  return (
    <>
      <Sidebar />
      <Nav data={data} Search={handleSearch} />
      <Recommended />
      <Products Data={data} data={filteredData} totalpage={totalpage} updateCurrentPage={onSetCurrentPage} />
    </>
  );
}

export default App;
