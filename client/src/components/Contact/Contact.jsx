import { useState } from "react";
import { Mail, Calendar, Send, Sparkles, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: null, text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        text: "Please fill out all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, text: "" });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "No subject",
        message: formData.message,
      };

      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ea3foxp";

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_hj2go46";

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "fi-G65AwQQEZUPQXR";

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        }
      );

      if (response.status === 200) {
        setStatus({
          type: "success",
          text: "✅ Message sent! I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(`Unexpected status: ${response.status}`);
      }
    } catch (error) {
      console.error("Full EmailJS error:", error);

      let errorText =
        "❌ Failed to send. Please try again later or email me directly.";

      if (error.text) {
        errorText += ` (${error.text})`;
      }

      setStatus({
        type: "error",
        text: errorText,
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus({ type: null, text: "" });
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0b0b0f] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#A3FF12]/10 px-4 py-1.5 text-xs font-bold text-[#A3FF12] uppercase tracking-wider mb-3 select-none">
            <Mail size={12} className="animate-pulse" />
            Connect
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Start a Conversation
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            Have a project in mind, want to hire me, or just discuss MERN stack
            web applications? Let's connect!
          </p>
        </div>

        <div>
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Let's build something epic
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  I typically respond to inquiries within 24 hours. Connect with
                  me on social platforms or send an email directly.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:codebyvineet1611@gmail.com"
                  className="flex items-center gap-4 rounded-2xl bg-[#181A20] border border-white/5 p-4 hover:border-[#A3FF12]/20 transition-all group"
                >
                  <div className="rounded-xl bg-[#0b0b0f] p-3 text-[#A3FF12] border border-white/5">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block select-none">
                      Direct Email
                    </span>

                    <span className="text-sm font-bold text-white group-hover:text-[#A3FF12] transition-colors">
                      codebyvineet1611@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+916268923703"
                  className="flex items-center gap-4 rounded-2xl bg-[#181A20] border border-white/5 p-4 hover:border-[#A3FF12]/20 transition-all group"
                >
                  <div className="rounded-xl bg-[#0b0b0f] p-3 text-[#A3FF12] border border-white/5">
                    <Phone size={20} />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block select-none">
                      Phone Number
                    </span>

                    <span className="text-sm font-bold text-white group-hover:text-[#A3FF12] transition-colors">
                      +91 62689 23703
                    </span>
                  </div>
                </a>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/vineetpancheshwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#181A20] border border-white/5 p-4 hover:border-[#A3FF12]/20 transition-all group"
                  >
                    <GithubIcon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                    <span className="text-xs font-bold text-white">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#181A20] border border-white/5 p-4 hover:border-[#A3FF12]/20 transition-all group"
                  >
                    <LinkedinIcon
                      size={20}
                      className="text-gray-400 group-hover:text-[#A3FF12] transition-colors"
                    />
                    <span className="text-xs font-bold text-white">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Intro */}
            <div className="mt-8 rounded-3xl bg-gradient-to-tr from-purple-950/20 via-[#181A20] to-[#A3FF12]/5 border border-white/5 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 h-16 w-16 rounded-full bg-[#A3FF12]/5 blur-lg" />

              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-[#A3FF12]" size={16} />
                <span className="text-xs font-bold text-[#A3FF12] uppercase tracking-wider select-none">
                  Quick Intro
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                Want to jump on a call?
              </h4>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Let's plan out your website MVP features, timelines, and budgets
                in a quick 15-minute introductory call.
              </p>

              <a
                href="https://cal.com/codeby-vineet-1611/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-6 py-2.5 text-sm font-bold text-black hover:bg-[#8fE010] transition-colors shadow-[0_0_20px_rgba(163,255,18,0.1)] hover:shadow-[0_0_25px_rgba(163,255,18,0.3)]"
              >
                Book a Meeting
                <Sparkles size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;