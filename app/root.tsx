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
import { useBG } from "./hooks/useBG";

export const meta: MetaFunction = () => {
  return { title: "Anthony Powell" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ];
};

const FixedBG = () => {
  const backgroundImage = useBG();

  return (
    <div
      className="fixed h-screen w-screen top-0 left-0 -z-10"
      style={{ backgroundImage }}
    />
  );
};

export default function App() {
  return (
    <html lang="en" style={{ fontSize: 20, backgroundColor: "#1a263d" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen">
        <FixedBG />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
