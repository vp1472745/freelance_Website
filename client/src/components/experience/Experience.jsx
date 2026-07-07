import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";
import { experienceData } from "../../data/experience";

const Experience = () => {
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

  return (
    <section id="experience" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            Timeline
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            My development milestones, highlighting internship training and real-world project engagements.
          </p>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto pl-6 border-l border-white/10"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-[#0b0b0f] border-2 border-[#A3FF12] flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A3FF12] animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl glass-panel p-8 hover:border-[#A3FF12]/15 transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={18} className="text-[#A3FF12]" />
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-400 mt-1.5">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/5 px-4 py-1.5 text-xs font-semibold text-gray-300">
                    <Calendar size={13} className="text-gray-400" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5 select-none">
                    <Award size={12} className="text-[#A3FF12]" />
                    Key Accomplishments
                  </h5>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A3FF12] mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
