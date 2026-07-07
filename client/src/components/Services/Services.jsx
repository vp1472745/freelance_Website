import { motion } from "framer-motion";
import { Server, Globe, LayoutDashboard, Link2, Monitor, Briefcase, Sparkles, UserCheck } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../../data/services";

// Dynamic icon resolver component
const ServiceIcon = ({ iconName, className }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.Compass;
  return <Icon className={className} size={24} />;
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <Briefcase size={12} className="animate-pulse" />
            Services Offered
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            How I Can Help You
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            Providing end-to-end web engineering, optimized interfaces, and robust systems to elevate your digital products and business goals.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="rounded-3xl glass-panel p-6 relative overflow-hidden group hover:border-[#A3FF12]/20 hover:bg-[#181A20]/80 transition-all duration-300 flex flex-col justify-between h-full"
            >
              {/* Highlight background glow on hover */}
              <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-[#A3FF12]/5 blur-xl group-hover:bg-[#A3FF12]/10 transition-colors duration-300" />
              
              <div>
                {/* Icon box */}
                <div className="rounded-2xl bg-[#181A20] border border-white/5 p-4 text-[#A3FF12] inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon iconName={service.icon} className="text-[#A3FF12]" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A3FF12] transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              {/* Footer indicator link */}
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 group-hover:text-[#A3FF12] transition-colors select-none">
                <span>Tailored MERN</span>
                <span className="block h-[1px] w-4 bg-gray-700 group-hover:bg-[#A3FF12] transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
