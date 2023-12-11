// AboutPage.js
import React from 'react';
import './AboutPage.css'; // Make sure to create a corresponding CSS file

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="title-bar">
        <div className="title-text">About Us</div>
      </div>
      <div className="slogan">Recipe In, Metrics Out - Your Culinary Code Cracker!</div>
      <MainImage />
      <TextImageSection
        imgSrc="path-to-left-image.jpg"
        text="We believe cooking should be a seamless and enjoyable experience for everyone, regardless of measurement preferences. Born out of a passion for culinary exploration, this is your go-to destination for hassle-free recipe conversion. Our platform effortlessly transforms recipes between various metric and imperial units, ensuring precision in your culinary endeavors. Say goodbye to the confusion of conflicting measurements and hello to a streamlined cooking process."
        imgPosition="left"
      />
      <TextImageSection
        imgSrc="path-to-right-image.jpg"
        text="But that's not all... we go beyond conversion, offering a virtual cookbook to store and organize your favorite recipes. Join us on a journey where precision meets convenience, and every recipe becomes a culinary triumph. Join us, and savor the joy of cooking without boundaries. Create a profile and save your preferred metrics in your personal cookbook for a seamless experience in future kitchen endeavors."
        imgPosition="right"
      />
    </div>
  );
};

/* const Header = () => (
  <header className="page-header">
    <button className="home-button">Home</button>
    <button className="login-button">Login</button>
  </header>
);*/




const MainImage = () => (
  <div className="main-image">
    {/* You will replace "path-to-man-image.jpg" with your actual image path */}
    <img src='./kitchenperson.jpg' alt="Main Visual" />
  </div>
);

const TextImageSection = ({ imgSrc, text, imgPosition }) => (
  <div className={`text-image-section ${imgPosition}`}>
    <img src={imgSrc} alt="Side Visual" />
    <p className="text-content">{text}</p>
  </div>
);

export default AboutPage;
