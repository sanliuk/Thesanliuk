import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  let mouseMoved = false;
  const pointer = { x: 0.5 * window.innerWidth, y: 0.5 * window.innerHeight };
  const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  };
  const trail = new Array(params.pointsNumber).fill(null).map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  }));

  const updateMousePosition = (eX, eY) => {
    pointer.x = eX;
    pointer.y = eY;
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const update = (t) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!mouseMoved) {
      pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
      pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#FFFF00"; // Un giallo brillante
    ctx.shadowBlur = 10; // Imposta la sfocatura dell'ombra per creare l'effetto di emissione
    ctx.shadowColor = "#D69201"; // Imposta il colore dell'ombra uguale al colore della linea per l'effetto di luce

    trail.forEach((p, pIdx) => {
      const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
      const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
      p.dx += (prev.x - p.x) * spring;
      p.dy += (prev.y - p.y) * spring;
      p.dx *= params.friction;
      p.dy *= params.friction;
      p.x += p.dx;
      p.y += p.dy;
    });

    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
      const xc = 0.5 * (trail[i].x + trail[i + 1].x);
      const yc = 0.5 * (trail[i].y + trail[i + 1].y);
      ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
      ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
      ctx.stroke();
    }

    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();

    // Ripristina le impostazioni di shadowBlur e shadowColor per il prossimo frame
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";

    requestRef.current = requestAnimationFrame(update);
};


  useEffect(() => {
    window.addEventListener("resize", setupCanvas);
    window.addEventListener("click", (e) => updateMousePosition(e.pageX, e.pageY));
    window.addEventListener("mousemove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("touchmove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    });

    setupCanvas();
    requestRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }} />;
};

export default MouseTrail;
