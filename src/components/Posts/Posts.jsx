import React, { useContext } from 'react';
import "./posts.scss";
import userPic from "../../assets/user.png";
import story from "../../assets/story.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { AuthContext } from "../../contexts/authContext/AuthContextProvider";
import { Share } from '@mui/icons-material';


const stories = [
  {
    id: 1,
    name: "AbuHasan",
    dsc: "Our best freelancing services ",
    img: userPic,

  },

  
];

const Posts = () => {
     const {currentUser} = useContext(AuthContext);
     return (
          <div className='posts'>
               <div className="postContainer">
                    <div className="userInfo">
                         <div className="user">
                              <img src={userPic} alt="user" />
                              <div className="text">
                                   <h6>{currentUser.username}</h6>
                                   <i>a few seconds ago</i>
                              </div>
                         </div>
                         <span>...</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, a?</p>
                    <img src={story} alt="thumbnails" />
                    <div className="userReaction">
                         <div className="item">
                             <ThumbUpOutlinedIcon/>  Like
                         </div>
                         <div className="item">
                              <AddCommentIcon/> Comments
                         </div>
                         <div className="item">
                              <Share/> Share
                         </div>
                    </div>
               </div>
               <div className="postContainer">
                    <div className="userInfo">
                         <div className="user">
                              <img src={userPic} alt="user" />
                              <div className="text">
                                   <h6>{currentUser.username}</h6>
                                   <i>a few seconds ago</i>
                              </div>
                         </div>
                         <span>...</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, a?</p>
                    <img src={story} alt="thumbnails" />
                    <div className="userReaction">
                         <div className="item">
                             <ThumbUpOutlinedIcon/>  Like
                         </div>
                         <div className="item">
                              <AddCommentIcon/> Comments
                         </div>
                         <div className="item">
                              <Share/> Share
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Posts;