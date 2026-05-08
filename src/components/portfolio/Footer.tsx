import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const SOCIALS = [
  { Icon: Github, href: "https://github.com/omarjazaa", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/al-jazaa", label: "LinkedIn" },
  { Icon: Twitter, href: "https://x.com/AlOmar799", label: "X" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-bg-secondary/50">
      <div className="container-page py-12 flex flex-col items-center text-center gap-4">
        <div className="font-heading text-2xl sm:text-3xl font-black text-gradient-cyan">Omar Al-Jazaa</div>
        <p className="text-text-secondary italic">{t(translations.footer.tagline)}</p>
        <div className="flex gap-3">
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
        <span className="font-code text-xs text-text-muted mt-2">
          {t(translations.footer.copyright)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

