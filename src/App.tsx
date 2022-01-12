import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Notes } from './components/Notes';
import { Edit } from './components/Edit';

import { getNotesFromLocalStorage } from './data-processing/getNotesFromLocalStorage';

import './App.scss';
import { Note } from './typedefs/Note';

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
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <h1 className="App__title">Notes</h1>
          <button
            type="button"
            onClick={handleNewNoteButtonClick}
          >
            New note
          </button>
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
    </div>
  );
};
