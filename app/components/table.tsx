import React from "react";

type TableProps = {
  rows: [string, string][];
};

export const Table = ({ rows }: TableProps) => {
  return (
    <table className="table-auto w-72 sm:w-96 mt-2">
      <tbody>
        {rows.map(([h, t]) => (
          <tr key={h}>
            <td className="p-1 pl-0">{h}</td>
            <td className="font-light whitespace-nowrap">{t}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
