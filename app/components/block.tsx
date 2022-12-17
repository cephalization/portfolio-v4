import React from "react";

type BlockProps = React.PropsWithChildren<{
  header?: string;
  main?: boolean;
}>;

export const Block = ({ header, main, children }: BlockProps) => {
  return (
    <section className="relative pb-6 pr-4 mb-4">
      {header &&
        (main ? (
          <h1 className="text-xl font-bold">{header}</h1>
        ) : (
          <h4 className="text-lg font-medium text-cyan-200">{header}</h4>
        ))}
      {children}
    </section>
  );
};
