import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
// import ShareIcon from "@mui/icons-material/Share";

const Account = ({ user }) => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-pic">
          <img
            className="profile-avator"
            src="https://tse3.mm.bing.net/th?id=OIP.CTs4ebiXddIS06qBX90iKgHaEo&pid=Api&P=0"
            alt="profile-bg"
          />
          <div className="name-of-user">
            <strong>{user.name}</strong>
          </div>
        </div>
        <div className="profile-details">
          <h3 className="proile-details-title">Profile Details</h3>
          <p>
            <strong>Bio:</strong>
          </p>
          <p>
            <strong>Talks About:</strong>
          </p>
          <p>
            <strong>Lives in:</strong>
          </p>
          <p>
            <strong>profession:</strong>
          </p>
          <p>
            <strong>Joined in:</strong> {user.createdAt.toString()}
          </p>
          <hr />
          <Link className="edit-profile" to="/profile/add-profile-details">
            <EditIcon /> Add profile details
          </Link>
          <Link className="edit-profile" to="/profile/settings">
            <SettingsIcon /> Settings
          </Link>
          {/* <Link className="edit-profile" to="/profile/share">
            <ShareIcon />
          </Link> */}
        </div>
        <div className="profile-footer">
          <p className="profile-footer-details">
            <strong>0</strong>
            <br />
            Posts
          </p>
          <p className="profile-footer-details">
            <strong>0</strong>
            <br />
            Followers
          </p>
          <p className="profile-footer-details">
            <strong>0</strong>
            <br />
            Following
          </p>
        </div>
      </div>
    </>
  );
};

export default Account;
