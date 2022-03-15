import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  titles: string[];
}

export function Table({ titles, children }: TableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {titles.map((title) => {
              return <th>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
