import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useChatwootStore } from "@/lib/chatwoot-store";
import { MessageCirclePlus } from "lucide-react"; // 👈 novo ícone

export const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { chatOpen, toggleChat } = useChatwootStore();

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
    <footer
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 ml-[-12px] sm:ml-0 z-40 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
    >
      <div className="bg-[#25D366] rounded-full px-6 py-2 shadow-[4px_6px_8px_rgba(0,0,0,0.8)] border-[0.5px] border-black hover:scale-105 transform transition-transform duration-200 ease-in-out">
        <Button
          onClick={toggleChat}
          size="lg"
          variant="whatsapp"
          className="bg-transparent px-6 py-2 font-semibold text-white text-base w-full"
        >
          <div className="flex items-center gap-2">
            {chatOpen && isDesktop ? "Fechar Chat" : "Agendar Consulta"}
            {/* Novo ícone da lucide-react */}
            <MessageCirclePlus className="w-6 h-6 ml-1" />
            <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
          </div>
        </Button>
      </div>
    </footer>
  );
};
