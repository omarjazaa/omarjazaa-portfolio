import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const PROJECTS = [
  {
    key: "passwordAnalyzer" as const,
    tags: ["Python", "Security", "CLI", "Cryptography"],
    href: "https://github.com/omarjazaa/password-analyzer",
    gradient: "from-neon-purple/30 via-cyan/20 to-transparent",
  },
  {
    key: "handPython" as const,
    tags: ["Python", "Automation", "Scripting", "Linux"],
    href: "https://github.com/omarjazaa/hand_python",
    gradient: "from-neon-green/25 via-cyan/20 to-transparent",
  },
  {
    key: "linuxScripts" as const,
    tags: ["Bash", "Python", "Linux", "Automation", "Sysadmin"],
    href: "https://github.com/omarjazaa/linux-scripts",
    gradient: "from-neon-orange/25 via-neon-purple/20 to-transparent",
  },
  {
    key: "backendApi" as const,
    tags: ["Python", "REST API", "Back-End", "Security", "Docker"],
    href: "https://github.com/omarjazaa/backend-api",
    gradient: "from-neon-blue/30 via-cyan/20 to-transparent",
  },
  {
    key: "portfolio" as const,
    tags: ["React", "TypeScript", "Tailwind", "UI Design"],
    href: "https://github.com/omarjazaa/portfolio",
    gradient: "from-cyan/30 via-neon-purple/20 to-transparent",
  },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects" number="07." title={t(translations.projects.title)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.key}
            className="reveal group glass rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 hover:border-cyan/40 hover:shadow-glow transition-all duration-300"
          >
            {/* image area */}
            <div className={`relative aspect-video sm:h-48 md:h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, hsl(184 100% 50% / 0.15) 0 1px, transparent 1px 18px), repeating-linear-gradient(0deg, hsl(285 100% 50% / 0.1) 0 1px, transparent 1px 18px)",
                }}
              />
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-background/0 sm:group-hover:bg-background/60 transition-colors"
                aria-label={`Open ${t(translations.projects.items[p.key].title)} on GitHub`}
              >
                <span className="w-14 h-14 rounded-full bg-gradient-cyan flex items-center justify-center shadow-glow scale-100 sm:scale-0 sm:group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink className="text-background" size={22} />
                </span>
              </a>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t(translations.projects.items[p.key].title)}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{t(translations.projects.items[p.key].desc)}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium glass border border-cyan/25 text-cyan">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-lg font-heading text-xs uppercase tracking-widest font-bold glass border border-cyan/40 text-cyan hover:bg-cyan/15 hover:border-cyan hover:-translate-y-0.5 hover:shadow-glow transition-all"
              >
                <Github size={14} />
                {t(translations.projects.viewGithub)}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

