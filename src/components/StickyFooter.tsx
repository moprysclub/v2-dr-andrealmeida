import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useChatwootStore } from "@/lib/chatwoot-store";

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
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 ml-[-12px] sm:ml-0 z-40 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
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
            {/* Ícone WhatsApp oficial (SVG inline) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="3 3 18 18"
              fill="none"
              className="w-10 h-10 ml-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.767c-4.964 0-9 4.155-9 9.26 0 1.798.497 3.524 1.436 5.02l-1.365 3.097a.822.822 0 00.12.86.772.772 0 00.803.259L7.762 20.2A8.807 8.807 0 0012 21.29c4.964 0 9-4.154 9-9.264 0-5.104-4.036-9.259-9-9.259zm0 16.905a7.274 7.274 0 01-3.74-1.04.764.764 0 00-.607-.085l-2.463.698.857-1.946a.84.84 0 00-.076-.81 7.739 7.739 0 01-1.404-4.468c0-4.217 3.332-7.646 7.428-7.646 4.095 0 7.427 3.43 7.427 7.646.005 4.221-3.326 7.65-7.422 7.65z"
                fill="#FFFFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.461 13.415c-.376-.23-.868-.489-1.31-.303-.339.146-.557.691-.781.973-.115.146-.246.168-.42.095-1.279-.523-2.262-1.405-2.966-2.614-.12-.186-.098-.337.044-.512.213-.258.48-.55.54-.9.06-.348-.098-.752-.24-1.062-.18-.393-.377-.961-.765-1.186-.355-.208-.819-.09-1.135.174-.547.456-.809 1.175-.798 1.884 0 .202.028.404.071.596.11.466.322.905.557 1.32.18.316.372.62.58.911a9.04 9.04 0 002.517 2.407 7.46 7.46 0 001.572.77c.618.208 1.164.427 1.83.298.694-.135 1.382-.58 1.66-1.27.082-.203.12-.434.077-.647-.099-.45-.683-.714-1.033-.934z"
                fill="#FFFFFF"
              />
            </svg>
            <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
          </div>
        </Button>
      </div>
    </footer>
  );
};
