import React from "react";
import "./SongRow.css";
function SongRow({ track }) {
  return (
    <div className="songRow">
      <img
        className="songRow_album"
        src={track?.album?.images[0]?.url}
        alt="song"
      />
      <div className="songRow_info">
        <h3>{track?.name}</h3>
        <p>
          {track?.artists.map((artist) => artist.name).join(",")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
