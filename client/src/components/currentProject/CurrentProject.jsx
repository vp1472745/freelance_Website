import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  RotateCw, 
  Hourglass, 
  Activity, 
  Calendar, 
  Layers, 
  Trophy, 
  Briefcase 
} from "lucide-react";

// Mock Data integrated directly to avoid import issues
const currentProjectsData = [
  {
    id: 1,
    title: "Wedding Studio Management System",
    status: "Active Development",
    lastUpdated: "July 2026",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
    completed: [
      "Responsive Wedding Studio Website",
      "Photography & Videography Portfolio Showcase",
      "Service Management Module",
      "Gallery & Album Management",
      "CMS (Content Management System)",
      "Admin Dashboard",
      "Booking & Inquiry Management",
      "Package & Pricing Management"
    ],
    working: [
      "Editor Dashboard Implementation",
      "Client Dashboard UI & Auth"
    ],
    next: [
      "Client Album Delivery System",
      "Photo & Video Selection Grid",
      "Invoice & Payment Gateway Integration",
      "WhatsApp & Email Notifications",
      "Analytics & Business Reports"
    ]
  }
];

const CurrentProject = () => {
  // Animation Configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="current-project" className="relative py-24 bg-[#0b0b0f] border-t border-white/5 overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#A3FF12]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 border border-[#A3FF12]/20 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-4 select-none shadow-[0_0_15px_rgba(163,255,18,0.1)]">
            <Activity size={13} className="animate-pulse" />
            Currently Building
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl bg-clip-text">
            Active Development <span className="text-[#A3FF12]">Lab</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Transparent real-time view of my current focus. No fabricated percentages—just clean, trackable progress directly from the dev environment.
          </p>
        </div>

        {/* Project Loop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {currentProjectsData.map((project) => {
            // Dynamically calculate progress percentage
            const totalTasks = project.completed.length + project.working.length + project.next.length;
            const progressPercent = Math.round((project.completed.length / totalTasks) * 100);

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden group hover:border-[#A3FF12]/20 transition-all duration-500 shadow-2xl"
              >
                {/* Neon Top Border Glow Effect */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#A3FF12]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Meta Header Block */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 border border-[#A3FF12]/20 px-3 py-1 text-[11px] font-bold text-[#A3FF12] uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A3FF12] animate-ping" />
                        {project.status}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        <Calendar size={12} />
                        Updated: {project.lastUpdated}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 max-w-md lg:justify-end">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-semibold text-gray-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:bg-white/[0.08] hover:border-white/20 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Dashboard Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-[#A3FF12]/10 rounded-xl text-[#A3FF12]"><Trophy size={20} /></div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Completed</div>
                      <div className="text-xl font-bold text-white">{project.completed.length} Modules</div>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Briefcase size={20} /></div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">In Progress</div>
                      <div className="text-xl font-bold text-white">{project.working.length} Modules</div>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Layers size={20} /></div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Up Next</div>
                      <div className="text-xl font-bold text-white">{project.next.length} Tasks</div>
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="mb-12 bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Overall Sprint Completion</span>
                    <span className="text-sm font-black text-[#A3FF12] bg-[#A3FF12]/10 px-2.5 py-0.5 rounded-md">{progressPercent}%</span>
                  </div>
                  <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden p-[2px] border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progressPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-[#A3FF12] to-[#A3FF12] shadow-[0_0_10px_rgba(163,255,18,0.3)]"
                    />
                  </div>
                </div>

                {/* 3-Column Kanban Board Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Column 1: Completed */}
                  <div className="bg-black/20 rounded-2xl p-5 border border-white/[0.02] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Completed
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white/5 rounded-md text-gray-400">{project.completed.length}</span>
                    </div>
                    <ul className="space-y-3 flex-1 overflow-y-auto max-h-[320px] pr-1 custom-scrollbar">
                      {project.completed.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 bg-white/[0.01] border border-white/5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors duration-200">
                          <CheckCircle2 size={15} className="text-[#A3FF12] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Working On */}
                  <div className="bg-black/20 rounded-2xl p-5 border border-purple-500/10 flex flex-col h-full relative shadow-[inner_0_0_12px_rgba(168,85,247,0.02)]">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-purple-400 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> In Progress
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/10 rounded-md text-purple-400">{project.working.length}</span>
                    </div>
                    <ul className="space-y-3 flex-1 overflow-y-auto max-h-[320px] pr-1 custom-scrollbar">
                      {project.working.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium bg-purple-500/[0.03] border border-purple-500/20 p-3 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.05)]">
                          <RotateCw size={15} className="text-purple-400 mt-0.5 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Next Up */}
                  <div className="bg-black/20 rounded-2xl p-5 border border-white/[0.02] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-400" /> Next Backlog
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white/5 rounded-md text-gray-500">{project.next.length}</span>
                    </div>
                    <ul className="space-y-3 flex-1 overflow-y-auto max-h-[320px] pr-1 custom-scrollbar">
                      {project.next.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 opacity-60 bg-white/[0.01] border border-white/5 p-3 rounded-xl hover:opacity-90 transition-opacity duration-200">
                          <Hourglass size={15} className="text-blue-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProject;