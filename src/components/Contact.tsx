import { motion } from 'framer-motion';
import { Send, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (submitBtn) submitBtn.disabled = true;

    try {
      // 🌍 Get IP + location
      const res = await fetch("https://ipapi.co/json/");
      const ipData = await res.json();

      const formData = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        message: (form.elements.namedItem("msg") as HTMLTextAreaElement).value,
        ip: ipData.ip || "Unknown",
        country: ipData.country_name || "Unknown",
        city: ipData.city || "Unknown",
        device: navigator.userAgent
      };

      // 🎯 Replace with your actual webhook/app URL
      // Note: Using no-cors mode, so you might not get a success response body
      await fetch("https://script.google.com/macros/s/AKfycbxowvklgn-_jz57q4fIcFO9l_AOhULjyRRV9PyvQdQd6p_6rm1N_gqFwQYK9ZPzDyk58g/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("🔥 Message sent successfully!");
      form.reset();

    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-sm"
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's create something extraordinary.
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
              <textarea
                name="msg"
                required
                rows={5}
                placeholder="Tell me about your concern..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>

      <footer className="mt-24 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};