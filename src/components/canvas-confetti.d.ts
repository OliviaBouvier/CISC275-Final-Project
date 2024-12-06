declare module 'canvas-confetti' {
    interface ConfettiOrigin {
        x?: number;
        y?: number;
    }

    interface ConfettiOptions {
        particleCount?: number;
        spread?: number;
        startVelocity?: number;
        decay?: number;
        origin?: ConfettiOrigin;
        colors?: string[];
        shapes?: string[];
        gravity?: number;
        scalar?: number;
    }

    type Confetti = (options?: ConfettiOptions) => Promise<void>;

    const confetti: Confetti;
    export default confetti;
}
