import { useContext } from "react";
import "./Stories.scss";
import React from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  // TemporaryData

  const stories = [
    {
      id: 1,
      name: "Amit",
      img: "https://images.pexels.com/photos/19869326/pexels-photo-19869326/free-photo-of-matterhorn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Amit",
      img: "https://images.pexels.com/photos/19869326/pexels-photo-19869326/free-photo-of-matterhorn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Amit",
      img: "https://images.pexels.com/photos/19869326/pexels-photo-19869326/free-photo-of-matterhorn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Amit",
      img: "https://images.pexels.com/photos/19869326/pexels-photo-19869326/free-photo-of-matterhorn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
