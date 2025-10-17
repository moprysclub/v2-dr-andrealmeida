"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useChatwootStore } from "@/lib/chatwoot-store";

import { useEffect } from "react";

export const Contact = () => {
    const { chatOpen, toggleChat } = useChatwootStore();

    return (
        <section id="contato" className="py-20 gradient-soft">
            <div className="container mx-auto max-w-[900px] px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Prevenção ou correção?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Uma avaliação precisa pode prevenir tratamentos mais complexos no futuro. Toque no botão abaixo para agendar uma consulta de forma rápida e sem complicações.
                </p>

                <div className="flex justify-center">
                    <Button
                        size="lg"
                        onClick={toggleChat}
                        className="text-lg px-8 py-6 shadow-elevated hover:scale-105 transition-smooth animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            <span>{chatOpen ? "Fechar Chat" : "Agendar Consulta"}</span>
                            {!chatOpen && (
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            )}
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};
