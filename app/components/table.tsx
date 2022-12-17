import React from "react";

type TableProps = {
  rows: [string, string][];
};

export const Table = ({ rows }: TableProps) => {
  return (
    <table className="table-auto w-96 mt-2">
      <tbody>
        {rows.map(([h, t]) => (
          <tr key={h}>
            <td>{h}</td>
            <td>{t}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
