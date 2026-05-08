import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Tools = () => {
  const { t } = useLanguage();

  const COLUMNS = [
    {
      title: t(translations.tools.columns.offensive),
      tags: ["Burp Suite", "nmap", "Wireshark", "sqlmap", "ffuf", "netcat", "Metasploit (learning)", "theHarvester"],
    },
    {
      title: t(translations.tools.columns.dev),
      tags: ["Python 3", "Docker", "Git", "GitHub", "VS Code", "Linux CLI", "Bash", "Kali Linux"],
    },
  ];

  return (
    <Section id="tools" number="06." title={t(translations.tools.title)}>
      <div className="grid lg:grid-cols-2 gap-6">
        {COLUMNS.map((col) => (
          <div key={col.title} className="reveal glass rounded-xl p-6">
            <h3 className="font-heading text-cyan text-sm tracking-widest uppercase mb-5">{col.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {col.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium glass border border-white/10 text-foreground hover:bg-cyan hover:text-background hover:border-cyan hover:-translate-y-1 hover:shadow-glow transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tools;

