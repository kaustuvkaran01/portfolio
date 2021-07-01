import React from 'react';
// import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import About from '../components/About';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import MainProjects from '../components/MainProjects';
import SideProjects from '../components/SideProjects';
import WorkEx from '../components/WorkEx';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Languages />
      <Frameworks />
      <MainProjects />
      <SideProjects />
      <WorkEx />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;