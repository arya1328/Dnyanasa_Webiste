import React from 'react';
import AppHero from './components/hero';
import AppServices from './components/services';
import AppStories from './components/appstories';
import AppFaq from './components/faq';


function Home() {
  return (
    <>
      <main id="main">
        <AppHero />
        <AppServices />
        <AppStories />
        <AppFaq />
      </main>
    </>
  );
}

export default Home;
