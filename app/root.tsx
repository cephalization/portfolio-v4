import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "./tailwind.css";
import { FixedBG } from "./components/fixedBG";
import { useState } from "react";
import { ColorSwatch } from "./components/colorSwatch";

export const meta: MetaFunction = () => {
  return { title: "Anthony Powell" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2322384e%22></rect><path fill=%22%23fff%22 d=%22M65.89 74.61L61.84 62.64L37.72 62.64Q37.09 64.44 36.37 66.56Q35.65 68.67 34.97 70.70Q34.30 72.72 33.67 74.48Q33.04 76.23 32.68 77.41L32.68 77.41Q31.42 77.94 29.71 77.94L29.71 77.94Q28.27 77.94 27.14 77.18Q26.02 76.41 26.02 74.70L26.02 74.70Q26.02 73.89 26.29 73.04Q26.56 72.18 26.92 71.19L26.92 71.19Q28.27 67.41 30.38 61.47Q32.50 55.53 34.97 48.83Q37.45 42.12 40.01 35.33Q42.58 28.53 44.73 23.13L44.73 23.13Q45.46 22.77 46.90 22.41Q48.34 22.05 49.87 22.05L49.87 22.05Q51.67 22.05 53.33 22.59Q55.00 23.13 55.45 24.39L55.45 24.39Q57.61 29.61 60.08 36.32Q62.56 43.02 65.08 50.04Q67.59 57.06 69.89 63.86Q72.19 70.66 73.98 76.14L73.98 76.14Q73.27 76.95 72.28 77.45Q71.28 77.94 70.03 77.94L70.03 77.94Q68.31 77.94 67.42 77.18Q66.52 76.41 65.89 74.61L65.89 74.61ZM50.14 28.17L49.78 28.17Q48.79 30.87 47.53 34.34Q46.27 37.80 44.92 41.58Q43.57 45.36 42.22 49.23Q40.87 53.10 39.70 56.61L39.70 56.61L59.95 56.61Q58.60 52.56 57.16 48.47Q55.72 44.37 54.41 40.59Q53.11 36.81 51.98 33.62Q50.86 30.42 50.14 28.17L50.14 28.17Z%22></path></svg>",
    },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ];
};

export default function App() {
  const [onBGClick, registerClick] = useState<() => void>(() => {});

  return (
    <html lang="en" style={{ fontSize: 18, backgroundColor: "#1a263d" }}>
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
