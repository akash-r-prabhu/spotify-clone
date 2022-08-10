import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify logo"
      />
      <SidebarOption title="Home" Icon="playlist" />
      <SidebarOption title="Home" Icon="playlist" />
    </div>
  );
}

export default Sidebar;
