import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/phones">Phone List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/phones" component={PhoneList} />
          <Route path="/phones/:id" component={PhoneDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;