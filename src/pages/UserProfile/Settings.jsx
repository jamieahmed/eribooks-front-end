import React from "react";
import { Link } from "react-router-dom";
const Settings = () => {
  return (
    <div>
      <h2>This is settting page</h2>
      <Link to="/changePassword">Change Password</Link>
    </div>
  );
};

export default Settings;
