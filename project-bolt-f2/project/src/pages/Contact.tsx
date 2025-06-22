import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Calendar,
  Clock,
  User,
  Check,
  AlertCircle,
  Globe,
  Star,
  ArrowRight,
  Heart,
  CheckCircle,
} from "lucide-react";
import { FaPalette, FaMobileAlt, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [activeService, setActiveService] = useState(0);
  const controls = useAnimation();

  // Add this useEffect to reset form status after success/error
  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => {
        setFormStatus("idle");
      }, 4000); // Reset after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus("error");
      return;
    }

    try {
      setFormStatus("sending");

      if (!form.current) return;

      const serviceId = "service_0yzzr2n";
      const templateId = "template_mufvl4b";
      const userId = "vxelwKrfGv07_FoVB";

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      );

      if (response.status === 200) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setFormStatus("error");
    }
  };

  const FormErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      if (formStatus === "success" || formStatus === "error") {
        const timer = setTimeout(() => {
          setFormStatus("idle");
        }, 4000); // Reset after 4 seconds

        return () => clearTimeout(timer);
      }
    }, [formStatus]);

    return hasError ? (
      <div className="p-4 bg-red-100 text-red-700 rounded-xl">
        Form encountered an error. Please refresh the page.
      </div>
    ) : (
      <>{children}</>
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "Elfazdejene@gmail.com",
      description: "Drop me a line anytime",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      link: "mailto:Elfazdejene@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+251 5115 5327",
      description: "Available everyday, 2AM-8PM PST",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      link: "tel:+25151155327",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dire DAwa, Ethiopia",
      description: "Available for remote work worldwide",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      link: "https://maps.app.goo.gl/K1DsHY62BFfQFyb49",
    },
  ];

  const services = [
    {
      icon: FaPalette,
      title: "Graphics Design",
      description:
        "User-centered design that combines aesthetics with great meaning.",
      features: ["Research", "Prototyping", "Design process"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web apps built with modern, reliable tech that scales with you.",
      features: ["Full-Stack Solutions", "Powerful websites", "Flexible"],
    },
    {
      icon: FaMobileAlt,
      title: "App Development",
      description: "Strategic guidance for your digital transformation journey",
      features: [
        "Tech Stack Planning",
        "Performance Audit",
        "Code Review",
        "Team Training",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaTelegram,
      href: "https://t.me/ELFAZ19",
      label: "Telegram",
      color: "hover:text-sky-500",
      messages: "Contact me",
    },
    {
      icon: Github,
      href: "https://github.com/ELFAZ19",
      label: "GitHub",
      color: "hover:text-gray-800",
      messages: "Check me",
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/yabsira-dejene",
      label: "LinkedIn",
      color: "hover:text-blue-600",
      messages: "Follow me",
    },
    {
      icon: Mail,
      href: "mailto:Elfazdejene@gmail.com",
      label: "Mail",
      color: "hover:text-indigo-500",
      messages: "Contact me",
    },
  ];

  const testimonials = [
    {
      name: "Yunus Kindu",
      role: "COO, ARIF Tech PLC",
      content:
        "Exceptional work! The website exceeded our expectations and delivered on time.",
      rating: 5,
      avatar: "/images/yenus.png",
    },
    {
      name: "Grand Group",
      role: "HR",
      content:
        "Excellent work! Professional, creative, and perfectly delivered.",
      rating: 5,
      avatar: "/images/grand logo.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-6 py-3 glass-card rounded-full text-sm font-medium text-gold mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            🚀 Let's Create Something Amazing Together
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Master of graphic design, web development, and app creation turning
            ideas into bold, unforgettable digital experiences. I fuse
            creativity with technical mastery to build visuals and apps that
            captivate and perform flawlessly. Let's create powerful,
            user-focused solutions that leave a lasting mark.
          </p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gold via-cyan to-purple-500 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        {/* Services Overview */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              How I Can Help You
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored digital solutions crafted to fit your unique vision and
              goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`glass-card p-8 rounded-3xl tile-effect group cursor-pointer transition-all duration-500 ${
                  activeService === index ? "ring-2 ring-gold glow-gold" : ""
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setActiveService(index)}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Profile Section */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl tile-effect relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="relative">
                    <motion.img
                      src="/images/profile2.png"
                      alt="Profile"
                      className="w-24 h-24 rounded-3xl object-cover profile-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Available for New Projects
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ready to start your next digital adventure
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>Flexible Schedule</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Globe className="w-4 h-4 text-gold" />
                    <span>Remote Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Heart className="w-4 h-4 text-gold" />
                    <span>Passionate Work</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm currently accepting new projects and would love to discuss
                  how I can help bring your ideas to life. Let's create
                  something extraordinary together!
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {testimonials.map((testimonial, index) => (
                      <img
                        key={index}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gold">
                      25+ happy clients
                    </span>{" "}
                    and counting
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/5 to-transparent rounded-full transform translate-x-20 -translate-y-20" />
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block glass-card p-6 rounded-3xl tile-effect group transition-all duration-500 hover:glow-gold"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-2xl ${info.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gold font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-3xl tile-effect"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass rounded-2xl transition-all duration-300 group hover:glow-gold ${social.color} flex items-center space-x-3 text-gray-800 dark:text-gray-200`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-medium text-sm">{social.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {social.messages}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-3xl tile-effect"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                What Clients Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-gold pl-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <div className="text-xs">
                        <div className="font-medium text-gray-800 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500">{testimonial.role}</div>
                      </div>
                      <div className="flex ml-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-3xl tile-effect relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-4 bg-gold/10 rounded-2xl">
                    <Send className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Start Your Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tell me about your vision
                    </p>
                  </div>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-4 bg-white/80 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-4 bg-white/80 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/80 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-gray-800 dark:text-gray-200 appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="below-1,000">Below 1,000 Birr</option>
                        <option value="1,000-5,000">1,000 - 5,000 Birr</option>
                        <option value="5.000-10.000">
                          5,000 - 10,000 Birr
                        </option>
                        <option value="10,000-25,000">
                          10,000 - 25,000 Birr
                        </option>
                        <option value="25000-50000">
                          25,000 - 50,000 Birr
                        </option>
                        <option value="50,000+">50,000 Birr+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/80 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-gray-800 dark:text-gray-200 appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="2-4weeks">2-4 weeks</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Brief project title"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white/80 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project goals, requirements, and any specific features you have in mind..."
                    />
                  </div>

                  <div className="relative">
                    <motion.button
                      type="submit"
                      disabled={
                        formStatus === "sending" || formStatus === "success"
                      }
                      className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                        formStatus === "success"
                          ? "bg-green-500 text-white"
                          : formStatus === "error"
                          ? "bg-red-500 text-white"
                          : "bg-gradient-to-r from-gold via-yellow-400 to-gold text-black"
                      }`}
                      whileHover={
                        formStatus === "idle"
                          ? {
                              scale: 1.02,
                              boxShadow:
                                "0 10px 25px -5px rgba(234, 179, 8, 0.2)",
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.98 }}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <div className="flex items-center justify-center space-x-2 relative z-10">
                        {formStatus === "sending" && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        )}
                        {formStatus === "success" && (
                          <Check className="w-5 h-5" />
                        )}
                        {formStatus === "error" && (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        <span>
                          {formStatus === "sending" && "Sending..."}
                          {formStatus === "success" && "Sent Successfully!"}
                          {formStatus === "error" && "Error - Try Again"}
                          {formStatus === "idle" && "Send Message"}
                        </span>
                      </div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced FAQ Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about working together
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-3xl tile-effect"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical response time?",
                  answer:
                    "I usually respond to emails within 24 hours on business days—often much sooner. Clear and timely communication is one of my top priorities.",
                },
                {
                  question: "Do you work with international clients?",
                  answer:
                    "Absolutely. I've successfully collaborated with clients across different time zones and am always flexible to ensure smooth communication and scheduling.",
                },
                {
                  question: "What's your project minimum?",
                  answer:
                    "I work on a wide range of projects—from quick design fixes or feature updates to full-scale website and mobile app development or graphics Design. No matter the size, let's talk about your goals.",
                },
                {
                  question: "Do you offer ongoing support?",
                  answer:
                    "Yes! I provide post-launch maintenance, performance monitoring, and long-term support packages to keep your site, app, or brand assets running flawlessly.",
                },
                {
                  question: "How do you handle project communication?",
                  answer:
                    "I value transparency and consistency. I provide regular updates, share progress through milestone reviews, and adapt to your preferred communication tools—whether that's email or Zoom.",
                },
                {
                  question: "What's your development process?",
                  answer: `My process is tailored to each project but generally follows these key phases:
Discovery → Design → Development or Production → Review & Testing → Launch or Delivery → Ongoing Support 

Whether you're hiring me for a mobile app, a modern website, or a graphic design project, this structured approach ensures your vision is understood, executed with precision, and supported long after delivery.`,
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white text-lg">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
