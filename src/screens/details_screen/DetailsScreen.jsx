import React from "react";
import { useParams } from "react-router-dom";
import "../../theme/details_style.scss";
import useFetch from "../../service/hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Recommendation from "./carousels/Recommendations";
import Similar from "./carousels/Similar";

const DetailsScreen = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Recommendation mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
};

export default DetailsScreen;
