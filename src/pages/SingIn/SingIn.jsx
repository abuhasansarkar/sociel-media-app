import React from "react";
import "./singin.scss";
import { Link } from "react-router-dom";

const SingIn = () => {
  return (
    <div className="singin">
      <div className="card">
        <div className="left">
          <div className="content">
            <h1>Welcome ProSociel.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur corporis dolorum nesciunt porro a, optio aliquam eiusvel architecto ducimus obcaecati, quaerat facilis, aliquid quae ut.
            </p>
            <span>Don't have an Account?</span>
            <Link to="/singup">
            <button>SingUp Now</button></Link>
          </div>
        </div>
        <div className="right">
          <form action="">
          <h2>SingIn</h2>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="Password" />
            <button type="submit">SingIn Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
