import React from 'react';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import { useHistory } from 'react-router-dom';

import { Note } from '../../../typedefs/Note';

interface Props {
  isOpen: boolean,
  changeModalRenderStatus: (par: boolean) => void,
  buttonName: string,
  functionOnConfirmation: (par?: any, par2?: any, par3?: any, par4?: any) => void,
  noteForDeleteId?: number,
  listReRenderQuery?: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
}

export const ConfirmationModal: React.FC<Props> = ({
  isOpen,
  changeModalRenderStatus,
  buttonName,
  functionOnConfirmation,
  noteForDeleteId = -1,
  listReRenderQuery,
  cleanUpNoteForEdit,
}) => {
  const history = useHistory();

  const handleClickOnYesButton = () => {
    switch (buttonName) {
      case 'delete': {
        functionOnConfirmation(
          noteForDeleteId,
          changeModalRenderStatus,
          listReRenderQuery,
          cleanUpNoteForEdit,
        );

        history.push('/');

        break;
      }

      case 'save':
      case 'cancel': {
        if (functionOnConfirmation) {
          functionOnConfirmation();
        }

        break;
      }

      default:
        break;
    }
  };

  const titleSelect = (name: string): string => {
    const titleStart = 'Are you sure want to';

    switch (name) {
      case 'delete':
        return `${titleStart} delete this note?`;

      case 'save':
        return `${titleStart} save this note?`;

      case 'cancel':
        return `${titleStart} cancel editing?`;

      default:
        return '';
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc
      onRequestClose={() => {
        changeModalRenderStatus(false);
      }}
      style={{
        content: {
          top: '100px',
          left: '380px',
          right: '380px',
          bottom: '450px',
          border: '2px solid #ccc',
          padding: '30px',
        },
      }}
    >
      <h2
        className={classNames(
          'title',
          'is-4',
        )}
      >
        {titleSelect(buttonName)}
      </h2>
      <div className="buttons">
        <button
          type="button"
          onClick={handleClickOnYesButton}
          className={classNames(
            'button',
            'is-danger',
          )}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => changeModalRenderStatus(false)}
          className={classNames(
            'button',
            'is-success',
          )}
        >
          No
        </button>
      </div>
    </ReactModal>
  );
};
