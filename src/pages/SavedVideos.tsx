import React from "react";
import { Sidebar, Header } from "../components";

const SavedVideos: React.FC = () => {
  return (
    <div className="app-wrapper saved-videos-container">
      <Sidebar />
      <div className="app-body-container">
        <Header title="saved videos" />
        <ul className="video-list">
          <li>
            <img src="./actors/yoyo.png" alt="actor" />
            <span>Saying Hi to Users!</span>
            <ul className="tag-list">
              <li>Email</li>
              <li>Marketing</li>
              <li>Greeting</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SavedVideos;
