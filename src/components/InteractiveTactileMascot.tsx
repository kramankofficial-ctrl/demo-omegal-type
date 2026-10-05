import React, { useState, useEffect, useRef, useCallback } from 'react';

export const InteractiveTactileMascot: React.FC = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  // Pupil offsets from eye center
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // Animation frame and targeting refs for smooth zero-jitter performance
  const targetLeftRef = useRef({ x: 0, y: 0 });
  const targetRightRef = useRef({ x: 0, y: 0 });
  const currentLeftRef = useRef({ x: 0, y: 0 });
  const currentRightRef = useRef({ x: 0, y: 0 });
  const lastInteractionRef = useRef(Date.now());
  const rafIdRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
      if (e.matches) {
        setLeftPupil({ x: 0, y: 0 });
        setRightPupil({ x: 0, y: 0 });
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Natural occasional blink cycle
  useEffect(() => {
    if (prefersReducedMotionRef.current) return;

    let blinkTimer: number;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 130);

      const nextBlink = 3400 + Math.random() * 4200;
      blinkTimer = window.setTimeout(triggerBlink, nextBlink);
    };

    blinkTimer = window.setTimeout(triggerBlink, 3000);
    return () => clearTimeout(blinkTimer);
  }, []);

  // Idle gaze sequence for mobile/touch or when cursor is stationary
  const runIdleGaze = useCallback(() => {
    if (prefersReducedMotionRef.current) return;

    // Looking waypoints matching the character's curious personality
    const gazeWaypoints = [
      { lx: 4, ly: -4, rx: 4, ry: -4 },   // Glance up-right like the reference
      { lx: -5, ly: 1, rx: -5, ry: 1 },   // Glance left toward nav links
      { lx: 0, ly: 0, rx: 0, ry: 0 },     // Calm center
      { lx: 5, ly: 2, rx: 5, ry: 2 },     // Glance right toward invite text
      { lx: 1, ly: -3, rx: 1, ry: -3 },   // Subtle upper gaze
      { lx: 0, ly: 0, rx: 0, ry: 0 }      // Center
    ];

    let wpIndex = 0;
    const interval = window.setInterval(() => {
      const now = Date.now();
      // If idle for more than 1.4s, execute idle gaze movement
      if (now - lastInteractionRef.current > 1400) {
        wpIndex = (wpIndex + 1) % gazeWaypoints.length;
        const target = gazeWaypoints[wpIndex];
        targetLeftRef.current = { x: target.lx, y: target.ly };
        targetRightRef.current = { x: target.rx, y: target.ry };
      }
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = runIdleGaze();
    return () => cleanup?.();
  }, [runIdleGaze]);

  // Smooth easing loop using requestAnimationFrame (lerp factor: 0.12)
  useEffect(() => {
    const loop = () => {
      if (!prefersReducedMotionRef.current) {
        const ease = 0.12;

        currentLeftRef.current.x += (targetLeftRef.current.x - currentLeftRef.current.x) * ease;
        currentLeftRef.current.y += (targetLeftRef.current.y - currentLeftRef.current.y) * ease;

        currentRightRef.current.x += (targetRightRef.current.x - currentRightRef.current.x) * ease;
        currentRightRef.current.y += (targetRightRef.current.y - currentRightRef.current.y) * ease;

        setLeftPupil({
          x: Math.round(currentLeftRef.current.x * 100) / 100,
          y: Math.round(currentLeftRef.current.y * 100) / 100
        });

        setRightPupil({
          x: Math.round(currentRightRef.current.x * 100) / 100,
          y: Math.round(currentRightRef.current.y * 100) / 100
        });
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Shared coordinate calculation for mouse or touch points
  const updateTargetCoordinates = (clientX: number, clientY: number) => {
    if (prefersReducedMotionRef.current) return;
    lastInteractionRef.current = Date.now();

    const computePupilOffset = (eyeElem: HTMLDivElement | null) => {
      if (!eyeElem) return { x: 0, y: 0 };
      const rect = eyeElem.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const dx = clientX - eyeX;
      const dy = clientY - eyeY;
      const angle = Math.atan2(dy, dx);
      const dist = Math.hypot(dx, dy);

      // Maximum travel distance within eye white (pixels)
      const maxRadius = Math.min(rect.width, rect.height) * 0.28;

      // Smooth non-linear curve
      const normalized = Math.min(1, dist / 420);
      const actualRadius = normalized * maxRadius;

      return {
        x: Math.cos(angle) * actualRadius,
        y: Math.sin(angle) * actualRadius
      };
    };

    targetLeftRef.current = computePupilOffset(leftEyeRef.current);
    targetRightRef.current = computePupilOffset(rightEyeRef.current);
  };

  // Global mousemove tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateTargetCoordinates(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateTargetCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-end justify-center pointer-events-none select-none">
      
      {/* The Tactile Fuzzy Knitted Mascot on Transparent PNG */}
      <img
        src="/src/assets/images/mascot_transparent.png"
        alt="Datevra tactile fuzzy character"
        className="w-full h-full object-contain object-bottom pointer-events-none select-none max-h-full"
      />

      {/* ============================================================== */}
      {/* INTERACTIVE EYE OVERLAY (Exact coordinates: 43.35% & 57.90%)   */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* LEFT EYE SCLERA */}
        <div
          ref={leftEyeRef}
          className={`absolute rounded-full transition-transform duration-100 ease-out flex items-center justify-center ${
            isBlinking ? 'scale-y-[0.08]' : 'scale-y-100'
          }`}
          style={{
            top: '25.0%',
            left: '39.8%',
            width: '8.4%',
            height: '13.2%',
            background: 'radial-gradient(circle at 40% 32%, #FFFFFF 0%, #FAFAFC 60%, #E2DEEB 96%)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(110,95,145,0.22)',
            transformOrigin: 'center center'
          }}
        >
          {/* LEFT PUPIL */}
          <div
            className="absolute rounded-full pointer-events-none transition-transform duration-75 ease-out"
            style={{
              width: '64%',
              height: '64%',
              background: 'radial-gradient(circle at 35% 30%, #1F1C28 0%, #0A0812 100%)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
              transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)`
            }}
          >
            {/* Specular Catchlight */}
            <div 
              className="absolute w-[28%] h-[28%] rounded-full bg-white/95"
              style={{ top: '18%', left: '20%' }}
            />
            <div 
              className="absolute w-[12%] h-[12%] rounded-full bg-white/70"
              style={{ bottom: '22%', right: '22%' }}
            />
          </div>
        </div>

        {/* RIGHT EYE SCLERA */}
        <div
          ref={rightEyeRef}
          className={`absolute rounded-full transition-transform duration-100 ease-out flex items-center justify-center ${
            isBlinking ? 'scale-y-[0.08]' : 'scale-y-100'
          }`}
          style={{
            top: '25.4%',
            left: '53.8%',
            width: '8.4%',
            height: '13.2%',
            background: 'radial-gradient(circle at 40% 32%, #FFFFFF 0%, #FAFAFC 60%, #E2DEEB 96%)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(110,95,145,0.22)',
            transformOrigin: 'center center'
          }}
        >
          {/* RIGHT PUPIL */}
          <div
            className="absolute rounded-full pointer-events-none transition-transform duration-75 ease-out"
            style={{
              width: '64%',
              height: '64%',
              background: 'radial-gradient(circle at 35% 30%, #1F1C28 0%, #0A0812 100%)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
              transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)`
            }}
          >
            {/* Specular Catchlight */}
            <div 
              className="absolute w-[28%] h-[28%] rounded-full bg-white/95"
              style={{ top: '18%', left: '20%' }}
            />
            <div 
              className="absolute w-[12%] h-[12%] rounded-full bg-white/70"
              style={{ bottom: '22%', right: '22%' }}
            />
          </div>
        </div>

      </div>

    </div>
  );
};
