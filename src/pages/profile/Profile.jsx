import React, { useContext } from "react";
import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../../context/authContext";
import Posts from "../../Components/posts/Posts.jsx";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://media.licdn.com/dms/image/C5616AQHtll6nz2ApEQ/profile-displaybackgroundimage-shrink_350_1400/0/1626455914602?e=1711584000&v=beta&t=OVVklwuz8sQ_z4Cd6ar4dL6-jBGXhTfuy28a7txl8nM"
          alt=""
          className="cover"
        />
        <img src={currentUser.profilePic} alt="" className="profilePic" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instgram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://in.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Amit</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>faceapp.in</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
