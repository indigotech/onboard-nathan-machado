import React from 'react';

export type SpanProps = React.BaseHTMLAttributes<HTMLSpanElement>

export function Span({children, ...rest}: SpanProps) {
  return (
    <span {...rest}>{children}</span>
  );
};
