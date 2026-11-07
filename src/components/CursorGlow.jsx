import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    function handleMove(event) {
      x.set(event.clientX - 300);
      y.set(event.clientY - 300);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return <motion.div aria-hidden="true" style={{ x: springX, y: springY, background: "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 65%)" }} className="pointer-events-none fixed top-0 left-0 z-30 h-[600px] w-[600px] rounded-full" />;
}

export default CursorGlow;