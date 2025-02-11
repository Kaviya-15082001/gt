import React from "react";
import "./Home.css";
import homeImg from "../Assets/HomeLay.jpeg";

const Home = () => {
  return (
    <div className="home">
        <div className="home-text">
          Explore and Book Sports Facilities Near You
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className="home-img" src={homeImg} alt="HomeImg" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
