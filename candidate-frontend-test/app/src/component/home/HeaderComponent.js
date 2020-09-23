import React from 'react';
import { Link } from "react-router-dom";

function HeaderComponent({users}) {
  return (
    <div className="header">
      <img src="/pictures/Home_Header_Background.svg" alt=""/>
      <div className="content">
        <div>Good Afternoon, <strong>{users.name}!</strong></div>
        <Link to={"/map"} className="location">
          <img src="/pictures/Location_Pin_with_Hole_and_Shadow.svg" alt=""/>
          <span>{users.location.address}</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
