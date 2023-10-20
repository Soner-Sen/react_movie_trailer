import React from 'react'

import '../../theme/home_style.scss';
import SearchBanner from './search_banner/SearchBanner';
import TrendingSection from './trending_section/TrendingSection';
import Popular from './popular/Popular';
import TopRated from './top_rated/TopRated';
import TopActress from './actress/Actress';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <SearchBanner/>
      <TrendingSection/>
      <TopRated/>
      <Popular/>
    </div>
  )
}

export default HomeScreen