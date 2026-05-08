import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Education = () => {
  const { t } = useLanguage();

  return (
    <Section id="education" number="05." title={t(translations.education.title)}>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="reveal glass rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left hover:translate-x-1 hover:border-cyan/40 hover:shadow-glow transition-all">
          <div className="w-14 h-14 rounded-lg bg-gradient-cyan flex items-center justify-center flex-shrink-0 shadow-glow">
            <GraduationCap className="text-background" size={26} />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-bold text-foreground">
              {t(translations.education.degree)}
            </h3>
            <p className="text-text-secondary mt-1">{t(translations.education.university)}</p>
            <span className="inline-block font-code text-xs text-cyan mt-2">{t(translations.education.yearRange)}</span>
          </div>
        </div>

        <div className="reveal glass rounded-xl p-6">
          <h3 className="font-heading text-cyan text-sm tracking-widest uppercase mb-4">{t(translations.education.languagesTitle)}</h3>
          <div className="space-y-3">
            {[
              { name: t(translations.education.languages.arabic), level: t(translations.education.languages.arabicLevel) },
              { name: t(translations.education.languages.english), level: t(translations.education.languages.englishLevel) },
            ].map((l) => (
              <div
                key={l.name}
                className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-cyan/30 hover:bg-cyan/5 transition-all"
              >
                <span className="font-heading text-foreground">{l.name}</span>
                <span className="font-code text-sm text-neon-green">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;

