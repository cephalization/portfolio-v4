import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import type { MetaFunction, LinksFunction } from "remix";

import styles from "./tailwind.css";
import { FixedBG } from "./components/fixedBG";
import { useState } from "react";
import { ColorSwatch } from "./components/colorSwatch";

export const meta: MetaFunction = () => {
  return { title: "Anthony Powell" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ];
};

export default function App() {
  const [onBGClick, registerClick] = useState<() => void>(() => {});

  return (
    <html lang="en" style={{ fontSize: 20, backgroundColor: "#1a263d" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen">
        <FixedBG registerClick={registerClick} />
        <ColorSwatch onClick={onBGClick} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
