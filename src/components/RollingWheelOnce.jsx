import React, { useEffect, useState } from "react";
export default function RollingWheelOnce() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200); // убрать элемент после анимации
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed left-[-80px] bottom-8 z-[60]">
      <div className="wheel-roll" aria-hidden="true">
        <div className="wheel-core" />
      </div>
    </div>
  );
}
