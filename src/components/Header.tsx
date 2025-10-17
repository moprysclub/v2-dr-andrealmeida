"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatwootStore } from "@/lib/chatwoot-store";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const { chatOpen, chatLoaded, toggleChat } = useChatwootStore();

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

    useEffect(() => {
  const handleWidgetToggle = (e: any) => {
    const isOpen = e?.detail?.status === "open";
    useChatwootStore.setState({ chatOpen: isOpen });
  };

  window.addEventListener("chatwoot:widget:toggle", handleWidgetToggle);
  return () => {
    window.removeEventListener("chatwoot:widget:toggle", handleWidgetToggle);
  };
}, []);


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
                }`}
        >
            <div className="container mx-auto max-w-[900px] bg-background/60 backdrop-blur-xl shadow-elevated rounded-2xl px-6 border border-border/50">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-smooth pl-2"
                    >
                        Dr. Andre Almeida
                    </button>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("servicos")}
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Serviços
                        </button>
                        <button
                            onClick={() => scrollToSection("contato")}
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Contato
                        </button>

                        {/* Botão Agendar Consulta (Chatwoot) */}
                        <Button
                            size="sm"
                            onClick={toggleChat}
                            className="transition-smooth"
                        >
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{chatOpen ? "Fechar Chat" : "Agendar Consulta"}</span>
                                {!chatOpen && (
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                )}
                            </div>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4 animate-slide-down">
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-left py-2 text-foreground/80 hover:text-primary transition-smooth"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("servicos")}
                                className="text-left py-2 text-foreground/80 hover:text-primary transition-smooth"
                            >
                                Serviços
                            </button>
                            <button
                                onClick={() => scrollToSection("contato")}
                                className="text-left py-2 text-foreground/80 hover:text-primary transition-smooth"
                            >
                                Contato
                            </button>

                            {/* Botão Agendar Consulta (Chatwoot) - Mobile */}
                            <Button
                                onClick={() => {
                                    toggleChat();
                                    setIsMenuOpen(false); // fecha menu ao clicar
                                }}
                                className="w-full"
                            >
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{chatOpen && isDesktop ? "Fechar Chat" : "Agendar Consulta"}</span>
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                </div>
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};
