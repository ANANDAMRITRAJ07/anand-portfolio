import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform, useReducedMotion } from "framer-motion";

function GlowCard({ children, className = "", tilt = false, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  const ref = useRef(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 70%)`;

  function handleMove(event) {
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    px.set(x / rect.width);
    py.set(y / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduceMotion) {
    return <Tag className={`bg-surface border border-border rounded-2xl ${className}`}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={`group relative overflow-hidden bg-surface border border-border rounded-2xl transition-colors hover:border-accent/60 ${className}`}
    >
      <motion.div aria-hidden="true" style={{ background: glow }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">{children}</div>
    </Tag>
  );
}

export default GlowCard;