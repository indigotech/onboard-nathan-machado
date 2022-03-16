import React from 'react';
import Loading from 'react-loading';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  titles: string[];
  isLoading?: boolean;
}

export function Table({ isLoading, titles, children }: TableProps) {
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
        <tbody>{isLoading ? <Loading type='bars' color='#000' height={20} width={20} /> : children}</tbody>
      </table>
    </div>
  );
}
