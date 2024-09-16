import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="msg">please login</div>;

  return <div className="msg">Welcome {user.username}</div>;
}

export default Profile;
