import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .send(
        "service_f9m4c6e",
        "template_e3a812d",
        formData,
        "HuAjN48cJpg9VCTAY"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
          setIsSending(false);
        }
      );
  };

  const contactInfo = [
    {
      id: 1,
      icon: <MdEmail className="text-blue-400 text-2xl mt-1" />,
      title: "Email",
      value: "mdrezuanislamridoy@gmail.com",
    },
    {
      id: 2,
      icon: <BiPhone className="text-blue-400 text-2xl mt-1" />,
      title: "Phone",
      value: "+880 1735-699781",
    },
    {
      id: 3,
      icon: <BiLocationPlus className="text-blue-400 text-2xl mt-1" />,
      title: "Address",
      value: "Mohakhali, Dhaka, Bangladesh",
    },
  ];

  return (
    <div
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="contact"
    >
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-16 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-emerald-600/20" />
        <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <FaRocket className="text-white text-2xl" />
          </motion.div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Amazing Together
            </span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Have a project in mind? Looking for a dedicated backend developer? 
            I'm currently available for new opportunities and exciting collaborations.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-sm font-medium">Currently available for hire</span>
          </div>
        </div>
      </motion.div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Reach Out
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-4"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-slate-700/30">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-200">{item.title}</p>
                  <span className="text-gray-400 text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Map or extra info */}
          <div className="mt-8 p-5 bg-slate-900/40 rounded-xl border border-slate-700/30">
            <p className="text-slate-300 text-sm font-medium mb-2">⏰ Response Time</p>
            <p className="text-slate-400 text-sm">
              I typically respond within <span className="text-blue-400 font-medium">24 hours</span>. 
              For urgent inquiries, feel free to call directly.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-slate-700/30">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 rounded-xl bg-slate-900/70 border border-slate-700/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl bg-slate-900/70 border border-slate-700/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full p-3 rounded-xl bg-slate-900/70 border border-slate-700/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none placeholder:text-slate-600"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`cursor-none w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl py-3.5 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all ${
                isSending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? (
                <div className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin fill-white inline-block"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="ml-2">Sending...</span>
                </div>
              ) : (
                "Send Message 🚀"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
