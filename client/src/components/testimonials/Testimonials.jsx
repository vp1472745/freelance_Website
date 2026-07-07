import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";

const Testimonials = () => {
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
    <section id="testimonials" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <MessageSquare size={12} className="animate-pulse" />
            Social Proof
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Client Testimonials
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            What clients and partners say about my commitment, design sense, and code quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonialsData.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="rounded-3xl bg-[#181A20] border border-white/5 p-8 relative overflow-hidden group hover:border-[#A3FF12]/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* background light */}
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-[#A3FF12]/5 blur-2xl group-hover:bg-[#A3FF12]/10 transition-colors" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#A3FF12] text-[#A3FF12]" />
                  ))}
                </div>

                {/* Text quote */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Author profile */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-600/30 to-[#A3FF12]/20 border border-white/10 flex items-center justify-center font-bold text-white text-xs select-none">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <span className="text-[11px] text-gray-500 font-medium">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
