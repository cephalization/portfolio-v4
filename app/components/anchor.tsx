import clsx from "clsx";
import { Link, LinkProps } from "remix";

import type { HTMLProps } from "react";

const anchorBaseStyles = `
decoration-slate-600 hover:decoration-slate-200 focus:decoration-slate-200
text-blue-100 underline underline-offset-2 transition-colors outline-none
motion-reduce:transition-none font-bold`;

export function ExternalAnchor({
  className,
  ...props
}: HTMLProps<HTMLAnchorElement>) {
  return <a className={clsx(className, anchorBaseStyles)} {...props} />;
}

export function Anchor({ className, ...props }: LinkProps) {
  return <Link className={clsx(className, anchorBaseStyles)} {...props} />;
}
