import React from 'react';
import SignInSide from './Pages/SignIn';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Domain from './Pages/Domain';
import Test from './components/Test';
import GraphNodes from './components/Graph';
import Upload from './Pages/Upload';
import LearnMore from './Pages/LearnMore';
import Profile from './Pages/Profile';
import Landing from './Pages/Landing';
import Title from './Pages/Title';
import Saved from './Pages/Saved';
import DOI from './Pages/DOI';
import Author from './Pages/Author';
import KeySearch from './Pages/keySearch';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import './App.css';

function App() {
  return (
    <ToastProvider autoDismissTimeout="5000" autoDismiss>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <SignInSide />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
          <Route exact path="/domain">
            <Domain />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/graph">
            <GraphNodes />
          </Route>
          <Route eaxct path="/learn-more">
            <LearnMore />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/title-rec">
            <Title />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/doi-search">
            <DOI />
          </Route>
          <Route exact path="/author">
            <Author />
          </Route>
          <Route exact path="/key-search/:key">
            <KeySearch />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
