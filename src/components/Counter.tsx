import { useEffect, useRef, useState } from "react";
import { LucideIcon, Trophy, Users, Star } from "lucide-react";

interface CounterItemProps {
  end: number;
  label: string;
  suffix?: string;
  icon: LucideIcon;
}

const CounterItem = ({ end, label, suffix = "+", icon: Icon }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const baseDuration = 4000;
    const duration = Math.max(3500, Math.min(5000, baseDuration + (end / 10)));
    const steps = Math.max(60, Math.floor(end / 2));
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className={`text-center ${isVisible ? "animate-counter-up" : "opacity-0"}`}
    >
      <div className="mb-4 flex justify-center">
        <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
      </div>
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {suffix}{count}
      </div>
      <div className="text-muted-foreground text-lg">{label}</div>
    </div>
  );
};

export const Counter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <CounterItem end={10} label="Anos de Experiência" icon={Trophy} />
          <CounterItem end={850} label="Clientes Satisfeitos" icon={Users} />
          <CounterItem end={9} label="Serviços Especializados" icon={Star} />
        </div>
      </div>
    </section>
  );
};
