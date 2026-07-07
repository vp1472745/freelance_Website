import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "../../data/faq";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0b0b0f] border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <HelpCircle size={12} className="animate-pulse" />
            Support Help
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm">
            Answers to standard questions about freelance budgets, tech support timelines, and engineering collaborations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/5 bg-[#181A20] overflow-hidden transition-all duration-300"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`rounded-lg bg-[#0b0b0f] p-1.5 text-[#A3FF12] border border-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Answer Collapsible Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/5 p-6 bg-[#181A20]/50 text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
