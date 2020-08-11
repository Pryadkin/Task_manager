import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route
        path='/'
        render={() => <TasksPage />}
      />
    </Switch>
  );
}

export default App;
