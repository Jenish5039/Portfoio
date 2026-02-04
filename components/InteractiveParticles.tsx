'use client'
import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    width: number;
    height: number;
    rotation: number;
    rotationSpeed: number;
    color: string;
    alpha: number;
    oscillationOffset: number;
    oscillationSpeed: number;
    waveOffset: number;
}

interface CursorParticle {
    angle: number;
    radius: number;
    baseRadius: number;
    speed: number;
    size: number;
    color: string;
    alpha: number;
    wobbleOffset: number;
    wobbleSpeed: number;
    wobbleAmount: number;
}

export default function InteractiveParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const cursorParticlesRef = useRef<CursorParticle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, isActive: false });
    const smoothMouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);
    const timeRef = useRef(0);

    const colors = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'];

    const initParticles = useCallback((width: number, height: number) => {
        // Background particles - more for ocean flow
        const particles: Particle[] = [];
        const particleCount = Math.floor((width * height) / 4000); // Increased density

        for (let i = 0; i < Math.min(particleCount, 250); i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: -Math.random() * 0.4 - 0.1,
                width: Math.random() * 8 + 3,
                height: Math.random() * 3 + 1.5,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.015,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.45 + 0.4,
                oscillationOffset: Math.random() * Math.PI * 2,
                oscillationSpeed: Math.random() * 0.015 + 0.008,
                waveOffset: Math.random() * Math.PI * 2,
            });
        }
        particlesRef.current = particles;

        // Cursor-following particles
        const cursorParticles: CursorParticle[] = [];
        for (let i = 0; i < 10; i++) {
            cursorParticles.push({
                angle: (Math.PI * 2 * i) / 10,
                radius: 25 + Math.random() * 50,
                baseRadius: 25 + Math.random() * 50,
                speed: 0.015 + Math.random() * 0.025,
                size: 3 + Math.random() * 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 0.5 + Math.random() * 0.5,
                wobbleOffset: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.025 + Math.random() * 0.02,
                wobbleAmount: 8 + Math.random() * 12,
            });
        }
        cursorParticlesRef.current = cursorParticles;
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        timeRef.current += 0.016;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const mouse = mouseRef.current;
        const smoothMouse = smoothMouseRef.current;

        // Smooth mouse following
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08;

        // Ocean wave parameters
        const waveTime = timeRef.current * 0.5;

        // Draw background particles with ocean flow
        particlesRef.current.forEach((particle, index) => {
            // Ocean wave motion - flowing curves
            const waveX = Math.sin(waveTime + particle.waveOffset + particle.y * 0.003) * 1.5;
            const waveY = Math.cos(waveTime * 0.7 + particle.waveOffset + particle.x * 0.002) * 0.8;

            // Mouse interaction - gentle push
            if (mouse.isActive) {
                const dx = smoothMouse.x - particle.x;
                const dy = smoothMouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const force = (120 - distance) / 120;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 1.5;
                    particle.vy -= Math.sin(angle) * force * 1.5;
                }
            }

            // Apply ocean flow
            particle.x += waveX * 0.3 + particle.vx;
            particle.y += waveY * 0.2 + particle.vy;
            particle.rotation += particle.rotationSpeed + waveX * 0.01;

            // Natural oscillation
            const oscillation = Math.sin(timeRef.current * particle.oscillationSpeed + particle.oscillationOffset);
            particle.x += oscillation * 0.15;

            // Friction and drift
            particle.vx *= 0.97;
            particle.vy *= 0.995;
            particle.rotationSpeed *= 0.99;
            particle.vy -= 0.006; // Gentle upward drift
            particle.vy = Math.max(particle.vy, -0.8);

            // Reset when out of bounds
            if (particle.y < -50) {
                particle.y = canvas.height + 50;
                particle.x = Math.random() * canvas.width;
                particle.vy = -Math.random() * 0.4 - 0.1;
            }
            if (particle.x < -50) particle.x = canvas.width + 50;
            if (particle.x > canvas.width + 50) particle.x = -50;

            // Draw pill-shaped particle
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.beginPath();
            ctx.roundRect(
                -particle.width / 2,
                -particle.height / 2,
                particle.width,
                particle.height,
                particle.height / 2
            );
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.alpha;
            ctx.fill();
            ctx.restore();
        });

        // Draw cursor-orbiting particles
        if (mouse.isActive || (smoothMouse.x !== 0 && smoothMouse.y !== 0)) {
            cursorParticlesRef.current.forEach((cp) => {
                // Update angle for circular motion
                cp.angle += cp.speed;

                // Wobbling radius with ocean-like feel
                const wobble = Math.sin(timeRef.current * cp.wobbleSpeed + cp.wobbleOffset) * cp.wobbleAmount;
                const secondaryWobble = Math.cos(timeRef.current * cp.wobbleSpeed * 0.7 + cp.wobbleOffset) * cp.wobbleAmount * 0.3;
                cp.radius = cp.baseRadius + wobble + secondaryWobble;

                // Calculate position around cursor
                const x = smoothMouse.x + Math.cos(cp.angle) * cp.radius;
                const y = smoothMouse.y + Math.sin(cp.angle) * cp.radius;

                // Draw circular particle
                ctx.save();
                ctx.beginPath();
                ctx.arc(x, y, cp.size / 2, 0, Math.PI * 2);
                ctx.fillStyle = cp.color;
                ctx.globalAlpha = cp.alpha * (mouse.isActive ? 1 : 0.25);
                ctx.fill();
                ctx.restore();
            });
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
            initParticles(canvas.width, canvas.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY + window.scrollY;
            mouseRef.current.isActive = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.isActive = false;
        };

        const handleScroll = () => {
            const newHeight = document.documentElement.scrollHeight;
            if (canvas.height !== newHeight) {
                canvas.height = newHeight;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current.x = e.touches[0].clientX;
                mouseRef.current.y = e.touches[0].clientY + window.scrollY;
                mouseRef.current.isActive = true;
            }
        };

        const handleTouchEnd = () => {
            mouseRef.current.isActive = false;
        };

        setTimeout(handleResize, 100);

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initParticles, animate]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
                zIndex: 1,
                background: 'transparent',
            }}
        />
    );
}
