import React from "react";

type TableProps = {
  rows: [string, string][];
};

export const Table = ({ rows }: TableProps) => {
  return (
    <ul className="w-full max-w-3xl">
      {rows.map(([h, t]) => (
        <li className="flex w-full justify-between items-start" key={h}>
          <div className="pb-1 pl-0 grow basis-10">{h}</div>
          <div className="pb-1 pl-4 font-light grow whitespace-nowrap basis-20">
            {t}
          </div>
        </li>
      ))}
    </ul>
  );
};
