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
  forest: `hsl(270deg 100% 7%) 0%,
  hsl(212deg 100% 13%) 15%,
  hsl(204deg 100% 19%) 29%,
  hsl(197deg 100% 22%) 42%,
  hsl(187deg 100% 24%) 54%,
  hsl(174deg 100% 27%) 67%,
  hsl(154deg 54% 41%) 83%,
  hsl(105deg 36% 55%) 100%`,
  mac: `hsl(240deg 100% 20%) 0%,
  hsl(289deg 100% 21%) 30%,
  hsl(315deg 100% 27%) 44%,
  hsl(329deg 100% 36%) 54%,
  hsl(337deg 100% 43%) 63%,
  hsl(357deg 91% 59%) 70%,
  hsl(17deg 100% 59%) 77%,
  hsl(34deg 100% 53%) 84%,
  hsl(45deg 100% 50%) 91%,
  hsl(55deg 100% 50%) 100%`,
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
  const [rotation, setRotation] = useState(2);

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
