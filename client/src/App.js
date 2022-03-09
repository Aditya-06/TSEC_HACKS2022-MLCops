import React from 'react';
import SignInSide from './Pages/SignIn';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider autoDismissTimeout="5000" autoDismiss>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <SignInSide />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
