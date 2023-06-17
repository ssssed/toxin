declare module 'wow.js' {
    class WOW {
        constructor(options?: WOWOptions);
        init(): void;
        reveal(element: HTMLElement): void;
        sync(): void;
        static debug: boolean;
        static defaults: WOWOptions;
    }

    interface WOWOptions {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        callback?: (box: HTMLElement) => void;
        scrollContainer?: HTMLElement | Window;
        resetAnimation?: boolean;
    }

    export default WOW;
}
