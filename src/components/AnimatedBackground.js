"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);
  const [constellationDots, setConstellationDots] = useState([]);
  const [binaryColumns, setBinaryColumns] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          delay: Math.random() * 5,
          duration: Math.random() * 15 + 20,
          direction: Math.random() > 0.5 ? 1 : -1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    // Generate floating orbs
    const generateOrbs = () => {
      const newOrbs = [];
      for (let i = 0; i < 8; i++) {
        newOrbs.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          delay: Math.random() * 3,
          duration: Math.random() * 25 + 30,
          blur: Math.random() * 30 + 20,
        });
      }
      setOrbs(newOrbs);
    };

    // Generate constellation dots
    const generateConstellationDots = () => {
      const dots = [];
      for (let i = 0; i < 25; i++) {
        dots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
        });
      }
      setConstellationDots(dots);
    };

    // Generate binary columns
    const generateBinaryColumns = () => {
      const columns = [];
      for (let i = 0; i < 8; i++) {
        columns.push({
          id: i,
          x: i * 12,
          delay: i * 0.5,
          duration: 8 + i,
          content: Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')
        });
      }
      setBinaryColumns(columns);
    };

    generateParticles();
    generateOrbs();
    generateConstellationDots();
    generateBinaryColumns();
    setIsClient(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            opacity: 0.1,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 bg-primary/20 rounded-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-8 h-8 border-2 border-accent/30 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-20 w-4 h-12 bg-secondary/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* New animated shapes */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-3 h-3 bg-accent/25"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.3, 0.8, 1],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-primary/15"
        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        animate={{
          rotate: [0, -90, -180, -270, -360],
          x: [0, 15, -15, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10 dark:bg-accent/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, particle.direction * 150, 0],
            x: [0, particle.direction * 50, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          opacity: 0.05,
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
        }}
      />

      {/* Secondary mouse follower */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
          opacity: 0.03,
        }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
        }}
      />

      {/* Animated lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="lines"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              animate={{
                d: [
                  "M0,50 Q25,25 50,50 T100,50",
                  "M0,50 Q25,75 50,50 T100,50",
                  "M0,50 Q25,25 50,50 T100,50",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M50,0 Q25,25 0,50 T0,100"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              animate={{
                d: [
                  "M50,0 Q25,25 0,50 T0,100",
                  "M50,0 Q75,25 100,50 T100,100",
                  "M50,0 Q25,25 0,50 T0,100",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>

      {/* Enhanced constellation effect */}
      <div className="absolute inset-0 overflow-hidden">
        {constellationDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<', '>', '{', '}', '(', ')', ';', '='].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 text-2xl font-mono"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 60}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Enhanced code-like scrolling text effect */}
      <div className="absolute right-0 top-0 h-full w-40 opacity-[0.02] dark:opacity-[0.03] overflow-hidden">
        <motion.div
          className="text-xs font-mono leading-relaxed whitespace-pre text-foreground"
          animate={{ y: [0, -300] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {`const developer = {
  name: 'Alex Johnson',
  role: 'Junior Developer',
  skills: ['React', 'JS'],
  learning: true,
  passionate: true,
  coffee: Infinity
};

function buildFuture() {
  return dreams.map(
    dream => reality
  );
}

const journey = {
  start: 'curiosity',
  process: 'learning',
  goal: 'impact'
};

// Always learning...
while(true) {
  learn();
  build();
  grow();
  repeat();
}

// Code is poetry
const magic = () => {
  return 'Hello World!';
};

// Dream big
async function achieve() {
  const goal = await learn();
  return goal.build();
}`}
        </motion.div>
      </div>

      {/* Binary rain effect */}
      <div className="absolute left-0 top-0 h-full w-20 opacity-[0.01] dark:opacity-[0.02] overflow-hidden">
        {binaryColumns.map((column) => (
          <motion.div
            key={column.id}
            className="absolute text-xs font-mono text-accent"
            style={{ left: `${column.x}px` }}
            animate={{ y: [-100, isClient ? window.innerHeight + 100 : 1000] }}
            transition={{
              duration: column.duration,
              delay: column.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {column.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
