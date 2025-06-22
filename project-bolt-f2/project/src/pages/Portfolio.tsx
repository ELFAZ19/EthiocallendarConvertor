import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Filter,
  Star,
  Calendar,
  Users,
  Code,
  Zap,
  Eye,
} from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "WeatherSphere",
      category: "Web Development",
      image: "/images/weathersphere.png",
      description: "Elegant weather app using React and OpenWeather API",
      technologies: [
        "React",
        "OpenWeather API",
        "Framer Motion",
        "Styled Components",
        "Context API",
      ],
      github: "https://github.com/Elfaz19/weathersphere",
      live: "https://weathersphere-web.netlify.app/",
      year: "2025",
      duration: "3 days",
      team: "Solo Project",
      status: "Published",
      longDescription:
        "WeatherSphere is a polished, modern web application that provides accurate, real-time weather forecasts using OpenWeather's data services. With location tracking and city-based search, users can view current and upcoming weather trends, animated with smooth transitions and tailored UI. Designed to deliver performance and aesthetics on every device.",
      features: [
        "Real-time weather updates using geolocation",
        "Autocomplete city search functionality",
        "5-day animated weather forecast",
        "Mobile-first responsive layout",
        "Framer Motion-powered smooth animations",
        "Styled Components for maintainable styling",
      ],
      challenges:
        "Ensuring smooth geolocation permission handling and consistent UI responsiveness across devices.",
      results:
        "Achieved a seamless and attractive UX, with plans to integrate voice-based search and hourly forecasting in future updates.",
    },

    {
      id: 2,
      title: "Luxora Store (Landing E‑Commerce Site)",
      category: "Web Development",
      image: "/images/LUXORA.png",
      description:
        "Static multi‑page e‑commerce storefront built with HTML, CSS & JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ELFAZ19/luxora-store",
      live: "https://elfaz19.github.io/luxora-store/",
      year: "2025",
      duration: "2 weeks",
      team: "Solo Project",
      status: "Live",
      longDescription:
        "Luxora Store is a front‑end focused e‑commerce site showcasing an attractive, responsive storefront with multiple pages including home, categories, shop, about, and contact. It features clean layout, basic interactivity powered by JavaScript, and is a showcase of static site design and user flow.",
      features: [
        "Multi‑page layout: home, shop, categories, about, contact",
        "Static product browsing with basic JS-driven interactions",
        "Fully responsive design suitable for desktop and mobile",
        "Clean, well‑structured assets: CSS, JS, data, and media folders",
      ],
      challenges:
        "Structuring reusable static pages across several views and managing assets for responsive design.",
      results:
        "A polished, live storefront demo perfectly suited to showcase layout/design skills and front‑end fundamentals.",
    },
    {
      id: 3,
      title: "QR Code Generator",
      category: "Web Development",
      image: "/images/qrCodeApp.png",
      description:
        "Instant QR code generator with custom styling and download support",
      technologies: ["HTML", "CSS", "JavaScript", "QRCode.js"],
      github: "https://github.com/ELFAZ19/qr-code-generator",
      live: "https://elfaz19.github.io/qr-code-generator/",
      year: "2025",
      duration: "2 days",
      team: "Solo Project",
      status: "Live",
      longDescription:
        "A lightweight, responsive web application that allows users to generate QR codes instantly from any text or URL input. Built using vanilla JavaScript and styled with CSS, this tool also allows users to download generated codes and apply simple styling. It's fast, intuitive, and mobile-friendly.",
      features: [
        "Real-time QR code generation from text or URLs",
        "Downloadable QR codes in PNG format",
        "Customizable input with instant preview",
        "Clean and mobile-responsive UI",
        "No backend – works entirely in-browser",
      ],
      challenges:
        "Ensuring QR code scaling and readability on various screen sizes while preserving output quality.",
      results:
        "Deployed as a live utility tool used by dozens of users for personal, academic, and marketing purposes.",
    },
    {
      id: 4,
      title: "ሄርማ",
      category: "graphics Design",
      image: "/images/book.png",
      description:
        "Spiritual book cover design with custom Ethiopian theme and full layout (front, spine, back)",
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Typography",
        "Print Design",
      ],
      github: null,
      live: null,
      year: "2025",
      duration: "1 days",
      team: "Solo Project",
      status: "Completed",
      longDescription:
        "This is a full book cover design project for a spiritual Amharic book titled 'ሄርማ'. The cover includes front, spine, and back sides. The artwork features a shepherd with sheep in a calm, natural setting—symbolizing peace and care. The typography uses clear and traditional Amharic font styles that blend with the cultural theme. It was prepared for print with barcode and pricing info, ready for publication.",
      features: [
        "Front, spine, and back cover layout",
        "Warm and traditional Ethiopian art style",
        "Clear Amharic typography for title and author",
        "Print-ready layout with ISBN and pricing",
        "Balanced design for spiritual and visual impact",
      ],
      challenges:
        "Blending spiritual tone with visual clarity while respecting cultural aesthetics and print alignment.",
      results:
        "Delivered successfully to the client for print use. The author was highly satisfied with the meaningful, professional presentation.",
    },
    {
      id: 5,
      title: "Fre Ande Haynanot Media",
      category: "graphics Design",
      image: "/images/brandFre.png",
      description:
        "Sacred typographic logo and brand materials for Sunday School media crew",
      technologies: ["Adobe Illustrator", "Typography", "Graphic Design"],
      github: "",
      live: "",
      year: "2023",
      duration: "2 weeks",
      team: "Solo Project",
      status: "Adopted",
      longDescription:
        "A spiritually inspired brand identity featuring Ethiopian orthodox tewahdo church thoughts ,bold design andtypography, representing faith and growth. Loved by the entire Sunday School community, it serves as the visual foundation for all media crew materials.",
      features: [
        "Modern sacred typography",
        "Numerical motif integration",
        "High-contrast design for versatility",
        "Digital & print-ready assets",
        "Team-approved visual identity",
      ],
      challenges:
        "Balancing contemporary design with traditional spiritual symbolism while ensuring broad appeal.",
      results:
        "Fully adopted by the Sunday School media crew, unifying all communications with a recognizable sacred aesthetic.",
    },
    {
      id: 6,
      title: "Ummi Clinic Branding",
      category: "graphics Design",
      image: "/images/printableDesign.png",
      description:
        "Printable banners and social media graphics for a pediatric clinic, featuring urgent care and specialized services",
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Typography",
        "Print Design",
      ],
      github: "",
      live: "",
      year: "2024",
      duration: "3 days",
      team: "Solo Project",
      status: "Delivered & Approved",
      longDescription:
        "A visually urgent yet compassionate design for Ummi Clinic's pediatric services, combining clear service listings (24/7 care, child vaccinations, ultrasounds) with bold typography and medical symbolism. The client loved the balance of professionalism and approachability for their community-focused clinic.",
      features: [
        "Bilingual service listings (Afan Oromo)",
        "Hierarchical typography for urgent information",
        "Print-ready banner designs",
        "Social media-optimized variants",
        "Color-coded service categories",
        "Clinic contact details integration",
      ],
      challenges:
        "Organizing dense medical information while maintaining visual clarity and cultural sensitivity for diverse patients.",
      results:
        "Highly praised by Ummi Clinic for boosting visibility and patient engagement. Now used across their physical clinic and digital platforms.",
    },
    {
      id: 7,
      title: "Mahletay",
      category: "Mobile App",
      image: "/images/mahletay.png",
      description:
        "An inspiring Android app designed for Sunday school students and anyone interested in accessing scripts (poems) of traditional hymns.",
      technologies: ["Java", "Android SDK", "Firebase", "XML"],
      github: "",
      live: "",
      year: "2022",
      duration: "1 year",
      team: "Solo Project",
      status: "Completed",
      longDescription:
        "Mahletay V1.2 is a feature-rich Android application tailored for Sunday schools and spiritual learners. Developed using Java and Android SDK, it enables offline access and allows users to add new hymns with ease. The app features a clean, user-friendly Material Design interface to enhance the experience.",
      features: [
        "Version 1.2 stable release",
        "Optimized for Android 9 and above",
        "Offline access to hymn scripts",
        "Add and manage your own hymns",
      ],
      challenges:
        "One of the main challenges was ensuring proper memory and storage management for offline data, especially on low-end devices, during the one-year development process.",
      results:
        "Successfully launched and used by local Sunday schools. Received positive feedback for its simplicity and usability in spiritual learning environments.",
    },
    {
      id: 8,
      title: "Note App",
      category: "Mobile App",
      image: "/images/noteapp.png",
      screenshots: ["noteapp2.jpg"],
      description:
        "A feature-rich Android note-taking application offering secure locking, smart categorization, and strong privacy controls.",
      technologies: ["Java", "Android SDK", "SQLite", "Material Design"],
      github: "",
      live: "",
      year: "2021",
      duration: "6 months",
      team: "Solo Project",
      status: "Completed",
      longDescription:
        "This intuitive note-taking app provides a seamless writing and organizing experience, including secure PIN-locked notes, smart categories like Important, Private, and Deleted, and date-based sorting. Built with Material Design and SQLite, it delivers reliable performance and full offline functionality.",
      features: [
        "PIN protection for private notes",
        "Categorized views: All, Important, Private, Deleted",
        "Chronological sorting (e.g., 'Sat, 22 Feb 2028')",
        "Real-time search functionality",
        "Customizable light and dark themes",
        "Fully offline with SQLite storage",
        "One-tap 'New Note' creation for speed",
      ],
      challenges:
        "Ensuring secure data encryption for private notes without compromising performance across various Android versions.",
      results:
        "Widely appreciated for its clean interface and practical features. The locking and privacy system received especially positive feedback from users.",
    },    
    {
      id: 9,
      title: "E-Commerce app",
      category: "Mobile App",
      image: "/images/e-commerceApp.png",
      screenshots: [
        "5962987407148173746_121.jpg",
        "5962987407148173747_121.jpg",
      ],
      description:
        "Amazon-like e-commerce app with order tracking, user profiles, and seasonal promotions",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST API"],
      github: "https://github.com/example/e-commerce-app",
      live: "",
      year: "2024",
      duration: "3 months",
      team: "Solo Project ",
      status: "In Development",
      longDescription:
        "A full-featured e-commerce app supporting product browsing (watches, electronics, apparel), order tracking, and user profiles. Includes promotional systems (e.g., '20% Winter Discount'), search functionality, and Firebase-backed data management. Designed with Flutter for cross-platform performance.",
      features: [
        "User profiles with settings/contact (Elfazdejene@gmail.com)",
        "Order management (Active/Completed/Cancel)",
        "Product catalog (Rolex, Puma, Apple, etc.)",
        "Winter discounts & promotional banners",
        "Search functionality ('Search here')",
        "Most Popular/Featured product sections",
        "Responsive Flutter UI (Material Design)",
      ],
      challenges:
        "Implementing real-time order tracking and synchronizing Firebase data with payment gateways.",
      results:
        "Core features completed (profile, orders). Next: Integrate payment APIs and scale product inventory.",
    },
    {
      id: 10,
      title: "Yeme Demer Tiwlid Library System",
      category: "Desktop Application",
      image: "/images/library.png",
      description:
        "Comprehensive JavaFX-based library system with user roles, loan tracking, analytics, and advanced UI features",
      technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
      github: "https://github.com/ELFAZ19/library-mgmt-system-by-javafx",
      live: "",
      year: "2025",
      duration: "2 months",
      team: "5 Members",
      status: "Production-Ready",
      longDescription:
        "The Yeme Demer Tiwlid Library Management System is a full-featured desktop application developed with JavaFX, providing an intuitive, secure and visually polished interface for managing library operations. The system offers complete functionality for handling book inventories, tracking loan activities, managing users, and visualizing data with real-time analytics. Designed with a modern MVC architecture, asynchronous database operations, and responsive interface elements, it offers a seamless user experience for both librarians and administrators.",
      features: [
        "User authentication system with role-based access (Admin, Librarian)",
        "Secure password hashing (SHA-256) and session tracking",
        "CRUD operations for book management with cover upload",
        "Loan system with borrower info, return status, and overdue detection",
        "Advanced filtering, pagination, and search functionality",
        "Interactive dashboard with live statistics and visual charts",
        "Theme toggle (dark/light) with animated transitions",
        "Data export to CSV for analysis and reporting",
        "Modal dialogs and smooth UI transitions for better UX",
      ],
      challenges:
        "Creating a reactive, user-friendly UI while ensuring database integrity and optimizing multi-threaded operations in JavaFX.",
      results:
        "A production-grade, scalable library system with role-based access control and intuitive data visualization tools, ideal for real-world library environments.",
    },
    {
      id: 11,
      title: "Modern Tabbed Text Editor",
      category: "Desktop Application",
      image: "/images/texteditor.png",
      description:
        "Sophisticated JavaFX-based text editor with tabbed interface, rich formatting, advanced search, and customizable UI.",
      technologies: ["Java", "JavaFX", "FXML", "CSS"],
      github: "https://github.com/ELFAZ19/modern-tabbed-text-editor",
      live: "https://github.com/ELFAZ19/modern-tabbed-text-editor",
      year: "2025",
      duration: "1 weak",
      team: "5 Members",
      status: "Production-Ready",
      longDescription:
        "The Modern Tabbed Text Editor is a robust JavaFX desktop application tailored for developers, writers, and general users. Featuring a tabbed interface and advanced text editing tools, it supports rich formatting, intuitive navigation, customizable themes, and persistent session management. Built with a focus on responsiveness and user experience, it provides powerful find/replace tools, recent file tracking, and light/dark mode support, all within a modern and adaptive UI.",
      features: [
        "Tabbed interface for managing multiple documents",
        "Rich text formatting with font, size, and color controls",
        "Advanced find and replace with case sensitivity and full match options",
        "Light/Dark mode toggle with theme persistence",
        "Recent documents panel with search and filters",
        "Responsive layout that adapts to different window sizes",
        "Keyboard shortcuts for common operations (Ctrl+N, Ctrl+S, etc.)",
        "Persistent settings and UI state across sessions",
        "Error handling with user-friendly messages and prompts",
      ],
      challenges:
        "Implementing a dynamic and responsive UI with proper file handling and persistent state management while maintaining usability and performance.",
      results:
        "A feature-rich and user-friendly text editor suitable for both technical and non-technical users, offering modern design and seamless text editing capabilities.",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "graphics Design",
    "Mobile App",
    "Desktop Application",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Helper functions to determine which links to show
  const showGitHubLink = (project) => {
    return (
      project.github &&
      project.github !== "" &&
      project.category !== "graphics Design"
    );
  };

  const showLiveLink = (project) => {
    return (
      project.live &&
      project.live !== "" &&
      project.category === "Web Development"
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-6 py-3 glass-card rounded-full text-sm font-medium text-gold mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ✨ Featured Work & Case Studies
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6">
            My Portfolio
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gold font-semibold">Immerse yourself in</span>{" "}
            a collection of digital experiences where imagination meets
            intelligence. Every project is a bold expression of artistry and
            engineering blending sleek design, smart functionality, and
            purposeful storytelling.
            <span className="text-gold font-semibold">
              This portfolio isn't just a display of work{" "}
            </span>{" "}
            it's a living narrative of my commitment to crafting transformative
            solutions that resonate, inspire, and redefine what's possible.
          </p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gold via-cyan to-purple-500 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 tile-effect relative overflow-hidden ${
                    filter === category
                      ? "bg-gold text-black glow-gold"
                      : "text-gray-600 dark:text-gray-300 hover:text-gold hover:bg-gold/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>{category}</span>
                  </span>
                  {filter === category && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gold rounded-xl"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="glass-card rounded-3xl overflow-hidden tile-effect group cursor-pointer relative"
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project status badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Action buttons - Conditionally rendered based on project type */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {/* GitHub button - shown for all except graphics design */}
                        {showGitHubLink(project) && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5 text-white" />
                          </motion.a>
                        )}

                        {/* Live Preview button - shown only for web development */}
                        {showLiveLink(project) && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </motion.a>
                        )}
                      </div>
                      <motion.button
                        className="p-3 bg-gold/20 backdrop-blur-sm rounded-xl hover:bg-gold/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-5 h-5 text-gold" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gold font-medium bg-gold/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project stats */}
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan/10 to-transparent rounded-full transform -translate-x-12 translate-y-12" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="glass-card rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-3 bg-black/20 backdrop-blur-sm rounded-2xl hover:bg-black/40 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Project info overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          selectedProject.status === "Live"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {selectedProject.status}
                      </span>
                      <span className="text-gold font-medium bg-gold/20 px-4 py-2 rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-white/80 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project details grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 glass rounded-2xl">
                      <Calendar className="w-8 h-8 text-gold mx-auto mb-2" />
                      <div className="font-semibold text-gray-800 dark:text-white">
                        Duration
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {selectedProject.duration}
                      </div>
                    </div>
                    <div className="text-center p-4 glass rounded-2xl">
                      <Users className="w-8 h-8 text-cyan mx-auto mb-2" />
                      <div className="font-semibold text-gray-800 dark:text-white">
                        Team
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {selectedProject.team}
                      </div>
                    </div>
                    <div className="text-center p-4 glass rounded-2xl">
                      <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800 dark:text-white">
                        Year
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {selectedProject.year}
                      </div>
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Key features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Results */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Challenges
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Results
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gold/10 text-gold rounded-2xl font-medium border border-gold/20 hover:bg-gold/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons - Conditionally rendered */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Live Project button - only for web development */}
                    {showLiveLink(selectedProject) && (
                      <a
                        href={selectedProject.live}
                        className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-2xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 tile-effect"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Live Project</span>
                      </a>
                    )}

                    {/* GitHub button - shown for all except graphics design */}
                    {showGitHubLink(selectedProject) && (
                      <a
                        href={selectedProject.github}
                        className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 glass border-2 border-gold/30 text-gold font-semibold rounded-2xl hover:bg-gold/10 transition-all duration-300 tile-effect"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="glass-card p-12 rounded-3xl tile-effect relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
                Like What You See?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your next project to life
                with the same level of quality and attention to detail.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 tile-effect group text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
              </motion.a>
            </div>

            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold via-transparent to-cyan animate-pulse" />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
