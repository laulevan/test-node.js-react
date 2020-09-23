import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { getNews } from "../../services";

function WhatNewComponent() {

  const [whatnew, setWhatnew] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    getNews().then(res => {
      res.data && setWhatnew(res.data)
    })
  }

  return (
    <div className="whatnew">
      <div className="title">What's New</div>
      <div className="content">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {whatnew.map((v, k) => (
            <SwiperSlide key={k}>
              <Card className="item">
                <img src={"/pictures/29.png"} alt="" />
                <CardContent>
                  <div className="item-title">{v.title}</div>
                  <p className="item-desc">{v.desc}</p>
                </CardContent>
                <CardActions>
                  <Link to={''}>Learn more</Link>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}

export default WhatNewComponent;
