import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://m.facebook.com/anuksha.pasayat.7">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/anukshapasayat/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/anukshapasayat">
            <i className="fa fa-twitter"></i>
          </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Anuksha.</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Machine Learning Enthusiast 📱",
                    1000,
                    "React 🔴",
                    1000,
                    "Bootstrap 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Anuksha.pdf" download="Anuksha Anuksha.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}