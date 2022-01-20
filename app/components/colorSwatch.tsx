import { ColorSwatchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

interface ColorSwatchProps {
  onClick: () => void;
}
export const handle = { hydrate: true };

export const ColorSwatch = ({ onClick }: ColorSwatchProps) => {
  const [jsAvailable, setJsAvailable] = useState(false);

  useEffect(() => {
    setJsAvailable(true);
  }, []);

  if (!jsAvailable) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
      fixed z-10 top-2 right-6
      text-slate-300 hover:text-slate-50 focus:text-slate-100
      transition-colors motion-reduce:transition-none outline-none
      hover:animate-pulse focus:animate-pulse motion-reduce:animate-none
      "
    >
      <ColorSwatchIcon className="h-6 w-6" />
    </button>
  );
};
