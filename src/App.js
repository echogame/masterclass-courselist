// System imports
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

// Styles
import './App.css';

// Page components
import Courses from './Courses/Courses';

function App() {
  const CURRENT_USER = {
    email: 'yinneh@gmail.com'
  };
  
  return (
    <div className="App">
      <Router>
        <div className="App_navigation">
          <span className="App_navigation__title">Nav:</span>
          <ul className="App_navigation__list">
            <li className="App_navigation__listItem">
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </div> 
      
        <div className="App_content">
          <Switch>
            <Route path="/courses">
              <Courses user={CURRENT_USER}/>
            </Route>

            {/* Always go to /courses page */}
            <Route path="/"><Redirect to="/courses" /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
