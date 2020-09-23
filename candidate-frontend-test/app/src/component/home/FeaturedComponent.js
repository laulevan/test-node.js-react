import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

import { getFeatured } from "../../services";

function FeaturedComponent() {

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = () => {
    getFeatured().then(res => {
      res.data && setFeatured(res.data)
    })
  }

  return (
    <div className="featured">
      <Card>
        <CardContent>
          <div className="title">Featured</div>
          <div className="content">
            <Grid container justify="center" spacing={10} className="items">
              {
                featured.map((v, k) => (
                  <Grid key={k} item xs={4} className="item">
                    <Link to={"#"}>
                      <img src={`/products/${v.icon}`} alt="" />
                      <div>{v.name}</div>
                    </Link>
                  </Grid>
                ))
              }
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeaturedComponent;
