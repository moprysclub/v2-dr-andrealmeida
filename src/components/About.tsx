export const About = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Sobre o Dr. Andre Almeida
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Cirurgião-dentista inscrito no CRO/RJ 41279, Dr. Andre Almeida é especialista em Cirurgia Bucomaxilofacial e Periodontia, com mais de uma década de experiência clínica.
              </p>
              <p>
                Atua em procedimentos de alta complexidade como implantes, cirurgias de sisos, enxertos e reabilitação oral completa — sempre com foco em previsibilidade, tecnologia e segurança.
              </p>
              <p>
                Além das especialidades cirúrgicas e funcionais, realiza procedimentos estéticos supervisionados, como clareamento e lentes de resina/porcelana, sempre aliados à saúde bucal.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/dr-andre-almeida-odontologia-angra-dos-reis-rj.webp"
                alt="Dr. Andre Almeida"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
