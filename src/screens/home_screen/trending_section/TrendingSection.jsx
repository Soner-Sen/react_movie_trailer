import React, { useState } from 'react'
import useFetch from '../../../service/hooks/useFetch'

import ContentWrapper from '../../../components/common/contentWrapper/ContentWrapper'
import '../../../theme/trending_section_style.scss'
import SwitchTabs from '../../../components/common/switchTabs/SwitchTabs'
import Carousel from '../../../components/common/carousel/Carousel'


const TrendingSection = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Daily" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Daily", "Weekly"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data = {data?.results} loading={loading}/>
        </div>
    );
};

export default TrendingSection;