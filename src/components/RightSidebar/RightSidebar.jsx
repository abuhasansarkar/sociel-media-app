import React from "react";
import "./rightsidebar.scss";

import user from "../../assets/social-media.jpg";
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="container">
        {/* Friend Suggestions */}
        <div className="main">
          <span>Suggestions for you</span>
          
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName</strong>
            </div>
            <div className="btn">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName</strong>
            </div>
            <div className="btn">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        {/* Activities */}
        <div className="main">
          <span>Latest Activities</span>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName(Change cover photo)</strong>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName(Change cover photo)</strong>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName(Change cover photo)</strong>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <strong>UserName(Change cover photo)</strong>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* Online Friends */}
        <div className="main">
          <span>Online Friends</span>

          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
          <div className="items">
            <div className="user">
              <img src={user} alt="user" />
              <div className="active" />
              <strong>UserName</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
