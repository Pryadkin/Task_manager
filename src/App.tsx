import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TasksPage from './pages/TasksPage/TasksPage';
import TasksDetailsPage from './pages/TasksDetailsPage/TasksDetailsPage';
import { getListAsync } from './redux/actions/actions';
import Footer from './components/Footer/Footer';

import { IApplicationState } from './redux/rootReducer/rootReducerType';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);

  // Загрузка данных с сервера происходит только один раз при открытии планировщика задач.
  useEffect(() => {
    if (tasklist.length === 0) dispatch(getListAsync());
  }, [tasklist, dispatch])

  return (
    <div className="base-container">
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <TasksPage />
          </Route>

          <Route path="/details/:id" exact>
            <TasksDetailsPage />
          </Route>
        </Switch>
      </div>


      <Footer />
    </div>
  );
}

export default App;
