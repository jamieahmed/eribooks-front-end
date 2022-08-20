import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";

const Profile = ({ user }) => {
  return (
    <div className="profile-card">
      <div class="profile-pic-parent">
        <img
          className="profile-bg"
          src="https://tse3.mm.bing.net/th?id=OIP.CTs4ebiXddIS06qBX90iKgHaEo&pid=Api&P=0"
          alt="profile-bg"
        />
        <img
          className="profile-avator"
          src="https://tse2.mm.bing.net/th?id=OIP.05f8_Zmvp3ZGa2ho2JShzgHaHa&pid=Api&P=0"
          alt="profile-avator"
        />
      </div>
      <div className="edit-profile-icon">
        <Link className="settings" to="/profile/settings">
          <SettingsIcon />
        </Link>
        <Link className="edit-profile" to="/edit-profile">
          <EditIcon />
          Edit Profile
        </Link>
      </div>
      <div className="profile-details">
        <h3 className="proile-details-child">Profile Details</h3>
        <p>
          {" "}
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          {" "}
          <strong>Bio:</strong> Hello my name is jamie ahmed
        </p>
        <p>
          {" "}
          <strong>Talks About:</strong> Programing,Books,Bussiness
        </p>
        <p>
          {" "}
          <strong>Lives in:</strong> westfield NJ,USA
        </p>
        <p>
          {" "}
          <strong>profession:</strong> Software engineer
        </p>
        <p>
          {" "}
          <strong>joined in:</strong> may 2022
        </p>
      </div>
      <div className="profile-posts">
        <h3 className="proile-posts-child">Profile Details</h3>
      </div>
    </div>
  );
};

export default Profile;
