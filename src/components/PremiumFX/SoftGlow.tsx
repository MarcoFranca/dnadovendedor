// + adicione esta prop no tipo:
type SoftGlowProps = {
    color?: string;
    opacity?: number;
    size?: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    z?: number;
    className?: string;
    fixed?: boolean; // NOVO
};

export default function SoftGlow({
                                     color = "251,191,36",
                                     opacity = 0.12,
                                     size = 640,
                                     top,
                                     left,
                                     right,
                                     bottom,
                                     z = 1,
                                     className = "",
                                     fixed = false, // NOVO
                                 }: SoftGlowProps) {
    const pos: React.CSSProperties = {
        position: fixed ? "fixed" : "absolute", // <-- aqui
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        zIndex: z,
    };

    return (
        <div
            aria-hidden
            className={`pointer-events-none rounded-full blur-[80px] ${className}`}
            style={{
                ...pos,
                background: `radial-gradient(50% 50% at 50% 50%, rgba(${color}, ${opacity}) 0%, rgba(${color}, 0.00) 70%)`,
                mixBlendMode: "screen",
            }}
        />
    );
}
