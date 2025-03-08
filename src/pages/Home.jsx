import React from 'react';
// import Slideshow from '../components/Slider';
import EventSlideshow from '../components/EventSlideshow';
import ChurchEvents from '../components/ChurchEvents';

const Home = () => {
  return (
    <div>
      <EventSlideshow />
      <ChurchEvents />
    </div>
  );
}

export default Home;
