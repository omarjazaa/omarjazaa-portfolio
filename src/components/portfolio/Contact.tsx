import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import tryhackmeProfile from "@/assets/tryhackme-profile.png";

const CARDS = [
  { Icon: Mail, labelKey: "email" as const, value: "omaraljazaa1@gmail.com", href: "mailto:omaraljazaa1@gmail.com" },
  { Icon: Linkedin, labelKey: "linkedin" as const, value: "linkedin.com/in/al-jazaa", href: "https://www.linkedin.com/in/al-jazaa" },
  { Icon: Github, labelKey: "github" as const, value: "github.com/omarjazaa", href: "https://github.com/omarjazaa" },
  { Icon: Twitter, labelKey: "twitter" as const, value: "x.com/AlOmar799", href: "https://x.com/AlOmar799" },
];

const SOCIALS = [
  { Icon: Github, href: "https://github.com/omarjazaa", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/al-jazaa", label: "LinkedIn" },
  { Icon: Twitter, href: "https://x.com/AlOmar799", label: "X" },
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" number="08." title={t(translations.contact.title)}>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3 sm:space-y-4">
          {CARDS.map(({ Icon, labelKey, value, href }) => (
            <a
              key={labelKey}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="reveal flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:translate-x-2 hover:border-cyan/50 hover:shadow-glow transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-cyan flex items-center justify-center flex-shrink-0 shadow-glow">
                <Icon className="text-background" size={20} />
              </div>
              <div className="min-w-0">
                <span className="font-heading text-[10px] sm:text-xs tracking-widest uppercase text-cyan">{t(translations.contact.labels[labelKey])}</span>
                <p className="text-foreground text-sm sm:text-base font-medium group-hover:text-cyan transition-colors truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal glass rounded-xl p-6 flex flex-col">
          <h3 className="font-heading text-cyan text-sm tracking-widest uppercase mb-4">{t(translations.contact.tryhackmeTitle)}</h3>
          <a
            href="https://tryhackme.com/p/AlJazaa.CyberMan"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-cyan/40 hover:border-cyan hover:shadow-glow transition-all"
          >
            <img
              src={tryhackmeProfile}
              alt={t(translations.contact.tryhackmeAlt)}
              loading="lazy"
              className="w-full h-auto block"
            />
          </a>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-lg glass flex items-center justify-center text-cyan hover:bg-cyan hover:text-background hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

