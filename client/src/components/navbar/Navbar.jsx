import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is close to the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0b0f]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
<a
  href="#home"
  onClick={(e) => handleNavClick(e, "#home")}
  className="group flex items-center text-[18px] font-extrabold tracking-[-0.05em] text-white transition-all duration-300 hover:opacity-90"
  style={{ fontFamily: "Satoshi, sans-serif" }}
>
  <span className="uppercase">CODEBYVINEET</span>
  <span className="ml-1 text-[#A3FF12] transition-transform duration-300 group-hover:scale-125">
    .
  </span>
</a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isSectionActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isSectionActive
                    ? "text-[#A3FF12]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#A3FF12] transition-all duration-300 ${
                    isSectionActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Hire Me Button */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-1.5 rounded-full border border-[#A3FF12]/30 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#A3FF12] hover:text-black hover:border-[#A3FF12] hover:shadow-[0_0_20px_rgba(163,255,18,0.3)]"
          >
            Hire Me
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-white/5 p-2 text-white hover:bg-white/10 lg:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`absolute inset-x-0 top-full h-[calc(100vh-100%)] z-40 bg-[#0b0b0f]/95 backdrop-blur-2xl overflow-y-auto transition-all duration-300 lg:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-10 h-full border-t border-white/5">
          {navItems.map((item) => {
            const isSectionActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xl font-bold tracking-wide transition-colors ${
                  isSectionActive ? "text-[#A3FF12]" : "text-white hover:text-[#A3FF12]"
                }`}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-[#A3FF12] py-4 text-sm font-bold text-black hover:bg-[#8fE010] transition-colors"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;