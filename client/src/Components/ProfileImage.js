import React, { useContext, useRef } from "react";
import { UserContext } from "../Context/UserContext";

export const ProfileImage = () => {
  const { user, setUser } = useContext(UserContext);
  const fileInput = useRef(null);
  const acronym = user && !user.avatar && `${(user.firstName && user.firstName.slice(0, 1)) || "⋯"}${(user.lastName && user.lastName.slice(0, 1)) || ""}`;

  const fileChange = async files => {
    const remoteUrl = "http://localhost:5000";
    const formData = new FormData();
    formData.append("avatar", files[0]);

    fetch(`${remoteUrl}/upload`, {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser({ avatar: `${remoteUrl}${data.filename}` });
      })
      .catch(err => {
        console.error(err);
      });
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