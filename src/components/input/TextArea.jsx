import * as React from 'react';

export default function TextArea({
  onChange, value, id, placeholder, required,
}) {
  return (
    <textarea
      name={id}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
      className="bg-transparent h-60 text-textMedium font-medium tracking-wider ring-1 ring-primary px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 placeholder:opacity-40 flex items-center"
    />
  );
}
