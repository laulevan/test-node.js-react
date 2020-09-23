import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

import { getProducts } from "../../services";

function ProductComponent() {
  const [isCollapse, setIsCollapse] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    getProducts().then(res => {
      res.data && setProducts(res.data)
    })
  }

  const showProducts = isCollapse ? [...products] : [...products.slice(0, 6)];

  return (
    <div className="products">
      <Grid container spacing={10} className="items">
        {
          showProducts.map((v, k) => (
            <Grid key={k} item xs={4} className="item">
              <Link to={"#"}>
                <img src={`/products/${v.icon}`} alt="" />
                <div>{v.name}</div>
              </Link>
            </Grid>
          ))
        }
      </Grid>
      <div className="collapse">
        <i className={`fas fa-chevron-${isCollapse ? "up" : "down"} fa-2x`} onClick={() => setIsCollapse(!isCollapse)}></i>
      </div>
    </div>
  );
}

export default ProductComponent;
