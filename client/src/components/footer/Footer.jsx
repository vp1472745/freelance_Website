import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer className="relative bg-[#0b0b0f] border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 pb-12 border-b border-white/5">
          {/* Logo & Description */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="text-1xl font-black tracking-wider text-white"
            >
          CODEBYVINEET    
              <span className="text-[#A3FF12]">.</span>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
              Full Stack MERN Developer building high-performance applications with sleek user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">Quick Links</h4>
            <ul className="space-y-2.5">
              {["home", "about", "skills", "projects", "faq", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScrollTo(e, section)}
                    className="text-xs text-gray-500 hover:text-[#A3FF12] capitalize transition-colors"
                  >
                    {section === "faq" ? "FAQs" : section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Freelance Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">Services</h4>
            <ul className="space-y-2.5">
              {[
                "MERN Stack Apps",
                "UI Development",
                "API Integration",
                "Custom Dashboards"
              ].map((service, i) => (
                <li key={i} className="text-xs text-gray-500 hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/vineetpancheshwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                >
                  GitHub
                  <ArrowUpRight size={12} className="text-gray-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight size={12} className="text-gray-600" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:codebyvineet1611@gmail.com"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#A3FF12] transition-colors"
                >
                  Email Inquiry
                  <ArrowUpRight size={12} className="text-[#A3FF12]/50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <span>&copy; {currentYear} Vineet Pancheshwar. All rights reserved.</span>
          <span className="font-mono">Built with React, Tailwind v4, & Framer Motion</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
