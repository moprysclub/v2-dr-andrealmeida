import { create } from "zustand";

interface ChatwootStore {
  chatOpen: boolean;
  chatLoaded: boolean;
  setChatOpen: (open: boolean) => void;
  setChatLoaded: (loaded: boolean) => void;
  toggleChat: () => void;
}

export const useChatwootStore = create<ChatwootStore>((set, get) => ({
  chatOpen: false,
  chatLoaded: false,
  setChatOpen: (chatOpen) => set({ chatOpen }),
  setChatLoaded: (chatLoaded) => set({ chatLoaded }),
  toggleChat: () => {
    const { chatOpen, chatLoaded } = get();

    if (chatLoaded && window.$chatwoot) {
      const nextState = !chatOpen;
      window.$chatwoot.toggle(nextState ? "open" : "close");
      set({ chatOpen: nextState });
      return;
    }

    // Load Chatwoot SDK
    const script = document.createElement("script");
    script.src = "https://chatwoot.kevins.club/packs/js/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.chatwootSettings = {
        position: "right",
        type: "widget",
        launcherTitle: "",
      };

      window.chatwootSDK.run({
        websiteToken: "w2rNTmUTgHy3wUcFW9GzDCkE",
        baseUrl: "https://chatwoot.kevins.club",
      });

      window.addEventListener("chatwoot:ready", () => {
        window.$chatwoot.toggle("open");
        set({ chatLoaded: true, chatOpen: true });
      });
    };

    document.body.appendChild(script);
  },
}));
