import React, { useEffect, useState } from "react";
import Typewriter from "./Typewriter.jsx";

export default function Splash({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalMs =
      2 * 850 +
      ("YOUSSEF EL MOFID".length + "DEVELOPPEUR FULL-STACK".length) * 55 +
      700;
    const timeout = setTimeout(() => {
      setDone(true);
      onDone?.();
    }, totalMs);

    return () => clearTimeout(timeout);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-stone-950 text-stone-50 transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="px-6 text-center">
        <Typewriter
          lines={["YOUSSEF EL MOFID", "DEVELOPPEUR WEB FULL-STACK"]}
          speed={55}
          pause={850}
        />
      </div>
    </div>
  );
}
