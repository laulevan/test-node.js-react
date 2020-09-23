import React from 'react';
import { compose, withProps } from "recompose";

import './home.scss';
import HeaderComponent from "./HeaderComponent";
import FeaturedComponent from "./FeaturedComponent";
import ProductComponent from "./ProductComponent";
import WhatNewComponent from "./WhatNewComponent";
import FooterComponent from "./FooterComponent";
import users from "../../datas/users.json";

const defaultProps = withProps({
  users
});

const HomeComponent = compose(
  defaultProps
)(props => {
  return (
    <div className="home">
      <HeaderComponent users={props.users}/>
      <FeaturedComponent />
      <ProductComponent />
      <WhatNewComponent />
      <FooterComponent />
    </div>
  );
})

export default HomeComponent;
