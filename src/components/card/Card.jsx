import * as React from 'react';
// * components
import ButtonDeleteCard from '../button/ButtonDeleteCard';
import ButtonArchiveCard from '../button/ButtonArchiveCard';
import ButtonEditNote from '../button/ButtonEditNote';

export default function Card({
  children, onShowDetail, onEdit, isArchive,
}) {
  return (
    <div
      onKeyDown={onShowDetail}
      onClick={onShowDetail}
      role="button"
      tabIndex="0"
      className={`relative flex flex-col gap-4 min-w-[250px] min-h-[300px] max-w-full bg-transparent border rounded-md hover:shadow-2xl focus:shadow-2xl transition-all duration-300 ${!isArchive ? 'border-primary hover:shadow-primary focus:shadow-primary ' : 'border-archived hover:shadow-archived focus:shadow-archived'}`}
    >
      {children}
      <ButtonEditNote isArchive={isArchive} onClick={onEdit} />
    </div>
  );
}

function Head({ title, date, isArchive }) {
  return (
    <section
      className="px-4 pt-4 flex flex-col gap-1 h-[25%]"
    >
      <h3 className={`flex items-center font-head text-xl tracking-wider  ${!isArchive ? 'text-primary' : 'text-archived'}`}>
        <span className="line-clamp-1">{title}</span>
      </h3>
      <p className="text-textNormal font-medium tracking-wide line-clamp-1">
        {date}
      </p>
    </section>
  );
}

function Body({ noteBody }) {
  return (
    <section className="px-4 h-[60%] pb-5">
      <p className="text-textMedium font-medium tracking-wider hyphens-auto line-clamp-[9]">
        {noteBody}
      </p>
    </section>
  );
}

function Foot({ onDelete, onArchive, isArchive }) {
  return (
    <section
      className={` divide-x  flex items-center border-t-[1px]  h-[15%] ${!isArchive ? 'divide-primary/60 border-primary/60' : 'divide-archived/60 border-archived/60'}`}
    >
      <ButtonDeleteCard onClick={onDelete} />
      <ButtonArchiveCard onClick={onArchive} isArchive={isArchive} />
    </section>
  );
}

Card.Head = Head;
Card.Body = Body;
Card.Foot = Foot;
