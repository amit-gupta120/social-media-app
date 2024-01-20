import React from "react";
import "./Posts.scss";
import Post from "../post/Post";

const Posts = () => {
  // TemporaryData

  const posts = [
    {
      id: 1,
      name: "Amit",
      userId: 1,
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g",
      desc: "Kedarnath Mandir",
      img: "https://images.pexels.com/photos/11974834/pexels-photo-11974834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Amit",
      userId: 1,
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g",
      desc: "Maintain a positive mindset,work diligently, and turn your aspirations into reality.The journey may be challenging , but each step forward is a step toward achievement. Keep pushing,keep believing,and make it happen!",
      // img: "https://images.pexels.com/photos/11974834/pexels-photo-11974834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
