import * as React from 'react';
// * layouts
import CardNotesLayout from './CardNotesLayout';
import EmptyNotesLayout from './EmptyNotesLayout';
// * image
import ilustrationEmptyNotes from '../../assets/ilustration/empty-notes-archived.svg';

export default function NotesLayout({
  notes, setNotes, setModalIsOpen, toastRef,
}) {
  return (
    <section
      className="flex flex-col gap-4 mt-10 mx-8 sm:mx-10 md:mx-12 lg:mx-14 xl:mx-16 2xl:mx-20 pb-12"
    >
      <h2 className=" text-archived font-script text-3xl font-semibold tracking-wide">
        Catatanku (Arsip)
      </h2>

      {notes.length > 0
      && (
      <CardNotesLayout
        toastRef={toastRef}
        notes={notes}
        setNotes={setNotes}
        isArchive
        setModalIsOpen={setModalIsOpen}
      />
      )}

      {notes.length < 1
      && <EmptyNotesLayout image={ilustrationEmptyNotes} text="!Tidak Ada Catatan (Arsip)" />}
    </section>
  );
}
