import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Weather from './pages/Weather';
import Blogs from './pages/Blogs';
import Articles from './pages/Articles';
import Image from './pages/Image';
import ErrorMessage from './pages/ErrorMessage';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Reset from './pages/Reset';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

function App() {
  const isLoggedIn = false; // Set this value based on your login logic

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/News" component={News} />
          <Route path="/Weather" component={Weather} />
          <Route path="/Blogs" component={Blogs} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Image" component={Image} />
          <Route path="/errormessage" component={ErrorMessage} />
          <Route path="/About" component={About} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/reset-password" component={Reset} />
          <Route path="/userDetails" component={Profile} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
