import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import FullMap from './pages/FullMap';
import About from './pages/About';
import Support from './pages/Support';
import Developers from './pages/Developers';
import AboutData from './pages/About-Data';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FullMap} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/about-data" component={AboutData} />
        <Route path="/for-developers" component={Developers} />
        <Route path="/ways-to-help" component={Support} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router> 
  );
}

export default App