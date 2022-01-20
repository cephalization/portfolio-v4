import { useEffect, useState } from "react";

const FPS = 60;
const DELTA = 0.001;
const MAGNITUDE = 90;
const SCALAR = 180;
const MOD = 180;

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
  underwater: `hsl(270deg 100% 7%) 0%,
  hsl(255deg 85% 12%) 9%,
  hsl(240deg 72% 17%) 18%,
  hsl(225deg 61% 23%) 27%,
  hsl(210deg 51% 30%) 36%,
  hsl(194deg 42% 37%) 45%,
  hsl(179deg 34% 45%) 55%,
  hsl(164deg 32% 54%) 64%,
  hsl(149deg 36% 63%) 73%,
  hsl(134deg 42% 73%) 82%,
  hsl(119deg 52% 84%) 91%,
  hsl(104deg 100% 95%) 100%`,
  lava: `hsl(315deg 73% 10%) 0%,
  hsl(346deg 83% 31%) 59%,
  hsl(17deg 95% 50%) 75%,
  hsl(34deg 97% 60%) 86%,
  hsl(50deg 100% 70%) 100%`,
} as const;

type ThemeValue = typeof themes[keyof typeof themes];

const makeBG = (
  rotation: number = 0,
  theme: ThemeValue = themes.blue
): string => {
  return `linear-gradient(
    ${Math.floor(Math.sin(rotation + MAGNITUDE) * SCALAR)}deg,
    ${theme}
  )`;
};

export const useBG = (theme?: ThemeValue): string => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReducedMotion) {
      const interval = setInterval(
        () =>
          requestAnimationFrame(() => {
            setRotation((r) => r + DELTA);
          }),
        1000 / FPS
      );
      return () => clearInterval(interval);
    }
  }, []);

  return makeBG(rotation, theme);
};
