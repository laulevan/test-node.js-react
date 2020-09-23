import React from 'react';
import { Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import footer from "../../datas/footer.json";

function FooterComponent(props) {
  return (
    <div className="footer">
      <Container maxWidth="sm" className="content">
      {
        footer.map((v, k) => (
          <div className={`item ${k === 0 && 'active'}`} key={k}>
            <img src={`/icons/${v.icon}`} alt=""/>
            <div>{v.name}</div>
          </div>
        ))
      }
      </Container>
    </div>
  );
}

export default withRouter(FooterComponent);
