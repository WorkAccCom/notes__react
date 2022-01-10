// react library constituents
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ReactModal from 'react-modal';

// react components
import { Notes } from './components/Notes';
import { Edit } from './components/Edit';

// helping functions
import { getNotesFromLocalStorage } from './data-processing/getNotesFromLocalStorage';

// other
import './App.scss';
import { Note } from './typedefs/Note';

export const App: React.FC = () => {
  const [notesFromLocalStorage, setNotes] = useState<Note[] | null>(null);
  const [noteForEdit, setNoteForEdit] = useState<Note | null>(null);

  useEffect(() => {
    setNotes(getNotesFromLocalStorage());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <h1 className="App__title">Notes</h1>
          <Link to="/edit">
            New note
          </Link>
          <Notes
            notes={notesFromLocalStorage}
            listRerenderQuery={setNotes}
            passNoteForEdit={setNoteForEdit}
          />
        </Route>

        <Route path="/edit">
          <Edit
            listRerenderQuery={setNotes}
            chosenNoteForEdit={noteForEdit}
            cleanUpNoteForEdit={setNoteForEdit}
          />
        </Route>

        <p>Error — page is not exist</p>
      </Switch>
    </div>
  );
};
