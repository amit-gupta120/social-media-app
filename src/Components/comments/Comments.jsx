import React, { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary Comments
  const comments = [
    {
      id: 1,
      desc: "Om Namah Shivay",
      name: "Prem Raj",
      userId: 1,
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQHVceNxdVIDhA/profile-displayphoto-shrink_800_800/0/1690139004890?e=1711584000&v=beta&t=lxe6DzwRYFPvapWlbIBh8exI9KQpxcDNAM4wDvFtWas",
    },
    {
      id: 2,
      desc: "Om Namah Shivay",
      name: "Shubham Anand",
      userId: 2,
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQELr5H7a6D8Pw/profile-displayphoto-shrink_200_200/0/1695899406878?e=1711584000&v=beta&t=0jPuKolhxD9moiHcDg_EPOCPQSAKf1pzhdmX7G5Hn5E",
    },
  ];
  return (
    <div className="comments">
      <div className="writeComment">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Post your comment" />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
