import React from "react";
import "./singup.scss";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="singup">
      <div className="card">
        <div className="left">
          <div className="content">
            <h1>ProSociel Media.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consequuntur corporis dolorum nesciunt porro a, optio aliquam
              eiusvel architecto ducimus obcaecati, quaerat facilis, aliquid
              quae ut.
            </p>
            <span>You have already an Account?</span>
            <Link to="/singin">
              <button>SingIn Now</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <form action="">
            <h2>SingUp</h2>
            <input type="text" placeholder="UserName" />
            <input type="email" placeholder="UserEmail" />
            <input type="tel" placeholder="UserPhone" />
            <input type="password" placeholder="Password" />
            <button type="submit">SingUp Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
