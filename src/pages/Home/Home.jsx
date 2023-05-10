import React from 'react';
import "./home.scss"
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';

const Home = () => {
     return (
          <div className='home'>
               <div className="container">
                    <Stories/>
                    <Posts/>
               </div>
          </div>
     );
};

export default Home;