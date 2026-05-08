import { useState } from "react";
import { Shield, Terminal, Code2, Network, Boxes, Search, ChevronDown } from "lucide-react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Skills = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  const SKILLS = [
    {
      icon: Shield,
      title: t(translations.skills.items.webAppSecurity.title),
      desc: t(translations.skills.items.webAppSecurity.desc),
      tools: ["Burp Suite", "OWASP ZAP", "ffuf", "sqlmap"],
    },
    {
      icon: Terminal,
      title: t(translations.skills.items.linuxCli.title),
      desc: t(translations.skills.items.linuxCli.desc),
      tools: ["Kali Linux", "Bash", "Vim", "tmux"],
    },
    {
      icon: Code2,
      title: t(translations.skills.items.pythonDev.title),
      desc: t(translations.skills.items.pythonDev.desc),
      tools: ["Python 3", "pip", "venv", "VS Code"],
    },
    {
      icon: Network,
      title: t(translations.skills.items.networking.title),
      desc: t(translations.skills.items.networking.desc),
      tools: ["Wireshark", "nmap", "netcat"],
    },
    {
      icon: Boxes,
      title: t(translations.skills.items.dockerLabs.title),
      desc: t(translations.skills.items.dockerLabs.desc),
      tools: ["Docker", "Docker Compose"],
    },
    {
      icon: Search,
      title: t(translations.skills.items.osintRecon.title),
      desc: t(translations.skills.items.osintRecon.desc),
      tools: ["theHarvester", "Maltego", "Shodan"],
    },
  ];

  return (
    <Section id="skills" number="02." title={t(translations.skills.title)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map(({ icon: Icon, title, desc, tools }) => {
          const isExpanded = expanded === title;
          return (
            <div
              key={title}
              tabIndex={0}
              onClick={() => toggle(title)}
              className="reveal group relative glass rounded-xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-glow focus-visible:-translate-y-1.5 focus-visible:shadow-glow cursor-pointer sm:cursor-default"
            >
              {/* top gradient bar */}
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-cyan origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-500 rounded-t-xl" />

              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="text-background" size={24} strokeWidth={2} />
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggle(title); }}
                  className="sm:hidden text-cyan/60 hover:text-cyan transition-colors p-1"
                  aria-label={isExpanded ? t(translations.skills.collapseTools) : t(translations.skills.expandTools)}
                >
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>

              <div className={`grid transition-all duration-500 ease-out sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr] sm:group-focus-visible:grid-rows-[1fr] ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="pt-5 mt-5 border-t border-white/10">
                    <span className="font-heading text-[10px] tracking-[0.25em] text-cyan">{t(translations.skills.toolsLabel)}</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full text-xs font-medium glass border border-cyan/30 text-cyan"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;

