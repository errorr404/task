import React from 'react';
import IntroImage from '../../assets/intro1.jpeg';
import HomeNavbar from '../../components/HomeNavbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <HomeNavbar />
      <div className="home__heroSection">
        <div className="home__heroSection__intro">
          <h1 className="home__heroSection__intro__heading">The Future of Efficient Legal Workflow</h1>
          <p className="home__heroSection__intro__desc">
            Create, Edit, Review & Analyse your Legal Paperwork with lucy, the
            AI-powered Legal Research and Drafting assistant.
          </p>
        </div>
        <img src={IntroImage} alt="intro" className="home__heroSection__image"/>
      </div>
    </div>
  );
};
export default Home;
