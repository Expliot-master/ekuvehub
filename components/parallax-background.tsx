"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

interface ColorScheme {
  primary: { r: number; g: number; b: number };
  secondary: { r: number; g: number; b: number };
  glow: { r: number; g: number; b: number };
}

const redScheme: ColorScheme = {
  primary: { r: 231, g: 76, b: 60 },
  secondary: { r: 180, g: 50, b: 40 },
  glow: { r: 255, g: 100, b: 80 },
};

const yellowScheme: ColorScheme = {
  primary: { r: 234, g: 179, b: 8 },
  secondary: { r: 202, g: 138, b: 4 },
  glow: { r: 253, g: 224, b: 71 },
};

export function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const currentColorRef = useRef<ColorScheme>({ ...redScheme });
  const targetColorRef = useRef<ColorScheme>({ ...redScheme });

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const nodeCount = Math.floor((width * height) / 15000);
    
    for (let i = 0; i < Math.min(nodeCount, 150); i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseX: x,
        baseY: y,
      });
    }
    return nodes;
  }, []);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const lerpColor = (current: ColorScheme, target: ColorScheme, factor: number): ColorScheme => {
    return {
      primary: {
        r: lerp(current.primary.r, target.primary.r, factor),
        g: lerp(current.primary.g, target.primary.g, factor),
        b: lerp(current.primary.b, target.primary.b, factor),
      },
      secondary: {
        r: lerp(current.secondary.r, target.secondary.r, factor),
        g: lerp(current.secondary.g, target.secondary.g, factor),
        b: lerp(current.secondary.b, target.secondary.b, factor),
      },
      glow: {
        r: lerp(current.glow.r, target.glow.r, factor),
        g: lerp(current.glow.g, target.glow.g, factor),
        b: lerp(current.glow.b, target.glow.b, factor),
      },
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodesRef.current = initNodes(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      const premiumSection = document.getElementById("premium");
      const keySystemSection = document.getElementById("key-system");
      
      if (premiumSection && keySystemSection) {
        const premiumRect = premiumSection.getBoundingClientRect();
        const keySystemRect = keySystemSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if premium section is in view (with some buffer)
        const premiumInView = premiumRect.top < viewportHeight * 0.6 && premiumRect.bottom > viewportHeight * 0.3;
        // Check if key system section has started
        const keySystemStarted = keySystemRect.top < viewportHeight * 0.6;
        
        if (premiumInView && !keySystemStarted) {
          targetColorRef.current = yellowScheme;
        } else {
          targetColorRef.current = redScheme;
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      if (!ctx || !canvas) return;
      
      timeRef.current += 0.002;
      
      // Smoothly interpolate colors
      currentColorRef.current = lerpColor(currentColorRef.current, targetColorRef.current, 0.02);
      const colors = currentColorRef.current;
      
      // Clear with fade effect for trails
      ctx.fillStyle = "rgba(10, 10, 15, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const connectionDistance = 150;
      const mouseInfluenceRadius = 200;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Floating animation
        const floatX = Math.sin(timeRef.current + i * 0.5) * 30;
        const floatY = Math.cos(timeRef.current * 0.8 + i * 0.3) * 30;
        
        // Mouse influence
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let mouseForceX = 0;
        let mouseForceY = 0;
        
        if (dist < mouseInfluenceRadius && dist > 0) {
          const force = (mouseInfluenceRadius - dist) / mouseInfluenceRadius;
          mouseForceX = (dx / dist) * force * 50;
          mouseForceY = (dy / dist) * force * 50;
        }

        // Update position with smooth interpolation
        const targetX = node.baseX + floatX + mouseForceX;
        const targetY = node.baseY + floatY + mouseForceY;
        
        node.x += (targetX - node.x) * 0.05;
        node.y += (targetY - node.y) * 0.05;

        // Keep nodes in bounds with wrapping
        if (node.baseX < -50) node.baseX = canvas.width + 50;
        if (node.baseX > canvas.width + 50) node.baseX = -50;
        if (node.baseY < -50) node.baseY = canvas.height + 50;
        if (node.baseY > canvas.height + 50) node.baseY = -50;

        // Slow drift
        node.baseX += node.vx;
        node.baseY += node.vy;

        // Draw node with glow - using dynamic colors
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4);
        gradient.addColorStop(0, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.9)`);
        gradient.addColorStop(0.5, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0)`);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner bright dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.glow.r}, ${colors.glow.g}, ${colors.glow.b}, 1)`;
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.6;
            
            // Create gradient line with dynamic colors
            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, ${opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      }

      // Mouse connection lines
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluenceRadius) {
          const opacity = (1 - dist / mouseInfluenceRadius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${colors.glow.r}, ${colors.glow.g}, ${colors.glow.b}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw mouse glow
      const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
      mouseGlow.addColorStop(0, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.15)`);
      mouseGlow.addColorStop(0.5, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0.05)`);
      mouseGlow.addColorStop(1, `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, 0)`);
      
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
      ctx.fillStyle = mouseGlow;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initNodes]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
