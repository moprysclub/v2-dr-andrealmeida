"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useChatwootStore } from "@/lib/chatwoot-store";

export const Hero = () => {
    const { chatOpen, chatLoaded, toggleChat } = useChatwootStore();
    const [isDesktop, setIsDesktop] = useState(false);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-16"
            style={{
                backgroundImage: `url('/dr-andre-almeida-odontologia-angra-dos-reis-rj.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 gradient-hero" />

            <div className="relative z-10 container mx-auto max-w-[900px] px-4 text-left text-white">
                <div className="max-w-2xl">
                    {/* Tagline */}
                    <div className="inline-block animate-fade-in">
                        <p className="text-sm md:text-base font-medium mb-1 text-white/80 uppercase tracking-wide">
                            Dr. Andre Almeida
                        </p>
                        <div className="h-[2px] w-full bg-primary mb-4" />
                    </div>

                    {/* H1 sem delay, renderiza imediatamente */}
                    <div className="fade-in-wrapper">
                        <h1 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}>
                            Sorrisos <span className="gradient-text">mais saudáveis</span> começam aqui.
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p
                        className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Cuidado, tecnologia e precisão para cuidar da sua saúde bucal.
                    </p>

                    {/* CTA */}
                    <Button
                        size="lg"
                        onClick={toggleChat}
                        className="text-lg px-8 py-6 shadow-elevated hover:scale-105 transition-smooth animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="flex items-center gap-2">
                            <span>{chatOpen && isDesktop ? "Fechar Chat" : "Agendar Consulta"}</span>
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};
