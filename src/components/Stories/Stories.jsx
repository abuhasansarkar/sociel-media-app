import React, { useContext } from "react";
import "./stories.scss";
import storiesImg from "../../assets/story.png";
import { AuthContext } from "../../contexts/authContext/AuthContextProvider";

const stories = [
  {
    id: 1,
    name: "AbuHasan",
    img: storiesImg,
  },
  {
    id: 2,
    name: "AbuHasan",
    img: storiesImg,
  },
  {
    id: 3,
    name: "AbuHasan",
    img: storiesImg,
  },
  {
    id: 4,
    name: "AbuHasan",
    img: storiesImg,
  },
  
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="storyItem">
        <img src={currentUser.img} alt="story" />
        <span>+</span>
        <strong>{currentUser.username}</strong>
      </div>

      {stories.map((story) => (
        <div key={story.id} className="storyItem">
          <img src={story.img} alt="story" />
          <strong>{story.name} </strong>
        </div>
      ))}
    </div>
  );
};

export default Stories;
