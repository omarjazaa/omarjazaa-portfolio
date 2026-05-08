import { Download } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const { t, language } = useLanguage();
  const roles = [
    t(translations.roles.securityEnthusiast),
    t(translations.roles.backendDev),
    t(translations.roles.ctfPlayer),
    t(translations.roles.pythonDev),
    t(translations.roles.linuxLover),
  ];
  const typed = useTypingEffect(roles);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="reveal order-2 lg:order-1 text-center lg:text-left mt-8 md:mt-0">
          <p className="font-heading text-cyan text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 sm:mb-4 lg:mb-5">
            {t(translations.hero.greeting)}
          </p>
          <div className="shimmer-trigger">
            <h1 className="font-heading font-black leading-[1.05] mb-2" style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}>
              <span className="block text-gradient-shimmer">{t(translations.hero.nameFirst)}</span>
              <span className="block text-gradient-shimmer">{t(translations.hero.nameLast)}</span>
            </h1>

            <div className="group mt-4 mb-4 sm:mt-5 sm:mb-5 lg:mt-6 lg:mb-6 font-code text-neon-green min-h-[2rem] flex items-center justify-center lg:justify-start cursor-default transition-all duration-300 hover:[text-shadow:0_0_12px_hsl(var(--accent-green)/0.9),0_0_24px_hsl(var(--accent-green)/0.6)]" style={{ fontSize: "clamp(0.875rem, 3vw, 1.5rem)" }}>
              <span className="shimmer-target transition-transform duration-300 group-hover:translate-x-0.5 break-words max-w-full">{typed}</span>
              <span className="text-neon-green ml-0.5 animate-blink transition-all duration-300 group-hover:[text-shadow:0_0_15px_hsl(var(--accent-green)),0_0_30px_hsl(var(--accent-green)/0.7)] group-hover:scale-110">|</span>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed max-w-xl mb-6 sm:mb-7 lg:mb-8 mx-auto lg:mx-0" style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)" }}>
            {t(translations.hero.bio)}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-3 rounded-lg font-heading text-xs sm:text-sm uppercase tracking-widest font-bold bg-gradient-cyan text-background shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5 transition-all"
            >
              {t(translations.hero.viewWork)}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-3 rounded-lg font-heading text-xs sm:text-sm uppercase tracking-widest font-bold border border-cyan text-cyan hover:bg-cyan hover:text-background hover:-translate-y-0.5 transition-all"
            >
              {t(translations.hero.contactMe)}
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-3 rounded-lg font-heading text-xs sm:text-sm uppercase tracking-widest font-bold glass border border-cyan/30 text-cyan hover:border-cyan hover:bg-cyan/10 hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              {t(translations.hero.downloadCV)}
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right - profile */}
        <div
          className="reveal order-1 lg:order-2 relative flex items-center justify-center mx-auto"
style={{
            width: "min(90vw, 450px)",
            height: "clamp(200px, 55vw, 450px)",
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full opacity-70 animate-spin-slow-reverse"
            style={{
              width: "clamp(210px, 62vw, 500px)",
              height: "clamp(210px, 62vw, 500px)",
              background:
                "linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(135deg, hsl(285 100% 50%), hsl(330 100% 50%)) border-box",
              border: "2px solid transparent",
              transform: "translate(-50%,-50%)",
            }}
            aria-hidden
          />
          {/* Inner ring */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full animate-spin-slow"
            style={{
              width: "clamp(185px, 54vw, 440px)",
              height: "clamp(185px, 54vw, 440px)",
              background:
                "linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(135deg, hsl(184 100% 50%), hsl(210 100% 50%)) border-box",
              border: "2px solid transparent",
              transform: "translate(-50%,-50%)",
            }}
            aria-hidden
          />
          <div
            className="relative rounded-full overflow-hidden border-[3px] border-cyan shadow-glow-strong hover:scale-105 transition-transform duration-500"
            style={{
              width: "clamp(190px, 56vw, 370px)",
              height: "clamp(190px, 56vw, 370px)",
            }}
          >
            <img
              src={profileImg}
              alt="Omar Al-Jazaa profile photo"
              width={768}
              height={768}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted" aria-hidden>
        <div className="w-6 h-10 rounded-full border-2 border-cyan/60 flex justify-center pt-2">
          <span className="block w-1 h-2 rounded-full bg-cyan" style={{ animation: "float-bounce 1.6s ease-in-out infinite" }} />
        </div>
        <span className="font-heading text-[10px] tracking-[0.3em] text-cyan/70">{t(translations.hero.scroll)}</span>
      </div>
    </section>
  );
};

export default Hero;

