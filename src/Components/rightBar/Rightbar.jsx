import React from "react";
import "./Rightbar.scss";
// import { AuthContext } from "../../context/authContext";

const Rightbar = () => {
  
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggested for you.</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <span>Amit Gupta</span>
            </div>

            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <span>Amit Gupta</span>
            </div>

            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <p>
                <span>Amit Gupta</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <p>
                <span>Amit Gupta</span> liked your picture
              </p>
            </div>

            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <p>
                <span>Amit Gupta</span> changed their profile picture
              </p>
            </div>

            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <p>
                <span>Amit Gupta</span> posted
              </p>
            </div>

            <span>1 min ago.</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />

              <div className="online"> </div>
              <span>Amit Gupta</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />

              <div className="online"></div>
              <span>Amit Gupta</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />

              <div className="online"></div>

              <span>Amit Gupta</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
                alt=""
              />
              <div className="online"></div>
              <span>Amit Gupta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
