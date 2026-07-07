import { motion } from "framer-motion";
import { User, Award, ShieldCheck, Flame } from "lucide-react";

const About = () => {
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

  const stats = [
    { label: "Completed Projects", value: "3", icon: <ShieldCheck className="text-[#A3FF12]" size={20} /> },
    { label: "Technical Experience", value: "Internship & Freelance", icon: <Award className="text-[#A3FF12]" size={20} /> },
    { label: "Core Dev Focus", value: "MERN Stack", icon: <Flame className="text-[#A3FF12]" size={20} /> }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0b0b0f] overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* About Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center"
        >
          {/* Decorative Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden border border-white/5 bg-[#181A20] p-8 flex flex-col justify-between">
              {/* background lighting */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#A3FF12]/5 blur-2xl" />
              
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#A3FF12]/10 p-2.5 text-[#A3FF12]">
                  <User size={20} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Profile Card</span>
              </div>

              <div className="my-6">
                <h3 className="text-2xl font-bold text-white mb-2">Vineet Pancheshwar</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Based in India, working globally. Focused on building production-ready applications with highly polished user experiences.
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-[10px] uppercase font-bold text-[#A3FF12] tracking-wider select-none">Coding Motto</span>
                <p className="text-xs text-gray-500 italic mt-1 font-mono">
                  "Write readable, scalable, and maintainable code. Let design and functionality speak."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Details & Bio */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
              About Me
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering Beautiful Full-Stack Web Interfaces
            </h2>
            
            <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
              I am a specialized Full Stack MERN Developer passionate about turning intricate problems into elegant digital realities. My focus centers around constructing responsive frontends with React and styling utilities, coupled with secure, scalable APIs driven by Node.js, Express, and MongoDB.
            </p>
            
            <p className="mt-4 text-gray-400 leading-relaxed text-sm">
              As a freelancer, my mission goes beyond just coding. I assist founders, entrepreneurs, and agencies in converting their conceptual goals into high-performing websites. I construct layouts that engage visitors, establishing credibility and encouraging conversions from the first second.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#181A20] border border-white/5 p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className={`font-black text-white font-sans leading-tight ${
                      stat.value.length > 15 
                        ? "text-sm sm:text-base" 
                        : stat.value.length > 8 
                        ? "text-lg sm:text-xl" 
                        : "text-2xl"
                    }`}>
                      {stat.value}
                    </span>
                    <div className="shrink-0">{stat.icon}</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
