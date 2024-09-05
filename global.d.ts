interface Window {
    MauticSDKLoaded?: boolean;
    MauticSDK?: {
        onLoad: () => void;
    };
    MauticDomain?: string;
    MauticLang?: {
        submittingMessage: string;
    };
}