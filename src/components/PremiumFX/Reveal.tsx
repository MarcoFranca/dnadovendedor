"use client";
import React, { useEffect, useRef, useState } from "react";

export const Reveal: React.FC<React.PropsWithChildren<{delay?:number}>> = ({ children, delay=0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = ref.current!;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setShow(true);
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 will-change-transform
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            {children}
        </div>
    );
};
