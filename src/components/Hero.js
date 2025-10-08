"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [geometricShapes, setGeometricShapes] = useState([]);
  const [floatingParticles, setFloatingParticles] = useState([]);

  useEffect(() => {
    // Generate geometric shapes
    const shapes = [];
    for (let i = 0; i < 12; i++) {
      shapes.push({
        id: i,
        left: Math.random() * 90 + 5,
        top: Math.random() * 80 + 10,
        width: Math.random() * 20 + 10,
        height: Math.random() * 20 + 10,
        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
        animateX: Math.random() * 50 - 25,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 5,
      });
    }
    setGeometricShapes(shapes);

    // Generate floating particles
    const particles = [];
    for (let i = 0; i < 6; i++) {
      particles.push({
        id: i,
        left: 30 + Math.cos(i * 60 * Math.PI / 180) * 50,
        top: 30 + Math.sin(i * 60 * Math.PI / 180) * 50,
        delay: i * 0.2,
      });
    }
    setFloatingParticles(particles);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ADITYAJAIN912",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-jain-5013a42b9",
      icon: FaLinkedin,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 relative overflow-hidden">

      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Enhanced Grid Pattern - Much more visible in light mode */}
        <motion.div
          className="absolute inset-0 opacity-60 dark:opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.8) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </motion.div>

        {/* Large Background Gradient for Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/2 dark:via-accent/2 dark:to-secondary/2 opacity-80 dark:opacity-40" />

        {/* Moving Gradient Orbs - Much stronger in light mode */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-80 dark:opacity-30"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--accent) / 0.25) 50%, transparent 100%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-70 dark:opacity-25"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent) / 0.35) 0%, hsl(var(--primary) / 0.2) 50%, transparent 100%)`
          }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-2xl opacity-60 dark:opacity-20"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`
          }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />

        {/* Additional orbs for light mode richness */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-50 dark:opacity-15"
          style={{
            background: `radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, hsl(var(--accent) / 0.15) 50%, transparent 100%)`
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />

        <motion.div
          className="absolute top-1/6 right-1/6 w-48 h-48 rounded-full blur-2xl opacity-45 dark:opacity-18"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 65%)`
          }}
          animate={{
            scale: [0.9, 1.4, 0.9],
            x: [0, 20, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating Lines - Much more visible */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px opacity-70 dark:opacity-20"
            style={{
              height: '250px',
              left: `${10 + i * 12}%`,
              top: '15%',
              background: `linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.8), hsl(var(--accent) / 0.6), transparent)`
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.7, 0],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric Shapes for Visual Interest */}
        {geometricShapes.map((shape) => (
          <motion.div
            key={`shape-${shape.id}`}
            className="absolute opacity-20 dark:opacity-8"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              borderRadius: shape.borderRadius,
              background: `hsl(var(--primary) / 0.3)`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, shape.animateX, 0],
              rotate: [0, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10 10-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10 10 4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Light mode specific gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/2 to-accent/3 opacity-60 dark:opacity-0" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Profile Picture Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Profile Picture Container */}
            <motion.div
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm shadow-2xl overflow-hidden relative"
              animate={{
                rotate: [0, 2, -2, 0],
                borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(59, 130, 246, 0.3)"],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Profile Picture */}
              <img
                src="/photo.jpg"
                alt="Aditya Jain"
                className="w-full h-full object-cover object-center"
                style={{ transform: 'scale(1.15)' }}
              />

              {/* Animated Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating Particles around Profile */}
            {floatingParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 150 }}
          className="mb-8"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for work
          </motion.span>
        </motion.div>

        {/* Impressive Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight relative z-10"
            whileHover={{
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Aditya Jain
          </motion.h1>

          {/* Animated glow effect behind text */}
          <motion.div
            className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            style={{
              background: "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              filter: "blur(20px)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Aditya Jain
          </motion.div>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Aspiring Developer
          </motion.p>
        </motion.div>

        {/* Typewriter Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Building modern web applications with clean code and thoughtful design.
            Passionate about creating efficient solutions that make an impact.
          </motion.p>
        </motion.div>

        {/* Sophisticated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-foreground text-background rounded-lg font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10">View My Work</span>
            <motion.div
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              borderColor: "rgba(59, 130, 246, 0.5)",
              backgroundColor: "rgba(59, 130, 246, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Professional Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  y: -5,
                  scale: 1.2,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <IconComponent size={20} />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
