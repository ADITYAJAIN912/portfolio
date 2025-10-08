"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Code, Zap, Sparkles } from "lucide-react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // React projects for student portfolio
  const mockProjects = [
    {
      id: 1,
      name: "personal-portfolio",
      description: "Modern responsive portfolio website built with Next.js and Framer Motion. Features dark/light themes, animations, and working contact form.",
      html_url: "https://github.com/ADITYAJAIN912/my-portfolio",
      homepage: "#",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      name: "Quiz",
      description: "Interactive quiz application built with React. Features multiple choice questions, score tracking, and timer functionality.",
      html_url: "https://github.com/ADITYAJAIN912/Quiz",
      homepage: "#",
      techStack: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 3,
      name: "Slider",
      description: "Responsive image slider component built with React. Includes navigation arrows, dots indicator, and smooth transitions.",
      html_url: "https://github.com/ADITYAJAIN912/Silder",
      homepage: "#",
      techStack: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 4,
      name: "todo-app",
      description: "Simple todo application built with React. Features add, edit, delete tasks with local storage for data persistence.",
      html_url: "https://github.com/ADITYAJAIN912/todo-app",
      homepage: "#",
      techStack: ["React", "JavaScript", "CSS", "HTML"],
    },
  ];

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setRepos(mockProjects);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "from-yellow-400 to-yellow-600",
      React: "from-blue-400 to-blue-600",
      HTML: "from-orange-400 to-orange-600",
      CSS: "from-blue-300 to-blue-500",
      Python: "from-green-400 to-green-600",
    };
    return colors[language] || "from-gray-400 to-gray-600";
  };


  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 shadow-soft"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-4 bg-muted rounded mb-4"
                />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  className="h-3 bg-muted rounded mb-2"
                />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  className="h-3 bg-muted rounded w-3/4"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4 text-primary"
            >
              <Code size={48} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some projects I've built during my learning journey. Each one taught me something new!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(repo)}
                layout
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  animate={{
                    background: [
                      "linear-gradient(45deg, var(--primary) 0%, transparent 50%)",
                      "linear-gradient(135deg, var(--accent) 0%, transparent 50%)",
                      "linear-gradient(225deg, var(--primary) 0%, transparent 50%)",
                      "linear-gradient(315deg, var(--accent) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors"
                >
                  <Sparkles size={16} />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {repo.name}
                    </motion.h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-primary/60 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-muted-foreground text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {repo.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {repo.techStack?.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getLanguageColor(tech)}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-2">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover effect border */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 2px rgba(59, 130, 246, 0.1)",
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4 text-accent"
            >
              <Zap size={32} />
            </motion.div>
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my GitHub profile for all my projects and contributions!
            </p>
            <motion.a
              href="https://github.com/ADITYAJAIN912"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors shadow-soft hover:shadow-medium"
            >
              <Github size={20} />
              <span>View All Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
