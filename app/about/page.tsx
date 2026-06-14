"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="about-live-page">
      <section className="about-live-section">
        <div className="about-orb orb-one"></div>
        <div className="about-orb orb-two"></div>
        <div className="about-grid-bg"></div>

        <motion.div
          className="about-hero-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">About Me</p>

          <h1>
            I don’t just build websites.
            <span>I build interactive systems.</span>
          </h1>

          <p className="about-main-text">
            I am Shaili Rudani, an MCA student and software developer focused on
            building AI-powered, full-stack products with clean UI, strong logic,
            and real-world purpose.
          </p>
        </motion.div>

        <div className="about-live-grid">
          {[
            {
              number: "01",
              title: "Builder Mindset",
              text: "I turn raw ideas into working products, not just designs or assignments.",
            },
            {
              number: "02",
              title: "AI + Full Stack",
              text: "I combine frontend, backend, APIs, databases and AI tools to build complete systems.",
            },
            {
              number: "03",
              title: "Experience First",
              text: "I care about how a product feels, moves, responds and helps the user.",
            },
          ].map((item, index) => (
            <motion.div
              className="about-3d-card"
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.7, delay: index * 0.18 }}
              whileHover={{ rotateY: 8, rotateX: -6, y: -12 }}
            >
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="currently-building"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="live-dot"></div>
          <p>Currently building portfolio, AI systems, and placement-ready projects.</p>
        </motion.div>
      </section>
    </main>
  );
}