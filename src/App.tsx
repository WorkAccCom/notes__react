import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { Notes } from './components/Notes';
import { Edit } from './components/Edit';

import { getNotesFromLocalStorage } from './data-processing/getNotesFromLocalStorage';

import { Note } from './typedefs/Note';

import 'bulma/css/bulma.min.css';

export const App: React.FC = () => {
  const [notesFromLocalStorage, setNotes] = useState<Note[] | null>(null);
  const [noteForEdit, setNoteForEdit] = useState<Note | null>(null);
  const history = useHistory();

  useEffect(() => {
    setNotes(getNotesFromLocalStorage());
  }, []);

  const handleNewNoteButtonClick = () => {
    setNoteForEdit(null);
    history.push('/edit');
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className="level box section">
          <h1
            className={classNames(
              'title',
              'is-1',
              'level-item',
            )}
          >
            Notes
          </h1>
          <button
            type="button"
            onClick={handleNewNoteButtonClick}
            className={classNames(
              'button',
              'is-success',
              'is-medium',
              'level-item',
            )}
          >
            New note
          </button>
        </div>

        <Notes
          notes={notesFromLocalStorage}
          listReRenderQuery={setNotes}
          passNoteForEdit={setNoteForEdit}
        />
      </Route>

      <Route path="/edit">
        <Edit
          listReRenderQuery={setNotes}
          chosenNoteForEdit={noteForEdit}
          cleanUpNoteForEdit={setNoteForEdit}
        />
      </Route>

      <p>Error — page is not exist</p>
    </Switch>
  );
};
