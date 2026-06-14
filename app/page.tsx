"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home-page-v2">
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="hero-v2">
        <motion.div
          className="hero-left-v2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="hero-kicker">AI Builder • Full Stack Developer</p>

          <h1>
            Building intelligent
            <br />
            digital products.
          </h1>

          <p className="hero-desc">
            I design and engineer applications that turn complex ideas into
            clean, useful, and human-friendly experiences.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="primary-btn">
              View Projects
            </Link>
            <a href="/resume/resume.pdf" className="secondary-btn">
              Resume
            </a>
          </div>

          <div className="signal-strip">
            <span>04 Major Projects</span>
            <span>9.19 SGPA</span>
            <span>MCA @ GLS</span>
            <span>AI + Full Stack</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-right-v2"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="orbit-ring"></div>
          <div className="photo-glow"></div>

          <Image
            src="/profile/shaili.png"
            alt="Shaili Rudani"
            width={430}
            height={560}
            className="profile-v2"
            priority
          />

          <div className="floating-card top-card">
            <strong>Currently</strong>
            <span>Building AI-powered products</span>
          </div>

          <div className="floating-card bottom-card">
            <strong>Focus</strong>
            <span>Clean UI + Real-world systems</span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}