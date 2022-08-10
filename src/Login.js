import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="spotify logo"
      />
      {/* login with spotify button */}
      <a
        onClick={() => window.open(loginUrl, "_self")}
        className="login_button"
      >
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
