"use client";
import { useEffect, useMemo, useState } from "react";

export function useCountdown(targetISO: string) {
    const target = useMemo(() => new Date(targetISO), [targetISO]);
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = Math.max(0, target.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}
