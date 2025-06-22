import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Palette,
  Globe,
  Award,
  Users,
  Coffee,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  Heart,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Monitor,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const skills = [
    {
      name: "Frontend Development",
      icon: Monitor,
      level: 95,
      color: "text-blue-400",
      category: "frontend",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 85,
      color: "text-purple-400",
      category: "design",
    },
    {
      name: "React & Next.js",
      icon: Globe,
      level: 92,
      color: "text-cyan-400",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: Code2,
      level: 88,
      color: "text-blue-500",
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: Zap,
      level: 85,
      color: "text-green-400",
      category: "backend",
    },
    {
      name: "app Development (DART,Android)",
      icon: Smartphone,
      level: 80,
      color: "text-pink-400",
      category: "mobile",
    },
    {
      name: "Database Design",
      icon: Database,
      level: 87,
      color: "text-orange-400",
      category: "backend",
    },
    {
      name: "Cloud Services",
      icon: Cloud,
      level: 83,
      color: "text-sky-400",
      category: "devops",
    },
    {
      name: "Version Control",
      icon: GitBranch,
      level: 90,
      color: "text-red-400",
      category: "tools",
    },
  ];

  const experience = [
    {
      year: "2022 – Present",
      title: "Full Stack Developer & Designer",
      company: "Freelance & Projects",
      description:
        "Building end-to-end web and mobile applications by combining frontend and backend expertise with creative design. Leading projects that deliver seamless user experiences, scalable functionality, and striking visual design. Mentor peers and continuously adopt modern technologies to solve complex challenges.",
      achievements: [
        "Developed the multifunctional mobile app Muyme, enhancing local community services",
        "Led graphic design initiatives, producing logos, branding, and promotional materials for various organizations",

        "Conducted training sessions on design and development best practices",
        "Developed around 10 projects",
      ],
      technologies: ["React", "Node.js", "Express.js", "mySQL"],
    },
    {
      year: "2018 – Present",
      title: "Full Stack Developer",
      company: "",
      description:
        "Overseeing design and media efforts for church programs and events. I lead a team of creatives, design course materials, teach graphic design, and produce logos, social media visuals, and promotional content that elevate community engagement.",
      achievements: [
        "Designed branding and logos for 5+ organizations",
        "Designed full brand for 3+ organizations",
        "Managed social medias for 3+ organizations",
        "Taught design skills to new team members and students",
        "Led the graphics team in visual strategy and content planning",
      ],
      technologies: ["Adobe Photoshop", "Illustrator", "Lightroom", "Pixellab"],
    },
    {
      year: "2021 – 2022",
      title: "Mobile App Developer (Java)",
      company: "",
      description:
        "Developed a real-world mobile application using Java and Android Studio as part of project for a local company. I was responsible for building the app’s core functionalities, integrating backend systems, and ensuring a smooth, user-friendly experience.",
      achievements: [
        "Built and deployed a fully functional mobile app using Java (Android Studio)",
        "Launched 2+ products",
      ],
      technologies: ["Java", "Android Studio", "MySQL", "Firebase "],
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "30+",
      label: "Projects Completed",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: Users,
      value: "20+",
      label: "Happy Clients",
      color: "text-cyan",
      bgColor: "bg-cyan/10",
    },
    {
      icon: Coffee,
      value: "50+",
      label: "Cups of Coffee",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
    },
    {
      icon: Star,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "I believe every pixel, every line of code, and every design choice has a purpose. Excellence lives in the details and I’m committed to delivering work that not only meets expectations, but consistently raises the bar.",
      color: "text-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "The digital world moves fast and I move with it. I embrace emerging technologies and creative strategies to solve complex problems with fresh, forward-thinking solutions that make a real impact.",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "I build with intention crafting scalable, stable, and sustainable solutions that clients can count on. My work is designed not just for today, but to grow and perform long into the future.",
      color: "text-green-500",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "I’m a lifelong learner and a relentless improver. Whether it’s expanding my own skillset or helping clients reach new heights, growth is at the core of everything I do.",
      color: "text-purple-500",
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

  const tabs = [
    { id: "journey", label: "My Journey", icon: Rocket },
    { id: "values", label: "Core Values", icon: Heart },
    { id: "approach", label: "My Approach", icon: Layers },
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Hero Section */}
        <motion.section
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="py-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-gold"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={heroInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  🚀 Passionate Developer & Designer
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="block text-gray-800 dark:text-white mb-2">
                    Crafting
                  </span>
                  <span className="block gradient-text">
                    Digital Excellence
                  </span>
                </motion.h1>

                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-gold via-cyan to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: 96 } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>
                  I'm{" "}
                  <span className="text-gold font-semibold">
                    Yabsira Dejene
                  </span>
                  , also known as{" "}
                  <span className="text-gold font-semibold">ELFAZ</span>, a
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    passionate digital creator
                  </span>{" "}
                  merging
                  <span className="text-cyan font-semibold">
                    {" "}
                    technology
                  </span>{" "}
                  with
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    meaningful design
                  </span>
                  .
                </p>
                <p>
                  With{" "}
                  <span className="text-gold font-semibold">
                    5+ years of experience
                  </span>{" "}
                  in
                  <span className="text-cyan font-semibold">
                    {" "}
                    graphic design
                  </span>
                  ,<span className="text-cyan font-semibold"> web</span>, and
                  <span className="text-cyan font-semibold">
                    {" "}
                    app development
                  </span>
                  , I build
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    user-focused solutions
                  </span>{" "}
                  that create real value.
                </p>
                <p>
                  I believe{" "}
                  <span className="text-cyan font-semibold">innovation</span>{" "}
                  and
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    creativity
                  </span>{" "}
                  drive change. Whether crafting apps or visuals, I aim to{" "}
                  <span className="text-gold font-semibold">
                    empower users
                  </span>{" "}
                  and
                  <span className="text-gold font-semibold"> exceed goals</span>
                  .
                </p>
                <p>
                  With a{" "}
                  <span className="text-cyan font-semibold">
                    forward-thinking mindset
                  </span>{" "}
                  and passion to
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    make impact
                  </span>
                  , I'm shaping digital experiences that leave a
                  <span className="text-gold font-semibold">
                    {" "}
                    lasting impression
                  </span>
                  .
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {[
                  {
                    icon: MapPin,
                    text: "Dire Dawa, Ethiopia",
                    color: "text-red-500",
                  },
                  {
                    icon: Calendar,
                    text: "5+ Years Experience",
                    color: "text-blue-500",
                  },
                  {
                    icon: Heart,
                    text: "Passionate Creator",
                    color: "text-pink-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full tile-effect group"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Enhanced floating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 border-2 border-gold/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-12 border border-cyan/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-16 border border-purple-400/20 rounded-full"
                />

                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <motion.div
                    className="relative overflow-hidden rounded-3xl"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src="/images/profile2.png"
                      alt="About Me"
                      className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover profile-glow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-cyan/20 rounded-3xl" />

                    {/* Floating achievement badges - Fixed positioning */}
                    <motion.div
                      className="absolute top-4 right-4 glass-card p-3 rounded-2xl"
                      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <Award className="w-6 h-6 text-gold" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 left-4 glass-card p-3 rounded-2xl"
                      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    >
                      <Code2 className="w-6 h-6 text-cyan" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Interactive Tabs Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Get to Know Me Better
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what drives me, my core values, and the approach I take
              to every project
            </p>
          </motion.div>

          {/* Enhanced responsive filter section */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 rounded-2xl w-full max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 text-sm sm:text-base ${
                      activeTab === tab.id
                        ? "bg-gold text-black"
                        : "text-gray-600 dark:text-gray-300 hover:text-gold"
                    }`}
                  >
                    <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "journey" && (
              <div className="glass-card p-8 rounded-3xl tile-effect">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  My Development Journey
                </h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    My journey into technology began long before I wrote my
                    first line of code. As a child, I was the one dismantling
                    electronics just to understand how they worked driven by an
                    endless curiosity and a desire to fix what others had given
                    up on.
                  </p>
                  <p>
                    That passion for problem-solving became the foundation of
                    everything I do today. What started with wires and broken
                    devices evolved into building real-world solutions through
                    design and development. From mobile apps to full websites
                    and visual systems, I’ve turned my curiosity into a
                    purpose-driven career.
                  </p>
                  <p>
                    Over the years, I’ve learned that technology is more than
                    tools and code it’s about understanding people, solving
                    meaningful problems, and bringing ideas to life in ways that
                    inspire and empower.{" "}
                  </p>
                  <p>
                    Today, I create with intention: blending innovation with
                    thoughtful design to build digital experiences that are not
                    only functional, but impactful. Every project is a chance to
                    gFFrow, to solve, and to leave something better than I found
                    it.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="glass-card p-8 rounded-3xl tile-effect group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div
                      className={`w-12 h-12 ${value.color} bg-current/10 rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "approach" && (
              <div className="glass-card p-8 rounded-3xl tile-effect">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  My Development Approach
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Planning",
                      description:
                        "I dive deep into your vision, goals, and user needs.This ensures a focused, strategic foundation for the project.",
                    },
                    {
                      step: "02",
                      title: "Design & Prototype",
                      description:
                        "I create clean, intuitive designs and interactive prototypes.This helps visualize the final product and refine user experience.",
                    },
                    {
                      step: "03",
                      title: "Develop & Deliver",
                      description:
                        "I build scalable apps, websites, or deliver polished graphics.Every solution is tested and ready for seamless launch.",
                    },
                  ].map((phase, index) => (
                    <div key={phase.step} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-black font-bold text-lg">
                          {phase.step}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                        {phase.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* Enhanced Skills Section */}
        <motion.section
          ref={skillsRef}
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className="py-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies
              for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass-card p-8 rounded-3xl tile-effect group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-xl ${skill.color} bg-current/10 mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-gold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold via-yellow-400 to-cyan rounded-full relative"
                        initial={{ width: 0 }}
                        animate={
                          skillsInView ? { width: `${skill.level}%` } : {}
                        }
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan/5 to-transparent rounded-full transform -translate-x-12 translate-y-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Experience Timeline */}
        <motion.section
          ref={experienceRef}
          variants={containerVariants}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          className="py-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of growth, learning, and impactful contributions across
              diverse projects and teams
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-cyan to-purple-500 transform lg:-translate-x-0.5 rounded-full" />

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Enhanced timeline dot */}
                  <motion.div
                    className="absolute left-4 lg:left-1/2 w-6 h-6 bg-gradient-to-br from-gold to-yellow-500 rounded-full transform lg:-translate-x-3 z-10 shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(250, 204, 21, 0.4)",
                        "0 0 0 10px rgba(250, 204, 21, 0)",
                        "0 0 0 0 rgba(250, 204, 21, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div
                    className={`w-full lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <motion.div
                      className="glass-card p-8 rounded-3xl ml-12 lg:ml-0 tile-effect group relative overflow-hidden"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <Briefcase className="w-6 h-6 text-gold mr-3" />
                          <span className="text-sm font-medium text-gold bg-gold/10 px-4 py-2 rounded-full">
                            {exp.year}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-cyan font-semibold mb-4">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                              >
                                <Star className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Animated background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/5 to-transparent rounded-full transform translate-x-20 -translate-y-20" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Stats Section */}
        <motion.section
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="py-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`text-center glass-card p-8 rounded-3xl tile-effect group relative overflow-hidden`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 ${stat.bgColor} rounded-3xl`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Continuous Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Committed to staying at the forefront of technology through
              ongoing education and professional development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl tile-effect group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-blue-500/10 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Computer Science Degree
                    </h3>
                    <p className="text-gold font-medium dark:text-yellow-300">
                      Dire Dawa University| Ethiopia
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Focused on software engineering, database systems, mobile
                  application development, and human-computer interaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl tile-effect group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-green-500/10 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Professional Development
                    </h3>
                    <p className="text-gold font-medium dark:text-yellow-300">
                      Self-Taught & Project-Based Learning
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Self-taught and project-driven, I've gained real-world skills
                  through hands-on experience and a passion for building.
                </p>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 mt-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                    <span>
                      Built full-stack web and mobile apps (Java Android) and
                      Dart
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-3" />
                    <span>
                      Led design teams and delivered professional visual content
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
