import React, { useState, useEffect } from "react";
// import _ from "lodash";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import {
  ArrowBackIos
} from '@material-ui/icons';

import "./style.scss";
import users from "../../datas/users.json";

const googleApiKey = 'AIzaSyB5r6JEUMSpwOd1ecnNFQ_tjX_ssE8lU5g';

const MapComponent = compose(
  withProps({
    users,
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const google = window.google;

  const [address, setAddress] = useState(users.location.address);
  const [map, setMap] = useState({ 
    lat: users.location.lat, 
    lng: users.location.lng
  });

  useEffect(() => {
    getAddressName()
  })

  const getAddressName = () => {
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(map.lat, map.lng);
    geocoder.geocode({
      'latLng': latlng
    }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          console.log(results[1])
          setAddress(results[1].formatted_address)
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  const onMarkerDragEnd = (e) => {
    setMap({ 
      lat: e.latLng.lat(), 
      lng: e.latLng.lng()
    })
    getAddressName()
  }

  return (
    <div className="map">
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link to={'/'} style={{ textDecoration: "none", color: "#555" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ArrowBackIos />
            </IconButton>
          </Link>
          <Typography variant="h6" className="title">{address}</Typography>
        </Toolbar>
      </AppBar>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
        />
      </GoogleMap>
      <div className="bottom-action">
        <Button variant="contained" color="primary" size="large" onClick={e=> props.history.push('/')}>
          Confirm
        </Button>
      </div>
    </div>
  )
});

export default withRouter(MapComponent);