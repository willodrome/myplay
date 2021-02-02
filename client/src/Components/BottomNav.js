import React from "react";
import { NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <div id="nav" className="nav">
      <NavLink to="/games" className="tab-games" role="button">
        Games
      </NavLink>
      <NavLink to="/team" className="tab-team" role="button">
        Team
      </NavLink>
      <NavLink to="/camera" className="tab-camera" role="button">
        Camera
      </NavLink>
      <NavLink to="/live" className="tab-live" role="button">
        Live
      </NavLink>
    </div>
  );
};
