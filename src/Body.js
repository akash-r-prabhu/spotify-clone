import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Favorite } from "@mui/icons-material";
function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
      {/* list of songs */}
      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Body;
