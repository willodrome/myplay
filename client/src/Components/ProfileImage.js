import React, { useContext, useRef } from "react";
import { UserContext } from "../Context/UserContext";

export const ProfileImage = () => {
  const { user } = useContext(UserContext);
  const fileInput = useRef(null);
  const acronym = user && !user.avatar && `${(user.firstName && user.firstName.slice(0, 1)) || "⋯"}${(user.lastName && user.lastName.slice(0, 1)) || ""}`;

  const fileChange = async files => {
    console.log(files[0]);
  };

  return (
    <div className="file-picker">
      <input type="file" accept=".png, .jpg" ref={fileInput} onChange={e => fileChange(e.target.files)} />
      <div className="avatar avatar-md" role="button" onClick={() => fileInput.current.click()} style={user && user.avatar && { backgroundImage: `url('${user.avatar}')` }}>
        {acronym}
      </div>
      <span>Update Avatar</span>
    </div>
  );
};
