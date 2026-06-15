"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const contacts = [
    {
      icon: "✉️",
      title: "Email",
      value: "rudanishaili@gmail.com",
      link: "mailto:rudanishaili@gmail.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "View my repositories",
      link: "https://github.com/rudanishaili",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: "",
    },
  ];

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-bg-shape shape-one"></div>
        <div className="contact-bg-shape shape-two"></div>

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-kicker">Contact • Collaboration • Opportunities</p>

          <h1>
            Let&apos;s build
            <br />
            something useful.
          </h1>

          <p>
            Have an internship opportunity, project discussion, collaboration,
            or feedback? I&apos;m open to connecting and building meaningful
            digital products.
          </p>

          <a href="mailto:satkaival1712@gmail.com" className="primary-btn">
            Send Email →
          </a>
        </motion.div>

        <motion.div
          className="contact-card-grid"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {contacts.map((item, index) => {
            const card = (
              <motion.div
                className="contact-card"
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.value}</p>
              </motion.div>
            );

            return item.link ? (
              <a href={item.link} key={item.title} target="_blank">
                {card}
              </a>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}