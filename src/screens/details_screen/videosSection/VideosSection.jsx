import "../../../theme/videos_section_style.scss";

import React, { useState } from "react";

import ContentWrapper from "../../../components/common/contentWrapper/ContentWrapper";
import Image from "../../../components/common/lazy_loading/Image";
import VideoDisplay from "../../../components/common/videoDisplay/VideoDisplay";
import { PlayIcon } from "../../../components/common/custom_playButton/CustomPlayButton";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                {data?.results && data.results.length > 0 && (
                    <>
                        <div className="sectionHeading">Official Videos</div>
                        {!loading ? (
                            <div className="videos">
                                {data.results.map((video) => (
                                    <div
                                        key={video.id}
                                        className="videoItem"
                                        onClick={() => {
                                            setVideoId(video.key);
                                            setShow(true);
                                        }}
                                    >
                                        <div className="videoThumbnail">
                                            <Image
                                                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                            />
                                            <PlayIcon />
                                        </div>
                                        <div className="videoTitle">{video.name}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="videoSkeleton">
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                            </div>
                        )}
                    </>
                )}
            </ContentWrapper>
            <VideoDisplay
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;