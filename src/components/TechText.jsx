import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function TechText({ text, fontSize = 120 }) {
  const uid = useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const holeRef = useRef(null);
  const spotRef = useRef(null);
  const [box, setBox] = useState({ x: 0, y: 0, w: 1000, h: 150 });

  useEffect(() => {
    function measure() {
      if (!textRef.current) return;
      const b = textRef.current.getBBox();
      setBox({ x: b.x - 4, y: b.y - 4, w: b.width + 8, h: b.height + 8 });
    }
    measure();
    document.fonts?.ready.then(measure);
  }, [text, fontSize]);

  function handleMove(event) {
    if (reduceMotion) return;
    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const p = point.matrixTransform(svg.getScreenCTM().inverse());
    [holeRef, spotRef].forEach((ref) => {
      ref.current.setAttribute("cx", p.x);
      ref.current.setAttribute("cy", p.y);
      ref.current.style.opacity = 1;
    });
  }

  function handleLeave() {
    [holeRef, spotRef].forEach((ref) => {
      ref.current.style.opacity = 0;
    });
  }

  const radius = box.h * 0.9;
  const textStyle = { fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" };

  return (
    <>
      <span className="sr-only">{text}</span>
      <svg ref={svgRef} aria-hidden="true" viewBox={`${box.x} ${box.y} ${box.w} ${box.h}`} className="block w-full h-auto overflow-visible" onPointerMove={handleMove} onPointerLeave={handleLeave}>
        <defs>
          <linearGradient id={`fill-${uid}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.6" stopColor="#ffffff" />
            <stop offset="1" style={{ stopColor: "var(--color-accent)" }} />
          </linearGradient>
          <radialGradient id={`spot-${uid}`}>
            <stop offset="0" stopColor="white" />
            <stop offset="0.55" stopColor="white" />
            <stop offset="1" stopColor="black" />
          </radialGradient>
          <radialGradient id={`hole-${uid}`}>
            <stop offset="0" stopColor="black" />
            <stop offset="0.55" stopColor="black" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
          <mask id={`spotmask-${uid}`} maskUnits="userSpaceOnUse" x={box.x} y={box.y} width={box.w} height={box.h}>
            <circle ref={spotRef} r={radius} fill={`url(#spot-${uid})`} style={{ opacity: 0, transition: "opacity 0.3s" }} />
          </mask>
          <mask id={`holemask-${uid}`} maskUnits="userSpaceOnUse" x={box.x} y={box.y} width={box.w} height={box.h}>
            <rect x={box.x} y={box.y} width={box.w} height={box.h} fill="white" />
            <circle ref={holeRef} r={radius} fill={`url(#hole-${uid})`} style={{ opacity: 0, transition: "opacity 0.3s" }} />
          </mask>
        </defs>

        <text ref={textRef} x="0" y={fontSize} fontSize={fontSize} fill={`url(#fill-${uid})`} mask={`url(#holemask-${uid})`} style={textStyle}>{text}</text>
        <text x="0" y={fontSize} fontSize={fontSize} fill="none" strokeWidth="1.5" strokeDasharray="7 6" mask={`url(#spotmask-${uid})`} className="tech-dash" style={{ ...textStyle, stroke: "var(--color-accent)" }}>{text}</text>
      </svg>
    </>
  );
}

export default TechText;