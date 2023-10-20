import React, {useState} from 'react'

import useFetch from '../../../service/hooks/useFetch'

import ContentWrapper from '../../../components/common/contentWrapper/ContentWrapper'
import '../../../theme/trending_section_style.scss'
import SwitchTabs from '../../../components/common/switchTabs/SwitchTabs'
import Carousel from '../../../components/common/carousel/Carousel'

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Popular</span>
                <SwitchTabs
                    data={["Movies", "TV Series"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;