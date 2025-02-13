import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecards from "../../components/TitleCards/Titlecards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" alt="" />
          <p>
            Discovering his ties to a secret ancient orderm a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <Titlecards></Titlecards>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"}></Titlecards>
        <Titlecards title={"Only on Netflix"}></Titlecards>
        <Titlecards title={"Upcoming"}></Titlecards>
        <Titlecards title={"Top pics for you"}></Titlecards>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
