import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Experience = () => {
  const { t } = useLanguage();
  const entries = translations.experience.entries;

  return (
    <Section id="experience" number="03." title={t(translations.experience.title)}>
      <div className="relative pl-6 sm:pl-10 lg:pl-12">
        {/* Vertical line */}
        <span
          className="absolute left-[6px] sm:left-3 lg:left-4 top-2 bottom-2 w-[2px]"
          style={{ background: "linear-gradient(to bottom, hsl(184 100% 50%), hsl(285 100% 50%))" }}
          aria-hidden
        />

        <div className="space-y-8 sm:space-y-10">
          {entries.map((e, idx) => (
            <div key={idx} className="relative reveal group">
              {/* marker */}
              <span
                className="absolute -left-[22px] sm:-left-[30px] lg:-left-[34px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-cyan ring-4 ring-background animate-pulse-glow"
                aria-hidden
              />
              <div className="glass rounded-xl p-6 transition-all duration-300 group-hover:translate-x-2 group-hover:border-cyan/40 group-hover:shadow-glow">
                <span className="inline-block font-code text-xs text-cyan mb-2">{t(e.date)}</span>
                <h3 className="font-heading text-xl font-bold text-foreground">{t(e.title)}</h3>
                <p className="text-neon-green text-sm font-medium mt-1 mb-3">{t(e.highlight)}</p>
                <p className="text-text-secondary leading-relaxed mb-4">{t(e.summary)}</p>
                <ul className="space-y-1.5 mb-4">
                  {e.bullets.map((b, bidx) => (
                    <li key={bidx} className="text-text-secondary text-sm flex gap-2">
                      <span className="text-cyan flex-shrink-0">▹</span>
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium glass border border-cyan/25 text-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

