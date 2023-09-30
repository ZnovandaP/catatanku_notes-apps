import * as React from 'react';
import TableDetailNoteLayout from '../layouts/TableDetailNoteLayout';

export default function BodyDetailNote({ notes, modalIsOpen }) {
  const currentNote = notes?.find((note) => note?.id === modalIsOpen.id);

  return (
    <section className="flex h-full justify-center items-center px-8 md:px-12">
      <TableDetailNoteLayout note={currentNote} />
    </section>
  );
}
