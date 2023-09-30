import * as React from 'react';
// * layouts
import CardNotesLayout from './CardNotesLayout';
import EmptyNotesLayout from './EmptyNotesLayout';
// * image
import ilustrationEmptyNotes from '../../assets/ilustration/empty-note.svg';

export default function NotesLayout({
  notes, setNotes, setModalIsOpen, toastRef,
}) {
  return (
    <section className="flex flex-col gap-4 mt-10 mx-8 sm:mx-10 md:mx-12 lg:mx-14 xl:mx-16 2xl:mx-20">
      <h2 className=" text-primary font-script text-3xl font-semibold tracking-wide">
        Catatanku
      </h2>

      {notes.length > 0
      && (
      <CardNotesLayout
        notes={notes}
        setNotes={setNotes}
        setModalIsOpen={setModalIsOpen}
        toastRef={toastRef}
      />
      )}

      {notes.length < 1 && <EmptyNotesLayout image={ilustrationEmptyNotes} text="!Tidak Ada Catatan" />}
    </section>
  );
}
