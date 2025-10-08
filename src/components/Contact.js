"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Heart, Sparkles, Star, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adijain982677@gmail.com",
      link: "mailto:adijain982677@gmail.com",
      color: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7440629448",
      link: "tel:+917440629448",
      color: "from-green-500 to-green-600",
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "https://maps.google.com/maps?q=Chennai,Tamil+Nadu,India",
      color: "from-red-500 to-red-600",
      delay: 0.2,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/ADITYAJAIN912",
      color: "hover:text-gray-600",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-jain-5013a42b9",
      color: "hover:text-blue-600",
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
    setError(null);

    try {
      // EmailJS configuration - All values configured!
      const serviceId = 'service_s4g888q';  // Your EmailJS service ID
      const templateId = 'template_2sn33hk';  // Your EmailJS template ID
      const publicKey = '0EMtvSkIItFfOuKP5';  // Your EmailJS public key

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-4 text-primary"
            >
              <MessageSquare size={48} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Whether you have a question,
              want to collaborate, or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h3
                  className="text-2xl font-semibold text-foreground mb-6"
                  whileHover={{ x: 5 }}
                >
                  Let&apos;s Connect
                </motion.h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: info.delay, duration: 0.6 }}
                        whileHover={{
                          x: 10,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border"
                      >
                        <motion.div
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white shadow-soft`}
                        >
                          <IconComponent size={20} />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </p>
                        </div>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          className="ml-auto text-primary/50 group-hover:text-primary transition-colors"
                        >
                          →
                        </motion.div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-border"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{
                          scale: 1.2,
                          y: -3,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground ${social.color} hover:shadow-medium transition-all duration-300`}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-card p-8 rounded-xl shadow-soft border border-border relative overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    background: [
                      "linear-gradient(45deg, var(--primary) 0%, transparent 50%)",
                      "linear-gradient(135deg, var(--accent) 0%, transparent 50%)",
                      "linear-gradient(225deg, var(--primary) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Floating sparkles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                    className="absolute text-primary/20"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 10}%`,
                    }}
                  >
                    <Sparkles size={12} />
                  </motion.div>
                ))}

                <div className="relative">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send me a message
                  </h3>

                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-green-500 mb-4"
                      >
                        <Heart size={48} />
                      </motion.div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Thank you!
                      </h4>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. I&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-950/50 dark:border-red-800 dark:text-red-300"
                        >
                          <AlertCircle size={20} />
                          <span className="text-sm">{error}</span>
                        </motion.div>
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <User size={16} className="inline mr-2" />
                          Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Mail size={16} className="inline mr-2" />
                          Email
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <MessageSquare size={16} className="inline mr-2" />
                          Message
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground resize-none"
                          placeholder="Tell me about your project or just say hello!"
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Message</span>
                          </>
                        )}

                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-border"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-4 text-accent"
            >
              <Star size={32} />
            </motion.div>
            <p className="text-muted-foreground text-lg mb-4">
              Ready to bring your ideas to life?
            </p>
            <motion.p
              className="text-foreground font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let&apos;s build something amazing together!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
