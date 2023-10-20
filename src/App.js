import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchDataFromAPI } from "./service/api/tmdb.js";
import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/common/header/Header";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DetailsScreen from "./screens/details_screen/DetailsScreen";
import SearchResult from "./screens/search_result_screen/SearchResultScreen";
import ExploreScreen from "./screens/explore_screen/ExploreScreen";
import PageNotFound from "./screens/error_screen/ErrorScreen";
import Footer from "./components/common/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchAPIConfig();
    genresCall();
  }, []);

  const fetchAPIConfig = () => {
    fetchDataFromAPI("/configuration").then((res) => {
        console.log(res);

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
    });
};

const genresCall = async () => {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  console.log(data);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
};


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        //mediaType= TV-Show/Movie
        <Route path="/:mediaType/:id" element={<DetailsScreen />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<ExploreScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
