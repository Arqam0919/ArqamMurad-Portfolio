import { useEffect } from "react";

const Effects = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursorOrb");
    const moveCursor = (event) => {
      cursor?.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor?.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return <div className="cursorOrb" aria-hidden="true"><span /></div>;
};

export default Effects;
