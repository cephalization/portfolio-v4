import { useEffect, useState } from "react";
import { themes, useBG } from "~/hooks/useBG";

interface FixedBGProps {
  registerClick: (arg0: () => void) => void;
}

export const FixedBG = ({ registerClick }: FixedBGProps) => {
  const [theme, setTheme] = useState(0);
  const backgroundImage = useBG(Object.values(themes)[theme]);

  useEffect(() => {
    registerClick(() => () => {
      setTheme((t) => {
        if (t + 1 > Object.values(themes).length - 1) {
          return 0;
        }

        return t + 1;
      });
    });
  }, []);

  return (
    <div
      className="fixed h-screen w-screen top-0 left-0 -z-10"
      style={{ backgroundImage }}
    />
  );
};
