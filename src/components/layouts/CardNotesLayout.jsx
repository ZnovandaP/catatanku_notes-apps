import * as React from 'react';
// * components
import Card from '../card/Card';
// * utils
import { showFormattedDate } from '../../utils';
import triggerToast from '../../utils/triggerToast';

export default function CardNotesLayout({
  notes, setNotes, isArchive, setModalIsOpen, toastRef,
}) {
  const handleDeleteNote = (e, { id, title }) => {
    e.stopPropagation();
    if (id) {
      setNotes((prev) => prev.filter((note) => note?.id !== id));
      toastRef.current.firstChild.children[1].innerText = `Catatan "${title}" dihapus`;
      triggerToast(toastRef);
    }
  };

  const handleArchiveNote = (e, { id, archived, title }) => {
    e.stopPropagation();
    if (id) {
      setNotes((prev) => prev.map((note) => {
        if (note?.id === id) {
          return {
            ...note,
            archived: !note?.archived,
          };
        } return note;
      }));
      const textToast = archived ? `Catatan "${title}" dikeluarkan` : `Catatan "${title}" diarsipkan`;
      toastRef.current.firstChild.children[1].innerText = textToast;
      triggerToast(toastRef);
    }
  };

  const handleShowDetail = (e, id) => {
    e.stopPropagation();
    setModalIsOpen({
      isOpen: true,
      type: 'detailNote',
      id,
    });
  };

  const handleEditNote = (e, id) => {
    e.stopPropagation();
    setModalIsOpen({
      isOpen: true,
      type: 'editNote',
      id,
    });
  };

  return (
    <section className="grid grid-cols-1 z-[1] gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {notes && notes?.map((note) => (
        <Card
          key={note?.id}
          onEdit={(e) => handleEditNote(e, note?.id)}
          isArchive={isArchive}
          onShowDetail={(e) => handleShowDetail(e, note?.id)}
        >
          <Card.Head
            title={note?.title}
            isArchive={isArchive}
            date={showFormattedDate(note?.createdAt)}
          />
          <Card.Body noteBody={note?.body} />
          <Card.Foot
            onDelete={(e) => handleDeleteNote(e, note)}
            onArchive={(e) => handleArchiveNote(e, note)}
            isArchive={note?.archived}
          />
        </Card>
      ))}
    </section>
  );
}
