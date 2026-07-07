import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import { projectsData } from "../../data/projects";
import { GithubIcon } from "../common/SocialIcons";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Predefined stylized CSS gradients matching each project name
  const gradientStyles = {
    "RentEase": "from-emerald-500/20 via-teal-600/10 to-[#0b0b0f]",
    "Voting Management System": "from-blue-600/20 via-indigo-600/10 to-[#0b0b0f]",
    "LMS Dashboard": "from-purple-600/20 via-pink-600/10 to-[#0b0b0f]",
    "Portfolio Website": "from-[#A3FF12]/10 via-[#A3FF12]/5 to-[#0b0b0f]"
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <FolderGit2 size={12} className="animate-pulse" />
            My Portfolio
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            A curated showcase of applications built with MERN technologies, reflecting strict testing, clean databases, and performance tuning.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-3xl glass-panel relative overflow-hidden group border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Styled CSS Abstract Gradient Canvas (Image Placeholder replacement) */}
                <div className={`h-48 w-full bg-gradient-to-tr ${gradientStyles[project.title] || 'from-indigo-900/20 to-[#0b0b0f]'} border-b border-white/5 p-8 flex items-center justify-between relative overflow-hidden`}>
                  
                  {/* Grid lines inside gradient preview */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                  
                  <div className="z-10">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2 font-mono">Dev Canvas</span>
                    <h3 className="text-2xl font-black text-white leading-tight font-sans tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-[#A3FF12] backdrop-blur-md z-10">
                    <FolderGit2 size={32} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 select-none">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-tight">
                          <CheckCircle2 size={13} className="text-[#A3FF12] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies pills */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs font-semibold text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="border-t border-white/5 p-8 flex items-center justify-between bg-[#181A20]/45">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#A3FF12] transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
                
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-[#A3FF12] border border-white/5 hover:border-transparent px-4 py-2 text-xs font-bold text-white hover:text-black transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
