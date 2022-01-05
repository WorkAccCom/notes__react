import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Notes } from './components/Notes';

export const App: React.FC = () => {
  const defaultNotes = [
    {
      id: 0,
      title: 'First note title',
      text: 'This is a text content of the first default note',
    },
    {
      id: 1,
      title: 'Second note title',
      text: 'This is a text content of the Second default note',
    },
  ];

  useEffect(() => {

  }, []);

  return (
    <div className="app">
      <h1 className="app__title">Notes</h1>
      <Switch>
        <Route path="/" exact>
          <Notes notes={defaultNotes} />
        </Route>

        <p>error</p>
      </Switch>
    </div>
  );
};
