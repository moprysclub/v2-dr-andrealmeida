import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, X } from "lucide-react";
import { useChatwootStore } from "@/lib/chatwoot-store";

export const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { chatOpen, chatLoaded, toggleChat } = useChatwootStore();
  const whatsappLink = "https://api.whatsapp.com/send?phone=5521973564465&text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
    >
      <div className="container mx-auto max-w-[900px] bg-background/60 backdrop-blur-xl shadow-elevated rounded-2xl px-4 py-3 border border-border/50">
        <div className="flex gap-2 justify-center">
          {/* Botão WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[200px]"
          >
            <Button variant="outline" className="w-full transition-smooth">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>

          {/* Botão Agendar Consulta (Chatwoot) */}
          <button
            onClick={toggleChat}
            className="flex-1 max-w-[200px]"
          >
            <Button className="w-full transition-smooth">
              <div className="flex items-center gap-2">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{chatOpen && isDesktop ? "Fechar Chat" : "Agendar"}</span>
                {/* Bolinha verde */}
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
};
