import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TasksPage from './pages/TasksPage/TasksPage';
import TasksDetailsPage from './pages/TasksDetailsPage/TasksDetailsPage';
import { getListAsync } from './redux/actions/actions';


import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAsync());
  }, [dispatch])




  return (
    <Switch>
      <Route path="/" exact>
        <TasksPage />
      </Route>

      <Route path="/details/:id" exact>
        <TasksDetailsPage />
      </Route>
    </Switch>
  );
}

export default App;
