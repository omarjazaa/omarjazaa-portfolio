import { Award } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Certificates = () => {
  const { t } = useLanguage();

  const GROUPS = [
    {
      label: t(translations.certificates.groups.tryhackme),
      items: [
        { name: "Pre Security", href: "https://tryhackme.com/badge/167890" },
        { name: "Jr Penetration Tester", href: "https://tryhackme.com/badge/167891" },
        { name: "SOC Level 1", href: "https://tryhackme.com/badge/167892" },

      ],
    },
    {
      label: t(translations.certificates.groups.cisco),
      items: [{ name: t(translations.certificates.ciscoCert), href: "#" }],
    },
    {
      label: t(translations.certificates.groups.google),
      items: [
        { name: t(translations.certificates.googleCert), href: "#" },
        { name: t(translations.certificates.googleCert), href: "#" },
      ],
    },
  ];

  return (
    <Section id="certificates" number="04." title={t(translations.certificates.title)}>
      <div className="space-y-10">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <h3 className="font-heading text-cyan text-sm tracking-widest uppercase mb-4">{g.label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map((c, i) => (
                <a
                  key={`${g.label}-${i}`}
                  href={c.href}
                  className="reveal group glass rounded-xl p-6 flex flex-col items-center text-center border-dashed border border-cyan/30 hover:border-cyan hover:-translate-y-2 hover:shadow-glow transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-cyan flex items-center justify-center mb-3 shadow-glow">
                    <Award className="text-background" size={28} />
                  </div>
                  <span className="text-text-secondary text-sm group-hover:text-foreground transition-colors">
                    {c.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;

