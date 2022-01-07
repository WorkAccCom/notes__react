import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import { notes as notesFromLocalStorage } from './localesrotage';

import { Notes } from './components/Notes';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <h1 className="App__title">Notes</h1>
          <Link to="/edit">
            New note
          </Link>
          <Notes notes={notesFromLocalStorage} />
        </Route>
        <Route path="/edit">

        </Route>
        <p>error</p>
      </Switch>
    </div>
  );
};
