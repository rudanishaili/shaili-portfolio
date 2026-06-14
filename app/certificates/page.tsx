"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  certifications,
  academicSubjects,
  highlights,
} from "../../data/achievements";

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    null | (typeof certifications)[0]
  >(null);

  return (
    <main className="certificates-page">
      <section>
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Achievements & Certifications</h1>
          <p>
            My accomplishments, certifications, and academic excellence that
            reflect my commitment to learning and building.
          </p>
        </motion.div>

        <div className="card-grid">
          {certifications.map((item, index) => (
            <motion.button
              className="achievement-card certificate-click-card"
              key={item.title}
              onClick={() => setSelectedCertificate(item)}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <p className="tag">{item.tag}</p>
              <h2>{item.title}</h2>
              <p>{item.issuer}</p>
              <p>{item.date}</p>
              <span className="view-certificate">View Certificate</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="academic-block"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="sgpa-card">
            <p>SGPA</p>
            <h2>9.19</h2>
            <p>Semester 2</p>
          </div>

          <div>
            <h2>Academic Excellence</h2>

            <div className="subjects-grid">
              {academicSubjects.map((item, index) => (
                <motion.div
                  className="subject-row"
                  key={item.subject}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <span>{item.subject}</span>
                  <strong>{item.marks}</strong>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="highlights-section">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Highlights
          </motion.h2>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                className="highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <motion.div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <h2>{selectedCertificate.title}</h2>
            <p>{selectedCertificate.issuer}</p>

            <div className="certificate-image-box">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={1000}
                height={700}
                className="certificate-image"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}