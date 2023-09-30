import * as React from 'react';
// * icons
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
// * components
import { ColBody, ColHead, Table } from '../table/Table';
// * utils
import { showFormattedDate } from '../../utils';

export default function TableDetailNoteLayout({ note }) {
  return (
    <Table>
      <thead>
        <tr>
          <ColHead
            className="font-bold text-primary/90"
          >
            Judul
          </ColHead>

          <ColHead
            className="font-medium text-textNormal"
          >
            {note?.title}
          </ColHead>
        </tr>
      </thead>
      <tbody>

        <tr>
          <ColBody
            className="font-bold text-primary/90"
          >
            ID note
          </ColBody>

          <ColBody
            className="font-medium text-textNormal"
          >
            {note?.id}
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-primary/90"
          >
            Terakhir Diubah
          </ColBody>

          <ColBody
            className="font-medium text-textNormal"
          >
            {showFormattedDate(note?.createdAt)}
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-primary/90"
          >
            Catatan
          </ColBody>

          <ColBody
            className="font-medium text-textNormal"
          >
            <p>
              {note?.body}
            </p>
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-primary/90"
          >
            Status Note
          </ColBody>

          <ColBody
            className="font-medium text-textNormal"
          >
            <p className="flex items-center gap-2">
              <span className="text-2xl text-archived">
                { note?.archived ? (<BiArchiveIn />) : (<BiArchiveOut />) }
              </span>
              { note?.archived ? 'Status Diarsipkan' : 'Status Tidak Diarsipkan' }
            </p>
          </ColBody>
        </tr>
      </tbody>
    </Table>
  );
}
