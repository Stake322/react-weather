import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';


function App() {
  return (
    <Router>
      <div className="global-container">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/month-statistics" exact component={MonthStatistics} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;