import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const ContactUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Office",
      details: [
        "MASMA Headquarters",
        "Solar Energy Complex",
        "Mumbai, Maharashtra - 400001",
      ],
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Number",
      details: ["+91 22 1234 5678", "+91 22 1234 5679"],
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: ["info@masma.org", "support@masma.org"],
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const ContactCard = ({ contact, index }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className={`inline-flex items-center justify-center w-14 h-14 bg-[#005aa8] rounded-2xl text-white mb-4`}
      >
        {contact.icon}
      </div>
      <h3 className="text-xl font-bold text-[#ed6605] mb-3">{contact.title}</h3>
      <div className="space-y-2">
        {contact.details.map((detail, idx) => (
          <p key={idx} className="text-gray-600">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-20 pt-40 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with MASMA for solar energy solutions, partnerships,
            and support. We're here to help you harness the power of the sun.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Contact Information Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((contact, index) => (
              <ContactCard key={index} contact={contact} index={index} />
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#005aa8] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                <div className="w-16 h-1 bg-[#ed6605] rounded-full mt-2"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="solar-installation">
                        Solar Installation
                      </option>
                      <option value="membership">MASMA Membership</option>
                      <option value="training">Training Programs</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005aa8] focus:border-transparent transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-[#ed6605] text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Regional Offices */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#005aa8] mb-4">Map</h3>
                <div className="space-y-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.237191498001!2d73.860219!3d18.469644000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8ab1109a25%3A0xb010aff5c75f1c92!2sMaharashtra%20Solar%20Manufacturers%20Association!5e0!3m2!1sen!2sin!4v1763985561571!5m2!1sen!2sin"
                    width="350"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#005aa8] rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="text-blue-100 mb-4">
                  Follow us on social media for the latest updates on solar
                  energy initiatives.
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaFacebook />,
                      label: "Facebook",
                    },
                    {
                      icon: <FaTwitter />,
                      label: "Twitter",
                    },
                    {
                      icon: <FaLinkedin />,
                      label: "LinkedIn",
                    },
                    {
                      icon: <FaInstagram />,
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-[#ed6605]`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
