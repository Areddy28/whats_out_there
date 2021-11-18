import React, { useContext } from 'react';
import './App.css';
import Container from './components/Container';
import DarkParkDetails from './components/DarkParkDetails';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { SearchProvider } from "./context/SearchProvider";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import NewsFeed from './components/NewsFeed';
import NewsFeedAll from './components/NewsFeedAll';
import LearnMore from './components/LearnMore';
import DarkParkList from './components/DarkParkList';
import DarkParkSearch from './components/DarkParkSearch';
import Forecast from './components/Forecast';
import NavbarWeather from './components/NavbarWeather';

function App() {

  return (

    <SearchProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/news" exact>
              <NewsFeedAll />
            </Route>
            <Route path="/learnmore" exact>
              <LearnMore />
            </Route>
            <Route path="/forecast">
              <Forecast />
            </Route>
            <Route path="/darkparklist" exact>
              <DarkParkList />
            </Route>
            <Route path="/" exact>
              <Container />
            </Route>
          </Switch>
        </Router>

        {/* <Homepage/>
      <DarkParkDetails /> Adding this component here just to see the display of the image from the api */}
      </div>
    </SearchProvider>
  );
}

export default App;
