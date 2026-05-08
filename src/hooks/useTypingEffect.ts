import { useEffect, useState } from "react";

const TYPE_SPEED = 90;
const ERASE_SPEED = 45;
const PAUSE_BEFORE_ERASE = 1800;
const PAUSE_BEFORE_NEXT = 400;

export const useTypingEffect = (roles: string[]) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!roles.length) return;
    let roleIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIndex];
      if (!isErasing) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          isErasing = true;
          timer = setTimeout(tick, PAUSE_BEFORE_ERASE);
          return;
        }
        timer = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          isErasing = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timer = setTimeout(tick, PAUSE_BEFORE_NEXT);
          return;
        }
        timer = setTimeout(tick, ERASE_SPEED);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [roles]);

  return text;
};

