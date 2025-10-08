"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) - 2nd Year",
      field: "Computer Science Engineering / Cloud Computing",
      institution: "SRMIST (SRM Institute of Science and Technology)",
      location: "Chennai, Tamil Nadu",
      duration: "2024 - 2028",
      grade: "Currently Pursuing",
      description: "Currently pursuing B.Tech in Computer Science Engineering with specialization in Cloud Computing. Focusing on modern software development, cloud technologies, algorithms, and data structures.",
      highlights: [
        "Database Management Systems",
        "Web Development",
        "Software Engineering"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "Delhi Public School Durg",
      location: "Bhilai, Chhattisgarh",
      duration: "2022 - 2024",
      grade: "Percentage: 71%",
      description: "Completed senior secondary education with Physics, Chemistry, and Mathematics as key subjects. Built strong foundation in analytical thinking and mathematical problem-solving skills.",
      highlights: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Physical Education"
      ],
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    }
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
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
              <GraduationCap size={48} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and computer science.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-12 mb-20">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < educationData.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-border"></div>
                  )}

                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-medium`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex-1 bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-semibold mb-2">
                            {edu.field}
                          </p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={16} />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="mt-4 lg:mt-0 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {edu.grade}
                        </motion.div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Subjects & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <motion.span
                              key={highlightIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: highlightIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Education;
