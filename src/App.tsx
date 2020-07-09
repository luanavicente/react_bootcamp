import React from 'react';
import Counter from './Counter';
import CounterV2 from './CounterV2';
import ConsumingAPI from './ConsumingAPI';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Counter} exact path="/"/>
          <Route component={CounterV2} path="/counter2"/>
          <Route component={ConsumingAPI} path="/api"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
