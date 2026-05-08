import Section from "./Section";
import SyriaFlag from "../../components/SyriaFlag";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyan font-semibold">{children}</span>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" number="01." title={t(translations.about.title)}>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
        {/* Text */}
        <div className="reveal space-y-5 sm:space-y-6">
          <p className="text-text-secondary leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.125rem)" }}>
            {t(translations.about.p1)}
          </p>
          <p className="text-text-secondary leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.125rem)" }}>
            {t(translations.about.p2)}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
            {[
              { v: "2+", l: t(translations.about.stats.years) },
              { v: "5+", l: t(translations.about.stats.projects) },
              { v: "10+", l: t(translations.about.stats.certs) },
            ].map((s) => (
              <div
                key={s.l}
                className="glass rounded-lg p-2 sm:p-3 md:p-4 text-center hover:border-cyan/50 hover:shadow-glow transition-all"
              >
                <div className="font-heading text-lg sm:text-xl md:text-3xl font-black text-gradient-cyan">{s.v}</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-text-muted uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="reveal">
          <div className="glass rounded-xl overflow-hidden shadow-card">
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/80 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-code text-xs text-text-muted">{t(translations.about.code.filename)}</span>
            </div>
            <pre className="font-code text-[11px] sm:text-xs md:text-sm leading-relaxed p-3 sm:p-4 md:p-5 overflow-x-auto scrollbar-hide">
              <code>
                <span className="text-neon-purple">const</span>{" "}
                <span className="text-neon-orange">omar</span> = {"{"}
                {"\n  "}
                <span className="text-neon-blue">name</span>:{"     "}
                <span className="text-neon-green">{t(translations.about.code.name)}</span>,{"\n  "}
                <span className="text-neon-blue">role</span>:{"     "}
                <span className="text-neon-green">{t(translations.about.code.role)}</span>,{"\n  "}
                <span className="text-neon-blue">location</span>:{" "}
                <span className="text-neon-green">{t(translations.about.code.location)} <SyriaFlag className="inline-block w-[1.1em] h-[1.1em] align-middle -mt-[0.1em]" />{"\""}</span>,{"\n  "}
                <span className="text-neon-blue">skills</span>:{"   "}
                <span className="text-neon-green">{t(translations.about.code.skills)}</span>,{"\n  "}
                <span className="text-neon-blue">learning</span>:{" "}
                <span className="text-neon-green">{t(translations.about.code.learning)}</span>,{"\n  "}
                <span className="text-neon-blue">passion</span>:{"  "}
                <span className="text-neon-green">{t(translations.about.code.passion)}</span>,{"\n  "}
                <span className="text-neon-blue">goal</span>:{"     "}
                <span className="text-neon-green">{t(translations.about.code.goal)}</span>
                {"\n"}
                {"};"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

