import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  const acronym = user && !user.avatar && `${(user.firstName && user.firstName.slice(0, 1)) || "⋯"}${(user.lastName && user.lastName.slice(0, 1)) || ""}`;

  return (
    <div id="header">
      <div className="brand">
        <NavLink to="/">
          <span className="logo"></span>
        </NavLink>
      </div>
      <div className="middle">
        <div className="dropdown centered" role="button">
          Maccabi Tel Aviv
        </div>
      </div>
      <div className="profile">
        <NavLink to="/profile" className="avatar avatar-sm" role="button" style={user && user.avatar && { backgroundImage: `url('${user.avatar}')` }}>
          {acronym}
        </NavLink>
      </div>
    </div>
  );
};
