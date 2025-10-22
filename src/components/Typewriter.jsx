import React, { useEffect, useState } from "react";

export default function Typewriter({ lines = [], speed = 60, pause = 700 }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let timer;
    const current = lines[lineIdx] || "";

    if (text.length < current.length) {
      timer = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (lineIdx < lines.length - 1) {
      timer = setTimeout(() => {
        setText("");
        setLineIdx(lineIdx + 1);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [text, lineIdx, lines, speed, pause]);

  return (
    <div className="text-center leading-tight">
      {lines.slice(0, lineIdx).map((l, i) => (
        <div
          key={i}
          className="text-2xl md:text-4xl font-extrabold tracking-wider"
        >
          {l}
        </div>
      ))}
      <div className="text-2xl md:text-4xl font-extrabold tracking-wider">
        {text}
        <span className="caret ml-1">|</span>
      </div>
    </div>
  );
}
