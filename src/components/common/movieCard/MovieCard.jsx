
import '../../../theme/movie_card_style.scss';

import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Image from "../lazy_loading/Image";
import Genres from "../genres/Genres";
import PosterFallback from "../../../assets/images/not-found.png";
import UserRating from '../userRating/UserRating';

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard"
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <Image className="posterImg" src={posterUrl} />
                {!fromSearch && (
                    <React.Fragment>
                        <Genres data={data.genre_ids.slice(0, 2)} />
                        <UserRating rating={data.vote_average.toFixed(1)} />
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("DD.MM.YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;