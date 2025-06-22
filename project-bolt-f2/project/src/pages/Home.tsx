// React & State Management
import React, { useEffect, useState } from "react";

// Icon Libraries
import { FaTelegram } from "react-icons/fa"; // Font Awesome Icons
import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

// Framer Motion for Animations
import { motion, useScroll, useTransform } from "framer-motion";

// Lucide React Icons
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Clock,
  FolderKanban,
  CheckCircle,
  SmilePlus,
} from "lucide-react";

// Routing
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/Yabsira_resume.pdf";
    link.download = "Yabsira_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const specialties = [
    {
      icon: FaCode,
      title: "Full-Stack Web Development",
      desc: "End-to-end solutions",
    },
    {
      icon: FaPalette,
      title: "Graphics Design",
      desc: "User-centered modern design",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      desc: "Lightning-fast powerful apps",
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Dynamic cursor follower - hidden on mobile */}
      <motion.div
        className="fixed w-6 h-6 bg-gold/30 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-4 lg:left-10 w-24 lg:w-32 h-24 lg:h-32 border border-gold/20 rotate-45 rounded-lg"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-4 lg:right-20 w-16 lg:w-24 h-16 lg:h-24 bg-cyan/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 lg:w-16 h-12 lg:h-16 border-2 border-purple-400/30 rounded-full"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10"
      >
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
          <div className="space-y-6 lg:space-y-8 order-1">
            <motion.div
              variants={itemVariants}
              className="space-y-4 lg:space-y-6"
            >
              <motion.div
                className="inline-block px-3 lg:px-4 py-2 glass-card rounded-full text-xs lg:text-sm font-medium text-gold"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                ✨ Available for new projects
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                <span className="block text-gray-800 dark:text-white mb-2">
                  Creative
                </span>
                <motion.span
                  className="block gradient-text relative"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Developer
                  <motion.div
                    className="absolute -right-2 lg:-right-4 top-0 w-1 lg:w-2 h-full bg-gold"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                <span className="text-gold font-semibold">
                  {" "}
                  My name is Yabsira Dejene,{" "}
                </span>
                I craft digital experiences that blend
                <span className="text-gold font-semibold"> innovation </span>
                with<span className="text-gold font-semibold"> aesthetics</span>
                .
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            >
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-size-200 bg-pos-0 hover:bg-pos-100 text-black font-semibold rounded-2xl transition-all duration-500 tile-effect overflow-hidden text-sm lg:text-base"
              >
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ArrowRight className="ml-2 w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>

              <motion.button
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 glass-card border-2 border-gold/30 text-gold font-semibold rounded-2xl hover:bg-gold/10 transition-all duration-500 tile-effect group text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
              >
                <Download className="mr-2 w-4 lg:w-5 h-4 lg:h-5 group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4 lg:space-x-6"
            >
              {[
                {
                  icon: FaTelegram,
                  href: "https://t.me/ELFAZ19",
                  label: "Telegram",
                  color:
                    "text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300",
                },
                {
                  icon: Github,
                  href: "https://github.com/ELFAZ19",
                  label: "GitHub",
                  color:
                    "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white",
                },
                {
                  icon: Linkedin,
                  href: "http://www.linkedin.com/in/yabsira-dejene",
                  label: "LinkedIn",
                  color:
                    "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
                },
                {
                  icon: Mail,
                  href: "mailto:Elfazdejene@gmail.com",
                  label: "Email",
                  color:
                    "text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 lg:p-4 glass-card rounded-2xl transition-all duration-300 group ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 lg:w-6 h-5 lg:h-6 transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Profile Section - Desktop only */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center lg:justify-end order-2"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute -inset-6 lg:-inset-8 rounded-full border border-gold/20"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity },
                }}
              />
              <motion.div
                className="absolute -inset-8 lg:-inset-12 rounded-full border border-cyan/20"
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity },
                }}
              />

              <motion.div
                className="relative z-10"
                animate={{ y: [-15, 15, -15] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/profilePic.png"
                    alt="Profile"
                    className="w-96 h-96 object-cover profile-glow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-cyan/20" />

                  {/* Floating skill badges - Fixed positioning */}
                  <motion.div
                    className="absolute top-4 right-4 glass-card px-3 py-2 rounded-xl"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-sm font-semibold text-gold">
                      Developer
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 glass-card px-3 py-2 rounded-xl"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <span className="text-sm font-semibold text-cyan">
                      Designer
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Profile Section - Above "What I Do Best" */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden flex justify-center mt-20 mb-32 relative z-0"
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-gold/20"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-cyan/20"
              animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity },
              }}
            />

            <motion.div
              className="relative z-10"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/profilePic.png"
                  alt="Profile"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover profile-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-cyan/20" />

                {/* Floating skill badges - Fixed positioning for mobile */}
                <motion.div
                  className="absolute top-3 right-3 glass-card px-2 py-1 rounded-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-xs font-semibold text-gold">
                    developer
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-3 left-3 glass-card px-2 py-1 rounded-lg"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <span className="text-xs font-semibold text-cyan">
                    Designer
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Specialties Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-12 lg:py-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 lg:mb-6">
              What I Do Best
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Specialized in creating exceptional digital experiences through
              innovative technology and thoughtful design
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                variants={itemVariants}
                className="group relative glass-card p-6 lg:p-8 rounded-3xl tile-effect overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <specialty.icon className="w-6 lg:w-8 h-6 lg:h-8 text-black" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2 lg:mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                    {specialty.desc}
                  </p>
                </div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full transform translate-x-12 lg:translate-x-16 -translate-y-12 lg:-translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-tr from-cyan/10 to-transparent rounded-full transform -translate-x-8 lg:-translate-x-12 translate-y-8 lg:translate-y-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 lg:py-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              {
                number: "30+",
                label: "Projects Delivered",
                icon: FolderKanban,
              },
              { number: "5+", label: "Years Experience", icon: Clock },
              { number: "20+", label: "Happy Clients", icon: SmilePlus },
              {
                number: "100%",
                label: "Client Satisfaction",
                icon: CheckCircle,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center glass-card p-4 lg:p-8 rounded-3xl tile-effect group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-3 lg:mb-4">
                  <stat.icon className="w-6 lg:w-8 h-6 lg:h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                </div>
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-1 lg:mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-xs lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 lg:py-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 lg:p-12 rounded-3xl tile-effect relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 lg:mb-6">
                Ready to Start Something Amazing?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
                Let's collaborate and bring your vision to life with
                cutting-edge technology and exceptional design.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 tile-effect group text-base lg:text-lg"
              >
                Let's Work Together
                <ArrowRight className="ml-2 lg:ml-3 w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold via-transparent to-cyan animate-pulse" />
            </div>
          </motion.div>
        </motion.section>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
