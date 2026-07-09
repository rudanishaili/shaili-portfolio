"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "Angular", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Django", "REST APIs"],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "AI & Tools",
      icon: "🤖",
      skills: ["Gemini API", "OpenRouter", "Git", "GitHub", "Postman"],
    },
    {
      title: "Development",
      icon: "🚀",
      skills: ["Full Stack", "UI/UX", "Problem Solving", "Deployment"],
    },
  ];

  return (
    <main className="skills-page">
      <section className="skills-section">
        <div className="skills-glow glow-one"></div>
        <div className="skills-glow glow-two"></div>

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="hero-kicker">Skills • Technology • Experience</p>

          <h1>
            My Developer
            <span>Toolkit</span>
          </h1>

          <p>
            Technologies, frameworks, and tools I use to transform ideas into
            scalable digital products.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <div className="skill-icon">{group.icon}</div>

              <h2>{group.title}</h2>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}