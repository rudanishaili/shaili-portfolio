"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="experience-page">

    <div className="bubble1"></div>
    <div className="bubble2"></div>
    <div className="bubble3"></div>
      {/* HERO */}

      <section className="experience-hero">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="hero-tag">
            AI WEB DEVELOPER INTERN
          </span>

          <h1>
            Building technology that creates
            <span> real social impact.</span>
          </h1>

          <p>
            During my internship at <strong>InAmigos Foundation</strong>,
            I developed AI-powered web applications, responsive user
            interfaces, automation workflows and intelligent digital
            solutions that supported NGO initiatives. I collaborated
            with mentors on real-world projects while enhancing user
            experience using modern full-stack technologies.
          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="internship-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="number">
            01
          </div>

          <h3>InAmigos Foundation</h3>

          <p>
            AI Web Developer Intern
          </p>

          <div className="stack">

            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>AI</span>

          </div>

          <Image
            src="/experience/internship.png"
            alt="Internship"
            width={500}
            height={500}
          />

        </motion.div>

      </section>

      {/* CERTIFICATES */}

      <section className="certificate-section">

        <motion.div
          className="certificate-card"
          whileHover={{ y: -8 }}
        >

          <div className="certificate-info">

            <h2>Completion Certificate</h2>

            <p>
              Successfully completed AI Web Developer Internship
              at InAmigos Foundation.
            </p>

          </div>

          <Image
            src="/experience/1.jpeg"
            alt="Completion"
            width={600}
            height={420}
          />

        </motion.div>

        <motion.div
          className="certificate-card"
          whileHover={{ y: -8 }}
        >

          <div className="certificate-info">

            <h2>Letter of Appreciation</h2>

            <p>
              Recognition for dedication, innovation and contribution
              towards impactful AI-driven NGO solutions.
            </p>

          </div>

          <Image
            src="/experience/2.jpe"
            alt="Appreciation"
            width={600}
            height={420}
          />

        </motion.div>

      </section>

    </main>
  );
}