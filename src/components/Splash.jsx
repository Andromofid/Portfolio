import React, { useEffect, useState } from "react";
import Typewriter from "./Typewriter.jsx";

export default function Splash({ onDone }) {
  const [done, setDone] = useState(false);

  // Duration: lines length * type speed + pauses + a small buffer
  useEffect(() => {
    const totalMs =
      2 * 700 +
      ("YOUSSEF EL MOFID".length + "DÉVELOPPEUR WEB FULL-STACK".length) * 60 +
      600;
    const t = setTimeout(() => {
      setDone(true);
      onDone?.();
    }, totalMs);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center 
                  bg-slate-950 text-white transition-opacity duration-500
                  ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="px-6">
        <Typewriter
          lines={["YOUSSEF EL MOFID", "DÉVELOPPEUR WEB FULL-STACK"]}
          speed={60}
          pause={700}
        />
      </div>
    </div>
  );
}
