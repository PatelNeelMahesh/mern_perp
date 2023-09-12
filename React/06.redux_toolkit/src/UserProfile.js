// UserProfile.js
import React from "react";
import { useSelector } from "react-redux";
// This is a hook allows you to select and read data from the Redux store. It takes a selector function as an argument and returns the selected data from the store.

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <p>User data not available.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
