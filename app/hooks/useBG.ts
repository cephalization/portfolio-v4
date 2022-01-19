import { useEffect, useState } from "react";

const FPS = 60;
const DELTA = 0.0008;
const MAGNITUDE = 180;
const SCALAR = 180;

export const themes = {
  blue: `hsl(240deg 59% 14%) 0%,
  hsl(219deg 40% 17%) 38%,
  hsl(206deg 36% 21%) 69%,
  hsl(211deg 37% 28%) 100%
  `,
  yellow: `hsl(13deg 59% 14%) 0%,
  hsl(43deg 42% 16%) 38%,
  hsl(72deg 36% 21%) 69%,
  hsl(82deg 37% 28%) 100%
  `,
  sunrise: `
  hsl(12deg 9% 33%) 0%,
  hsl(255deg 8% 29%) 54%,
  hsl(222deg 27% 25%) 100%
`,
} as const;

type ThemeValue = typeof themes[keyof typeof themes];

const makeBG = (
  rotation: number = 110,
  theme: ThemeValue = themes.sunrise
): string => {
  return `linear-gradient(
    ${Math.ceil(rotation * SCALAR + MAGNITUDE) % 360}deg,
    ${theme}
  )`;
};

export const useBG = (theme?: ThemeValue): string => {
  const [rotation, setRotation] = useState(110);

  useEffect(() => {
    const interval = setInterval(
      () =>
        requestAnimationFrame(() => {
          setRotation((r) => r + DELTA);
        }),
      1000 / FPS
    );

    return () => clearInterval(interval);
  }, []);

  return makeBG(rotation, theme);
};
