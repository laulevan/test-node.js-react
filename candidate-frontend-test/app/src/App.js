import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import "@fortawesome/fontawesome-free/css/all.css";

import './App.css';
import HomeComponent from "./component/home";
import MapComponent from "./component/map";
import theme from "./config/materialUI";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Router>
            <Switch>
              <Route path="/map" component={MapComponent} />
              <Route path="/" component={HomeComponent} />
            </Switch>
          </Router>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
