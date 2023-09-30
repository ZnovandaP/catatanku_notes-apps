import * as React from 'react';
// * layouts
import AppLayout from './layouts/AppLayout';
import SearchLayout from './layouts/SearchLayout';
import NotesLayout from './layouts/NotesLayout';
import NotesArchivedLayout from './layouts/NotesArchivedLayout';
import FooterLayout from './layouts/FooterLayout';
// * components
import ButtonAddNote from './button/ButtonAddNote';
import Modal from './modal/Modal';
import BodyAddNote from './modal/BodyAddNote';
import BodyEditNote from './modal/BodyEditNote';
import BodyDetailNote from './modal/BodyDetailNote';
import Toast from './popup/Toast';
// * utils
import { getInitialData } from '../utils';

export default function NoteApp() {
  const initialData = JSON.parse(localStorage.getItem('MY_NOTES_APP')) ?? getInitialData();
  const [notes, setNotes] = React.useState(initialData);
  const [keywordSearch, setKeywordSearch] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState({
    isOpen: false,
    type: null,
    id: null,
  });

  const toastRef = React.useRef(null);

  const notesBasedOnSearch = notes?.filter((note) => {
    const titleLower = note?.title.toLowerCase();
    const keywordSearchLower = keywordSearch.toLowerCase().trim();
    return titleLower.indexOf(keywordSearchLower) !== -1;
  });
  const notesUnarchived = notesBasedOnSearch?.filter((note) => !note?.archived);
  const notesArchived = notesBasedOnSearch?.filter((note) => note?.archived);

  React.useEffect(() => {
    localStorage.setItem('MY_NOTES_APP', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <AppLayout>
        <SearchLayout
          value={keywordSearch}
          onChange={(e) => setKeywordSearch(e.target.value)}
        />
        <NotesLayout
          notes={notesUnarchived}
          setNotes={setNotes}
          setModalIsOpen={setModalIsOpen}
          toastRef={toastRef}
        />
        <NotesArchivedLayout
          notes={notesArchived}
          setNotes={setNotes}
          setModalIsOpen={setModalIsOpen}
          toastRef={toastRef}
        />
        <ButtonAddNote modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

        <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} notes={notes}>
          {modalIsOpen.type === 'addNote'
            && (
            <BodyAddNote
              setModalIsOpen={setModalIsOpen}
              setNotes={setNotes}
              toastRef={toastRef}
            />
            )}

          {modalIsOpen.type === 'editNote'
            && (
            <BodyEditNote
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              setNotes={setNotes}
              notes={notes}
              toastRef={toastRef}
            />
            )}

          {modalIsOpen.type === 'detailNote'
          && (
          <BodyDetailNote notes={notes} modalIsOpen={modalIsOpen} />
          )}
        </Modal>

        <Toast ref={toastRef} />
      </AppLayout>

      <FooterLayout />
    </>
  );
}
