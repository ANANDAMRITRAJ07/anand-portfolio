import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()[]{}<>/;:,.+-=_";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

function CharGrid({ cellW = 26, cellH = 34, fontSize = 20, highlight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const color = highlight || getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() || "#a78bfa";

    let cols = 0, rows = 0, cells = [], raf = 0, visible = true, lastStep = 0;

    function draw() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${fontSize}px ui-monospace, "JetBrains Mono", Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (cell.blank && cell.glow < 0.05) continue;
        const x = (i % cols) * cellW + cellW / 2;
        const y = Math.floor(i / cols) * cellH + cellH / 2;
        if (cell.glow > 0.05) {
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.3 + 0.7 * cell.glow;
        } else {
          ctx.fillStyle = "#a1a1a1";
          ctx.globalAlpha = 0.22;
        }
        ctx.fillText(cell.ch, x, y);
      }
      ctx.globalAlpha = 1;
    }

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / cellW);
      rows = Math.ceil(h / cellH);
      cells = Array.from({ length: cols * rows }, () => ({ ch: randomChar(), blank: Math.random() < 0.15, glow: Math.random() < 0.01 ? 1 : 0 }));
      draw();
    }

    function tick(time) {
      raf = requestAnimationFrame(tick);
      if (!visible || time - lastStep < 100) return;
      lastStep = time;

      const total = cells.length;
      for (let n = 0; n < total * 0.012; n++) cells[Math.floor(Math.random() * total)].ch = randomChar();
      for (let n = 0; n < total * 0.004; n++) cells[Math.floor(Math.random() * total)].glow = 1;
      for (const cell of cells) cell.glow *= 0.92;
      draw();
    }

    setup();
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibilityObserver.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [cellW, cellH, fontSize, highlight]);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
}

export default CharGrid;