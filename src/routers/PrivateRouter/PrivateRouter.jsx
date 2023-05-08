import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

     const currentUser = true;

     if(!currentUser){
          return <Navigate to="/singin"/>
     }

     return children;

};

export default PrivateRouter;