import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  ArrowDown,
  ArrowRight,
  Database,
  Code,
  Server,
  Layers,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";

const Hero = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const floatingCardAnimation = (delay) => ({
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay: delay
    }
  });

  const handleScrollTo = (targetId) => {
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
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0f] pt-28 pb-16 flex items-center">
      {/* ===== Ambient Glow Background Blobs ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/12 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px]"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/12 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center"
        >
          {/* --- Left Column (Text & CTAs) --- */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gray-300 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#A3FF12] animate-pulse" />
              <span className="text-[#A3FF12]"></span> Available for Freelance Projects
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A3FF12] glow-text"
            >
              Hi, I'm
            </motion.p>

            {/* Main Name */}
            <motion.h1
              variants={fadeInUp}
              className="mt-2 text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-sans"
            >
              Vineet Pancheshwar
            </motion.h1>

            {/* Title Pill */}
            <motion.div
              variants={fadeInUp}
              className="mt-4 inline-flex items-center rounded-full border border-[#A3FF12]/20 bg-[#A3FF12]/5 px-5 py-2 text-sm font-bold text-[#A3FF12] backdrop-blur-sm shadow-[0_0_15px_rgba(163,255,18,0.05)]"
            >
              Full Stack MERN Developer
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              I design and develop responsive, high-performance, and scalable web applications. Specializing in React, Node.js, Express, MongoDB, and Tailwind CSS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <motion.button
                onClick={() => handleScrollTo("contact")}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(163,255,18,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#A3FF12] px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-[#8fE010] cursor-pointer"
              >
                Hire Me
              </motion.button>
              
              <motion.button
                onClick={() => handleScrollTo("projects")}
                whileHover={{ scale: 1.03, borderColor: "#A3FF12", color: "#A3FF12" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
              >
                View Portfolio
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: <GithubIcon size={20} />, href: "https://github.com/vineetpancheshwar", label: "GitHub" },
                { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:codebyvineet1611@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#A3FF12" }}
                  className="rounded-full bg-[#181A20] border border-white/5 p-3.5 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#A3FF12]/20 hover:text-[#A3FF12] hover:bg-[#181A20]/80"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* --- Right Column (Developer Graphic & Floating Cards) --- */}
          <div className="relative flex w-full items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-[360px] aspect-square sm:max-w-[420px] md:max-w-[440px]">
              
              {/* Glow Behind Photo Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/30 to-[#A3FF12]/20 blur-3xl" />
              
              {/* Photo Frame / Graphic Canvas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#181A20] p-4 backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Simulated IDE Headers */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 select-none">MERNStackDev.js</span>
                  <div className="w-8" />
                </div>
                
                {/* Styled Technical Portrait Placeholder / Tech Graphic */}
                <div className="flex-1 flex flex-col justify-center items-center py-6 relative">
                  {/* Styled Avatar Graphic */}
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#181A20] to-[#0b0b0f] border-2 border-dashed border-white/10 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-900/40 via-[#181A20] to-[#A3FF12]/20 flex items-center justify-center">
                      <Code size={44} className="text-[#A3FF12] animate-pulse" />
                    </div>
                    {/* Ring spinning animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-t-[#A3FF12] border-r-transparent border-b-[#A3FF12] border-l-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mt-4 tracking-wide text-white">Vineet Pancheshwar</h3>
                  <p className="text-xs text-gray-500 mt-1 select-none">MERN Portfolio Version 1.0</p>
                  
                  {/* Console line */}
                  <div className="mt-4 w-full bg-[#0b0b0f] rounded-lg p-3 font-mono text-left border border-white/5 max-w-[280px]">
                    <div className="text-[11px] text-gray-400">
                      <span className="text-[#A3FF12]">✓</span> Loaded modules successfully.
                    </div>
                    <div className="text-[11px] text-purple-400 mt-0.5">
                      <span>&gt;</span> Status: Ready for freelancing
                    </div>
                  </div>
                </div>

                {/* Simulation terminal footer */}
                <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px] text-gray-500 select-none">
                  <span>Lines: 1024</span>
                  <span>UTF-8</span>
                </div>
              </motion.div>

              {/* Floating Cards (Glassmorphism design) */}
              
              {/* Card 1: React */}
              <motion.div
                variants={fadeInUp}
                animate={floatingCardAnimation(0)}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 flex items-center gap-2 rounded-2xl glass-panel p-3 shadow-2xl select-none"
              >
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
                  <Code size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">React</h4>
                  <span className="text-[9px] text-gray-400">Frontend</span>
                </div>
              </motion.div>

              {/* Card 2: Node.js */}
              <motion.div
                variants={fadeInUp}
                animate={floatingCardAnimation(1.5)}
                className="absolute top-1/3 -right-4 sm:-right-8 hidden sm:flex items-center gap-2 rounded-2xl glass-panel p-3 shadow-2xl select-none"
              >
                <div className="rounded-lg bg-green-500/10 p-2 text-green-400">
                  <Server size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">Node.js</h4>
                  <span className="text-[9px] text-gray-400">Backend API</span>
                </div>
              </motion.div>

              {/* Card 3: MongoDB */}
              <motion.div
                variants={fadeInUp}
                animate={floatingCardAnimation(0.7)}
                className="absolute bottom-12 -left-4 sm:-left-8 flex items-center gap-2 rounded-2xl glass-panel p-3 shadow-2xl select-none"
              >
                <div className="rounded-lg bg-[#A3FF12]/10 p-2 text-[#A3FF12]">
                  <Database size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">MongoDB</h4>
                  <span className="text-[9px] text-gray-400">Database</span>
                </div>
              </motion.div>

              {/* Card 4: Tailwind */}
              <motion.div
                variants={fadeInUp}
                animate={floatingCardAnimation(2.2)}
                className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 flex items-center gap-2 rounded-2xl glass-panel p-3 shadow-2xl select-none"
              >
                <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">Tailwind v4</h4>
                  <span className="text-[9px] text-gray-400">Styles</span>
                </div>
              </motion.div>

              {/* Card 5: Available Status */}
              <motion.div
                variants={fadeInUp}
                animate={floatingCardAnimation(1.2)}
                className="absolute bottom-1/2 -right-4 sm:-right-6 hidden md:flex items-center gap-2 rounded-2xl bg-[#0b0b0f] border border-[#A3FF12]/20 p-2.5 shadow-2xl select-none"
              >
                <CheckCircle2 size={14} className="text-[#A3FF12]" />
                <span className="text-[10px] font-bold text-white tracking-wide">Available for Work</span>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => handleScrollTo("current-project")}
          className="flex h-10 w-6 items-center justify-center rounded-full border border-white/20 hover:border-[#A3FF12]/50 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-gray-400" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default Hero;