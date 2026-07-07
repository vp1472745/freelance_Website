import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { skillsData } from "../../data/skills";

// Dynamic icon resolver component
const TechIcon = ({ iconName, className }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.Code;
  return <Icon className={className} size={20} />;
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    { key: "frontend", title: "Frontend Engineering", icon: <Cpu className="text-[#A3FF12]" size={20} /> },
    { key: "backend", title: "Backend & Databases", icon: <Terminal className="text-[#A3FF12]" size={20} /> },
    { key: "tools", title: "Developer Tools", icon: <TechIcon iconName="Laptop" className="text-[#A3FF12]" /> }
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <Sparkles size={12} className="animate-pulse" />
            My Skills
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            These are the primary languages, frameworks, and developer workflows I use daily to build modern websites.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className="rounded-3xl bg-[#181A20] border border-white/5 p-8 relative overflow-hidden group hover:border-[#A3FF12]/10 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="rounded-xl bg-[#A3FF12]/5 p-2.5">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list inside category */}
              <div className="space-y-5">
                {skillsData[category.key].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-300 font-medium">
                        <TechIcon iconName={skill.icon} className="text-[#A3FF12]" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-[#A3FF12] font-semibold text-xs">{skill.level}</span>
                    </div>
                    {/* Progress Bar background */}
                    <div className="h-1.5 w-full rounded-full bg-[#0b0b0f] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#A3FF12]/70 to-[#A3FF12]"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
