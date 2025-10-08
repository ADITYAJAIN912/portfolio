"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Heart, BookOpen, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-blue-600",
      level: "Learning",
    },
    {
      category: "Currently Learning",
      icon: BookOpen,
      items: ["Node.js", "Express", "MongoDB", "Git", "Responsive Design"],
      color: "from-green-500 to-green-600",
      level: "Beginner",
    },
    {
      category: "Tools & Others",
      icon: Coffee,
      items: ["VS Code", "GitHub", "Figma", "Chrome DevTools", "NPM"],
      color: "from-purple-500 to-purple-600",
      level: "Familiar",
    },
  ];

  const qualities = [
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "I love diving deep into new technologies and frameworks. Every bug is a learning opportunity!",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "I enjoy breaking down complex problems into smaller, manageable pieces and finding creative solutions.",
    },
    {
      icon: Lightbulb,
      title: "Creative Thinker",
      description: "I bring fresh perspectives to projects and love experimenting with new ideas and approaches.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Hi there! I&apos;m Aditya
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a second-year B.Tech student at SRMIST, Chennai, specializing in Computer Science Engineering with Cloud Computing. 
                  My coding journey began with curiosity about how websites and applications work, and it quickly grew into a genuine passion 
                  for creating digital solutions.
                </p>
                <p>
                  Currently, I&apos;m building a strong foundation in web development technologies - HTML, CSS, JavaScript, and React. 
                  I enjoy working on practical projects like quiz applications, image sliders, and todo apps that help me understand 
                  core programming concepts and user interface design.
                </p>
                <p>
                  What excites me most about programming is the problem-solving process and the ability to bring ideas to life through code. 
                  As I continue my studies and gain more experience, my goal is to develop into a skilled full-stack developer who can 
                  contribute to impactful projects and collaborate effectively in development teams.
                </p>
              </div>

            </motion.div>

            {/* Qualities */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What Drives Me
              </h3>
              <div className="space-y-6">
                {qualities.map((quality, index) => {
                  const IconComponent = quality.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {quality.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {quality.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
              My Learning Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {skill.category}
                          </h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Learning Goals */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              What I&apos;m Working On Next
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Backend Development",
                    description: "Learning Node.js and Express to become a full-stack developer",
                    progress: 30,
                  },
                  {
                    title: "Database Management",
                    description: "Understanding MongoDB and data modeling concepts",
                    progress: 20,
                  },
                  {
                    title: "Advanced React",
                    description: "Diving deeper into hooks, context, and state management",
                    progress: 60,
                  },
                  {
                    title: "Project Portfolio",
                    description: "Building more personal projects to showcase my learning progress",
                    progress: 40,
                  },
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-card rounded-lg shadow-soft border border-border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{goal.title}</h4>
                      <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
