import React from "react";
import "./leftsidebar.scss";

import user from "../../assets/social-media.jpg";
import frinds from "../../assets/icons/icon (18).png";
import groups from "../../assets/icons/icon (17).png";
import watch from "../../assets/icons/icon (29).png";
import feeds from "../../assets/icons/icon (19).png";
import events from "../../assets/icons/icon (1).png";
import messenger from "../../assets/icons/icon (24).png";
import payments from "../../assets/icons/icon (26).png";
import activity from "../../assets/icons/icon (28).png";
import games from "../../assets/icons/icon (27).png";
import science from "../../assets/icons/icon (22).png";
import ads from "../../assets/icons/icon (21).png";
import crisis from "../../assets/icons/icon (23).png";
import save from "../../assets/icons/save.png";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="container">
        <div className="user">
          <img src={user} alt="user" />
          <strong>UserName</strong>
        </div>
        <div className="navItem">
          <img src={frinds} alt="icon" />
          <li>Friends</li>
        </div>
        <div className="navItem">
          <img src={groups} alt="icon" />
          <li>Groups</li>
        </div>
        <hr />
        <span>Your Shortcuts</span>
        <div className="navItem">
          <img src={save} alt="icon" />
          <li>Saved</li>
        </div>
        <div className="navItem">
          <img src={watch} alt="icon" />
          <li>Watch</li>
        </div>
        <div className="navItem">
          <img src={feeds} alt="icon" />
          <li>Feeds(Most Resent)</li>
        </div>
        <hr />
        <span>Others</span>
        <div className="navItem">
          <img src={ads} alt="icon" />
          <li>Ad Center</li>
        </div>
        <div className="navItem">
          <img src={ads} alt="icon" />
          <li>Ads Manager</li>
        </div>
        <div className="navItem">
          <img src={crisis} alt="icon" />
          <li>Crisis Response</li>
        </div>
        <div className="navItem">
          <img src={science} alt="icon" />
          <li>Climate Science</li>
        </div>
        <div className="navItem">
          <img src={events} alt="icon" />
          <li>Events</li>
        </div>
        <hr />
        <div className="navItem">
          <img src={messenger} alt="icon" />
          <li>Messenger</li>
        </div>
        <div className="navItem">
          <img src={messenger} alt="icon" />
          <li>Messenger Kids</li>
        </div>
        <div className="navItem">
          <img src={games} alt="icon" />
          <li>Play Games</li>
        </div>
        <div className="navItem">
          <img src={payments} alt="icon" />
          <li>Order & Payments</li>
        </div>
        <div className="navItem">
          <img src={frinds} alt="icon" />
          <li>Pages</li>
        </div>
        <div className="navItem">
          <img src={activity} alt="icon" />
          <li>Recent Ad Activity</li>
        </div>
        <div className="navItem">
          <img src={activity} alt="icon" />
          <li>Recent Ad Activity</li>
        </div>

      </div>
    </div>
  );
};

export default LeftSidebar;
