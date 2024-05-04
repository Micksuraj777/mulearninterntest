import React from "react";
import "../style/Home.css";
import Logo from "../assets/icons/logo.png";
import Hero from "../assets/images/hero.png";
import Windows from "../assets/icons/windows.png";
import Apple from "../assets/icons/apple.png";
import Android from "../assets/icons/android.png";

const Home = () => {
  return (
    <section className="black">
        <a href="#" className="nav">
          <img src={Logo} width={27} height={27} alt="logo" />
          <h1 className="mu">Musify</h1>
        </a>
      <div className="container">
        <h1 className="text">MUSI</h1>
        <h1 className="text">LAYL</h1>
      </div>
      <div className="main">
        <div className="left">
          <h3 className="play">PLAY .</h3>
        <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ligula
        auctor dignissim eget. Adipiscing ut ultrices convallis eget eu.
        Bibendum nulla vitae egestas ut nisl. Egestas netus faucibus aliquet
        nibh volutpat morbi metus, commodo.
      </p>
      <ul className="brand">
        <li><a href="#"><img src={Windows} width={30} height={30} alt="windows" /></a></li>
        <li><a href="#"><img src={Android} width={30} height={30} alt="android" /></a></li>
        <li><a href="#"><img src={Apple} width={30} height={30} alt="apple" /></a></li>
        <li><button className="down">Download</button></li>
      </ul>
        </div>
        <div className="right">
          <img src={Hero} className="heroimg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Home;
