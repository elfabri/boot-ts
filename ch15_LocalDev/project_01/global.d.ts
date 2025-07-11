declare global {
    interface Window {
        supportAI: SupportAI;
    }
}

interface SupportAI {
    enableAutoReply: () => void;
}

export {}
