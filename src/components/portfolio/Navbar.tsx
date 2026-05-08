import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const LINKS = [
    { href: "#home", label: t(translations.nav.home) },
    { href: "#about", label: t(translations.nav.about) },
    { href: "#skills", label: t(translations.nav.skills) },
    { href: "#experience", label: t(translations.nav.experience) },
    { href: "#certificates", label: t(translations.nav.certificates) },
    { href: "#projects", label: t(translations.nav.projects) },
    { href: "#contact", label: t(translations.nav.contact) },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          "backdrop-blur-xl border-b border-white/5",
          scrolled
            ? "bg-background/95 py-3 shadow-[0_8px_30px_hsl(0_0%_0%/0.5)]"
            : "bg-background/70 py-5"
        )}
      >
        <div className="container-page flex items-center justify-between">
          <a href="#home" className="font-heading text-2xl font-black tracking-widest text-gradient-cyan" aria-label="Omar Al-Jazaa">
            OJ
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative font-body text-sm uppercase tracking-[0.15em] font-medium transition-colors",
                    "hover:text-cyan",
                    isActive ? "text-cyan" : "text-text-secondary"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gradient-cyan origin-left transition-transform duration-300",
                      "w-full",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label={language === "en" ? t(translations.langToggle.ariaAr) : t(translations.langToggle.ariaEn)}
              title={language === "en" ? t(translations.langToggle.ariaAr) : t(translations.langToggle.ariaEn)}
              className="text-cyan inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md hover:bg-cyan/10 transition-colors font-heading text-sm font-bold"
            >
              {language === "en" ? t(translations.langToggle.ar) : t(translations.langToggle.en)}
            </button>

            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="text-cyan inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md hover:bg-cyan/10 transition-colors"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <button
              className="flex lg:hidden text-cyan items-center justify-center min-h-[44px] min-w-[44px] rounded-md hover:bg-cyan/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={close} />
        <div
          className={cn(
            "absolute top-0 right-0 [dir=\"rtl\"]:left-0 h-full w-80 max-w-[90vw] bg-bg-secondary border-l border-white/10 p-6 sm:p-8 pt-20 sm:pt-24 flex flex-col gap-4 sm:gap-6 transition-transform duration-300 overflow-y-auto",
            open ? "translate-x-0" : "translate-x-full [dir=\"rtl\"]:-translate-x-full"
          )}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="font-heading text-base sm:text-lg uppercase tracking-widest text-foreground hover:text-cyan transition-colors flex items-center min-h-[44px]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

