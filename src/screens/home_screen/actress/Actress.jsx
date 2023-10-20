import React, { useState } from 'react';
import useFetch from '../../../service/hooks/useFetch';
import ContentWrapper from '../../../components/common/contentWrapper/ContentWrapper';
import '../../../theme/trending_section_style.scss';
import SwitchTabs from '../../../components/common/switchTabs/SwitchTabs';
import Carousel from '../../../components/common/carousel/Carousel';

const TopActress = () => {
    const [endpoint, setEndpoint] = useState("person");

    const { data, loading } = useFetch(`/${endpoint}/popular`);


    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Actress</span>
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopActress;