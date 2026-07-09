"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HumanOS",
    category: "Personal Analytics Platform",
    description:
      "A personal analytics system that tracks focus, productivity, habits, and future-self insights.",
    tech: ["Angular", "Node.js", "MongoDB", "AI"],
    folder: "humanos",
    count: 4,
    ext: "png",
    type: "desktop",
  },
  {
    title: "Shaelix",
    category: "AI Learning Companion",
    description:
      "AI-powered video learning assistant that generates notes, quizzes, flashcards, mind maps, and video chat.",
    tech: ["React", "Node.js", "MongoDB", "OpenRouter"],
    folder: "shaelix",
    count: 9,
    ext: "png",
    type: "carousel",
  },
  {
    title: "TruthLens",
    category: "AI Fake News Detection",
    description:
      "Mobile app using AI, OCR, voice input, and URL analysis to detect and explain fake news.",
    tech: ["Flutter", "Gemini API", "OCR", "Speech-to-Text"],
    folder: "truthlens",
    count: 6,
    ext: "jpeg",
    type: "mobile",
  },
  {
    title: "Smart Device Explorer",
    category: "AI Device Recommendation Platform",
    description:
      "A platform for discovering and comparing mobiles and laptops based on user preferences.",
    tech: ["Django", "Python", "Tailwind", "SQLite"],
    folder: "smart-device-explorer",
    count: 6,
    ext: "png",
    type: "desktop",
  },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [shaelixIndex, setShaelixIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaelixIndex((prev) => (prev + 1) % 9);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Selected Work • Product Gallery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects that prove
          <span>what I can build.</span>
        </motion.h1>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A showcase of AI-powered, full-stack, and mobile applications built
          with real features, clean interfaces, and practical problem solving.
        </motion.p>
      </section>

      {projects.map((project, index) => {
        const images = Array.from(
          { length: project.count },
          (_, i) => `/projects/${project.folder}/${i + 1}.${project.ext}`
        );

        const shaelixImage = `/projects/shaelix/${shaelixIndex + 1}.png`;

        return (
          <section className="project-showcase" key={project.title}>
            <motion.div
              className="project-info"
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="project-number">0{index + 1}</span>

              <p className="project-category">{project.category}</p>

              <h2>{project.title}</h2>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <button>GitHub</button>
                <button>Live Demo</button>
              </div>
            </motion.div>

            {project.type === "carousel" ? (
              <motion.div
                className="shaelix-carousel"
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="browser-frame shaelix-browser"
                  key={shaelixImage}
                  initial={{ opacity: 0.4, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setSelectedImage(shaelixImage)}
                >
                  <div className="browser-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <Image
                    src={shaelixImage}
                    alt="Shaelix screenshot"
                    width={1200}
                    height={750}
                    className="project-image shaelix-image"
                  />
                </motion.div>

                <div className="carousel-dots">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <button
                      key={i}
                      className={i === shaelixIndex ? "active-dot" : ""}
                      onClick={() => setShaelixIndex(i)}
                      aria-label={`Show Shaelix screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                className={
                  project.type === "mobile"
                    ? "mobile-gallery"
                    : "desktop-gallery"
                }
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {images.slice(0, project.type === "mobile" ? 3 : 4).map(
                  (img, imgIndex) => (
                    <motion.div
                      className={
                        project.type === "mobile"
                          ? "phone-frame"
                          : "browser-frame"
                      }
                      key={img}
                      whileHover={{
                        y: -12,
                        rotate: imgIndex % 2 === 0 ? -2 : 2,
                        scale: 1.03,
                      }}
                      onClick={() => setSelectedImage(img)}
                    >
                      {project.type === "desktop" && (
                        <div className="browser-bar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      )}

                      <Image
                        src={img}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="project-image"
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
            )}
          </section>
        );
      })}

      {selectedImage && (
        <div className="project-modal" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)}>×</button>

          <Image
            src={selectedImage}
            alt="Project preview"
            width={1200}
            height={800}
            className="modal-project-image"
          />
        </div>
      )}
    </main>
  );
}