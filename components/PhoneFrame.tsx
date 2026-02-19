import React, { useEffect, useRef, useState } from 'react';

interface PhoneFrameProps {
    children?: React.ReactNode;
    videoSrc?: string;
    imageSrc?: string;
    className?: string;
    showIsland?: boolean;
    isFull?: boolean;
    cutHeight?: string; // Tailwind max-h class override for truncated mode
    glowColor?: string; // Tailwind color for the background glow
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
    children,
    videoSrc,
    imageSrc,
    className = "",
    showIsland = false,
    isFull = true,
    cutHeight,
    glowColor = "bg-emerald-500/10",
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!videoSrc) return;
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        // Set src once on mount (lazy initial load via preload="none")
        if (!video.src) {
            video.src = videoSrc;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!videoRef.current) return;

                if (entry.isIntersecting) {
                    // Restart from beginning each time user scrolls to it
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => { });
                } else {
                    // Just pause - do NOT remove src, video stays loaded
                    videoRef.current.pause();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [videoSrc]);

    // Truncated mode logic: show top of phone, but ensure video is visible
    // We use a less aggressive max-height and a lighter fade
    const truncateClass = !isFull
        ? (cutHeight || 'max-h-[450px] md:max-h-[550px]')
        : '';

    return (
        <div ref={containerRef} className={`relative mx-auto ${className}`}>
            {/* Smartphone Frame - Minimalist and tightly fit */}
            <div className={`relative rounded-[1.8rem] bg-neutral-900 p-[3px] shadow-2xl border-[2px] border-neutral-800 group overflow-hidden ring-1 ring-white/5 ${truncateClass}`}>
                {/* Screen - Content sticks to top to avoid padding/empty space */}
                <div className="relative w-full bg-neutral-900 rounded-[1.5rem] overflow-hidden flex flex-col items-start justify-start">
                    {videoSrc ? (
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            preload="none"
                            className="w-full h-auto block object-top group-hover:scale-[1.02] transition-transform duration-700"
                        />
                    ) : imageSrc ? (
                        <img
                            src={imageSrc}
                            alt="Phone Content"
                            loading="lazy"
                            className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
                        />
                    ) : children}

                    {/* Dynamic Island (optional) - Moved slightly up to save space */}
                    {showIsland && (
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-[18px] bg-black rounded-full z-30" />
                    )}

                    {/* Bottom Indicator (only if full) */}
                    {isFull && (
                        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white/20 rounded-full z-20" />
                    )}
                </div>

                {/* Bottom fade for truncated mode - Very subtle as requested to keep video visible */}
                {!isFull && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-900/90 to-transparent z-20 pointer-events-none" />
                )}
            </div>

            {/* Decorative glow - More compact */}
            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] ${glowColor} blur-[60px] rounded-full`} />
        </div>
    );
};
