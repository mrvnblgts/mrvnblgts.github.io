import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const dots = [];
    const spacing = 40;
    const cols = Math.ceil(canvas.width / spacing) + 1;
    const rows = Math.ceil(canvas.height / spacing) + 1;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        dots.push({
          x: x * spacing,
          y: y * spacing,
          baseX: x * spacing,
          baseY: y * spacing,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.baseX - (canvas.width / 2);
        const dy = dot.baseY - (canvas.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        dot.x = dot.baseX + Math.sin(dist * 0.001 + performance.now() * 0.0001) * 0.5;
        dot.y = dot.baseY + Math.cos(dist * 0.001 + performance.now() * 0.0001) * 0.5;

        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }}
    />
  );
}
