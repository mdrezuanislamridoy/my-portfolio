import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
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
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10  text-gray-100"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-12">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 bg-gray-900/50 p-8 rounded-2xl shadow-md border border-blue-900/30 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold text-gray-200">{item.title}</p>
                  <span className="text-gray-400">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-900/50 p-8 rounded-2xl shadow-md border border-blue-900/30 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Contact Form
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
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-900/70 border border-blue-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
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
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-900/70 border border-blue-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
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
                placeholder="Write your message..."
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-900/70 border border-blue-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className={`cursor-none w-full bg-blue-500/20 text-blue-300 border border-blue-500 rounded-lg py-3 font-semibold hover:bg-blue-500/30 hover:text-white transition-all ${
                isSending ? "cursor-not-allowed" : ""
              }`}
            >
              {isSending ? (
                <div role="status flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-300 inline-block"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
