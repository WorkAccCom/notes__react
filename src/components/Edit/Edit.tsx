import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { ConfirmationModal } from '../modals/Confirmation';

import { addNoteToLocalStorage } from '../../data-processing/addNoteToLocalStorage';
import { editNoteInLocalStorage } from '../../data-processing/editNoteInLocalStorage';
import { getNotesFromLocalStorage } from '../../data-processing/getNotesFromLocalStorage';

import { Note } from '../../typedefs/Note';
import { DeleteButton } from '../buttons/Delete';

interface Props {
  listReRenderQuery: (par: Note[] | null) => void,
  chosenNoteForEdit: Note | null,
  cleanUpNoteForEdit: (par: Note | null) => void,
}

export const Edit: React.FC<Props> = ({
  listReRenderQuery,
  chosenNoteForEdit,
  cleanUpNoteForEdit,
}) => {
  const [initialNoteState, setInitialNoteState] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [onSaveModalRendered, setOnSaveModalRendered] = useState(false);
  const [onCancelModalRendered, setOnCancelModalRendered] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let initialNote = '';

    if (chosenNoteForEdit?.title) {
      setTitle(chosenNoteForEdit.title);
      initialNote += chosenNoteForEdit.title;
    }

    if (chosenNoteForEdit?.text) {
      setText(chosenNoteForEdit.text);
      initialNote += chosenNoteForEdit.text;
    }

    setInitialNoteState(initialNote);
  }, []);

  const inputChangeHandle = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'text':
        setText(event.target.value);
        break;
      default:
    }
  };

  const saveNote = () => {
    if (chosenNoteForEdit) {
      editNoteInLocalStorage(
        chosenNoteForEdit.id,
        title,
        text,
      );

      cleanUpNoteForEdit(null);
    } else {
      addNoteToLocalStorage(title, text);
    }

    listReRenderQuery(getNotesFromLocalStorage());
    history.push('/');
  };

  const handleClickOnSaveButton = () => {
    if (chosenNoteForEdit) {
      setOnSaveModalRendered(true);
    } else {
      saveNote();
    }
  };

  const handleClickOnCancelButton = () => {
    if (title + text === initialNoteState) {
      cleanUpNoteForEdit(null);
      history.push('/');
    }

    setOnCancelModalRendered(true);
  };

  const cancelEditing = () => {
    cleanUpNoteForEdit(null);
    history.push('/');
  };

  return (
    <div className="box section">
      <div className="field">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={inputChangeHandle}
          name="title"
          className="input is-medium"
        />
      </div>
      <div className="field">
        <textarea
          placeholder="Text"
          value={text}
          onChange={inputChangeHandle}
          name="text"
          className="textarea block is-medium"
          disabled={!title}
          rows={8}
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          name="name"
          className="button is-success is-medium"
          onClick={handleClickOnSaveButton}
          disabled={!title || !(initialNoteState !== title + text)}
        >
          Save
        </button>
        <ConfirmationModal
          isOpen={onSaveModalRendered}
          changeModalRenderStatus={setOnSaveModalRendered}
          buttonName="save"
          functionOnConfirmation={saveNote}
        />
        <button
          type="button"
          name="name"
          className={classNames(
            'button',
            'is-warning',
            'is-medium',
          )}
          onClick={handleClickOnCancelButton}
        >
          Cancel
        </button>
        <ConfirmationModal
          isOpen={onCancelModalRendered}
          changeModalRenderStatus={setOnCancelModalRendered}
          buttonName="cancel"
          functionOnConfirmation={cancelEditing}
        />
        {chosenNoteForEdit && (
          <DeleteButton
            id={chosenNoteForEdit.id}
            listReRenderQuery={listReRenderQuery}
            cleanUpNoteForEdit={cleanUpNoteForEdit}
          />
        )}
      </div>
    </div>
  );
};
