
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import ScrollFadeIn from "./ScrollInFade";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      access_key: "97473482-4ee0-4310-b9a9-47a94344881a",
      name,
      email,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        toast.error("Something went wrong.");
        setStatus("error");
      }
    } catch (error) {
      toast.error("An error occurred, please try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#000000] bg-[url('https://www.transparenttextures.com/patterns/argyle.png')] text-white py-20" id="contact">
      <ScrollFadeIn direction="up">
        <div className="container px-4 md:px-10 lg:px-24 mx-auto">
          <h1 className="text-3xl text-center font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Me
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Let's Talk
              </h2>
              <p className="mb-6 text-gray-300">
                I'm open to discussing web development projects and partnership
                opportunities.
              </p>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-400 mr-3" />
                  <span>+91 703-618-8347</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-green-400 mr-3" />
                  <a
                    href="mailto:srishylamburla1@gmail.com"
                    className="hover:underline"
                  >
                    srishylamburla1@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkedAlt className="text-green-400 mr-3" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              <form
                onSubmit={handleSend}
                className="bg-black p-6 rounded-xl shadow-lg space-y-6 shadow-purple-500/20 hover:scale-105 transition-transform duration-300 border border-gray-900"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Enter your message"
                    className="w-full mt-2 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
                >
                  {loading ? "Sending..." : "Send"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-400 mt-2">
                    ✅ Thank you for reaching out, I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500 mt-2">
                    ❌ Something went wrong, Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
};

export default Contact;
