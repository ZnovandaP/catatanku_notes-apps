import * as React from 'react';

export default function Label({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
    >
      {children}
    </label>
  );
}
