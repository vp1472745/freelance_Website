import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, ShieldCheck, Rocket, Wrench, ArrowRight } from "lucide-react";

const Process = () => {
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

  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "Gathering goals, project requirements, target audience profiles, and scoping milestones.",
      icon: <Search size={20} />
    },
    {
      num: "02",
      title: "Planning",
      description: "Defining server models, information layouts, routing patterns, and scheduling schedules.",
      icon: <Compass size={20} />
    },
    {
      num: "03",
      title: "UI Design",
      description: "Crafting modern glassmorphic look-and-feel prototypes, layouts, and animations flow.",
      icon: <Palette size={20} />
    },
    {
      num: "04",
      title: "Development",
      description: "Developing robust frontends in React paired with APIs using Node/Express and MongoDB.",
      icon: <Code size={20} />
    },
    {
      num: "05",
      title: "Testing",
      description: "Performing linting checks, responsiveness reviews, and database query optimizations.",
      icon: <ShieldCheck size={20} />
    },
    {
      num: "06",
      title: "Deployment",
      description: "Publishing application bundles to production cloud environments for live customer traffic.",
      icon: <Rocket size={20} />
    },
    {
      num: "07",
      title: "Support",
      description: "Ongoing updates checks, server maintenance support, and additions of new modules features.",
      icon: <Wrench size={20} />
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-[#0b0b0f] border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            Methodology
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Work Process
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            A reliable, step-by-step collaborative journey engineered to bring web applications from concept to successful launch.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col justify-between rounded-2xl bg-[#181A20] border border-white/5 p-6 hover:border-[#A3FF12]/20 transition-all duration-300 group"
            >
              <div>
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-gray-700 font-mono tracking-widest group-hover:text-[#A3FF12]/30 transition-colors">
                    {step.num}
                  </span>
                  <div className="rounded-xl bg-[#0b0b0f] p-2.5 text-[#A3FF12] border border-white/5">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#A3FF12] transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed mt-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
