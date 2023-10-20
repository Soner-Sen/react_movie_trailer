import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../service/hooks/useFetch";
import "../../../theme/search_banner_style.scss";
import Image from "../../../components/common/lazy_loading/Image";
import ContentWrapper from "../../../components/common/contentWrapper/ContentWrapper";

const SearchBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryController = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="searchBanner">
      {!loading && <div className="backdrop-img">
        <Image src={background}/>
      </div>}

    <div className="transition_layer">

    </div>

    <ContentWrapper>
        <div className="searchBannerBody">
          <span className="title">Lights, Camera, Action!</span>
          <span className="subTitle">Dive into the World of Blockbusters...</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Discover Your Next Movie... 🍿🎬"
              onKeyUp={searchQueryController}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button> Search </button>
          </div>
        </div>
    </ContentWrapper>

   
    </div>
  );
};

export default SearchBanner;
