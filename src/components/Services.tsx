import { Smile, Sparkles, CircleDot, AlignJustify, Heart, Gem, Drill, Activity, Zap, Layers, Shield, Stethoscope, Scissors, Baby  } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  { 
    icon: Heart, 
    title: "Implantes Dentários", 
    specialty: "Especialidade: Implantodontia",
    description: "Reposição de dentes perdidos com implantes de titânio, planejados digitalmente para máxima estabilidade e previsibilidade." 
  },
  { 
    icon: Scissors, 
    title: "Cirurgias Bucomaxilofaciais", 
    specialty: "Especialidade: Cirurgia Bucomaxilofacial",
    description: "Cirurgias de sisos, enxertos ósseos, remoção de lesões e outros procedimentos complexos conduzidos com segurança e tecnologia." 
  },
  { 
    icon: Activity, 
    title: "Tratamento de Gengiva", 
    specialty: "Especialidade: Periodontia",
    description: "Tratamento de gengivite, periodontite e retrações gengivais, prevenindo a perda óssea e mantendo a saúde dos tecidos de suporte." 
  },
  { 
    icon: Stethoscope, 
    title: "Reabilitação Oral", 
    specialty: "Especialidade: Reabilitação Oral",
    description: "Planejamento integrado que combina próteses, implantes e estética, devolvendo função mastigatória e harmonia ao sorriso." 
  },
  { 
    icon: Activity, 
    title: "Tratamento de Canal", 
    specialty: "Especialidade: Endodontia",
    description: "Preservação do dente com eliminação de infecções e alívio de dores, utilizando técnicas modernas e anestesia eficaz." 
  },
  { 
    icon: Sparkles, 
    title: "Clareamento Dental", 
    specialty: "Especialidade: Estética Supervisionada",
    description: "Clareamento seguro com protocolos clínicos individualizados, preservando a integridade do esmalte." 
  },
  { 
    icon: Gem, 
    title: "Lentes e Facetas de Resina/Porcelana", 
    specialty: "Especialidade: Estética Restauradora",
    description: "Correção de forma, cor e proporção dos dentes com materiais resistentes e indicados conforme cada caso clínico." 
  },
  { 
    icon: Baby, 
    title: "Odontopediatria", 
    specialty: "Especialidade: Dentista para Criança",
    description: "Atendimento especializado para crianças, com foco em prevenção, adaptação e cuidado humanizado." 
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 gradient-soft">
      <div className="container mx-auto max-w-[900px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          Especialidades
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cuidado técnico para cada necessidade. Procedimentos realizados com precisão diagnóstica, conforto e foco funcional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 bg-card border-border"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-xs font-medium text-primary/80 mb-2">{service.specialty}</p>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
