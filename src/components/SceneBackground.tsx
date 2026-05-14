import { useEffect, useRef, useCallback } from "react";

export function SceneBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Use a stable callback for particle creation
  const createParticle = useCallback((container: HTMLDivElement) => {
    const particle = document.createElement("div");
    const size = Math.random() * 1.5 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 5;

    particle.className = "scene-particle";
    particle.style.cssText = `width:${size}px;height:${size}px;left:${x}%;top:${y}%;animation:float ${duration}s linear ${delay}s infinite;`;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      if (container.contains(particle)) {
        container.removeChild(particle);
      }
    }, (duration + delay) * 1000);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only run particle generation when visible using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start generating particles
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              // Cap at 25 particles (reduced from 40) for better perf
              if (container.querySelectorAll('.scene-particle').length < 25) {
                createParticle(container);
              }
            }, 1200); // Slower interval (1200ms vs 800ms)
          }
        } else {
          // Pause particle generation when off-screen
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [createParticle]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* Deep Atmosphere Gradients — reduced blur radius + GPU layer isolation */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-950/20 blur-[80px] opacity-60" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-950/15 blur-[80px] opacity-40" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-blue-950/10 blur-[90px] opacity-30" style={{ transform: 'translateZ(0)' }} />
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,18,0.4)_100%)]" />

      {/* Grid overlay - more subtle */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <style>{`
        .scene-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.1);
          filter: blur(0.5px);
          pointer-events: none;
          will-change: transform, opacity;
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
