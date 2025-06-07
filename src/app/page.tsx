"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import RotatableModel from "./RotatableModel";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

// Added a comment to trigger re-deployment

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Home() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-gray-900 text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl py-4 px-8 flex justify-between items-center shadow-2xl border-b border-white/10">
        <motion.h1 
          className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text"
          variants={fadeIn} initial="hidden" animate="visible"
        >
          Dillan Gallagher
        </motion.h1>
        
        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex gap-8 text-lg font-medium"
          variants={staggerContainer} initial="hidden" animate="visible"
        >
          <motion.div variants={fadeIn}><Link href="#hero" className="hover:text-purple-400 transition-colors duration-300">Home</Link></motion.div>
          <motion.div variants={fadeIn}><Link href="#about" className="hover:text-purple-400 transition-colors duration-300">About</Link></motion.div>
          <motion.div variants={fadeIn}><Link href="#skills" className="hover:text-purple-400 transition-colors duration-300">Skills</Link></motion.div>
          <motion.div variants={fadeIn}><Link href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</Link></motion.div>
          <motion.div variants={fadeIn}><Link href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</Link></motion.div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed top-0 left-0 w-full h-full bg-black/90 z-[900] flex flex-col items-center justify-center space-y-8 md:hidden"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button onClick={toggleMobileMenu} className="absolute top-6 right-8 text-white text-4xl focus:outline-none">
            &times;
          </button>
          <motion.div className="flex flex-col gap-8 text-3xl font-medium text-center"
            variants={staggerContainer} initial="hidden" animate="visible"
          >
            <motion.div variants={fadeIn}><Link href="#hero" onClick={toggleMobileMenu} className="hover:text-purple-400 transition-colors duration-300">Home</Link></motion.div>
            <motion.div variants={fadeIn}><Link href="#about" onClick={toggleMobileMenu} className="hover:text-purple-400 transition-colors duration-300">About</Link></motion.div>
            <motion.div variants={fadeIn}><Link href="#skills" onClick={toggleMobileMenu} className="hover:text-purple-400 transition-colors duration-300">Skills</Link></motion.div>
            <motion.div variants={fadeIn}><Link href="#projects" onClick={toggleMobileMenu} className="hover:text-purple-400 transition-colors duration-300">Projects</Link></motion.div>
            <motion.div variants={fadeIn}><Link href="#contact" onClick={toggleMobileMenu} className="hover:text-purple-400 transition-colors duration-300">Contact</Link></motion.div>
          </motion.div>
        </motion.div>
      )}

      <main className="container mx-auto px-6 py-24 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-112px)] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left relative gap-12 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <motion.h2 
              className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg tracking-tight"
              variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            >
              Welcome to My <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">Portfolio</span>
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl max-w-3xl text-gray-300 mb-12 leading-relaxed"
              variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }}
            >
              This is my first portfolio using framer motion and react three fiber.
            </motion.p>
            <motion.a 
              href="#projects" 
              className="px-10 py-5 bg-gradient-to-r from-purple-700 to-pink-700 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-500 ease-in-out"
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(236,72,153,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
          </div>
          <motion.div 
            className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 flex items-center justify-center p-4"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.6 }}
          >
            <RotatableModel />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Hello! I&apos;m <span className="font-semibold text-white">Dillan Ilkham Nur Fazry</span>, a 17-year-old born on 28 November 2007. I am passionate about web development and always eager to learn new technologies and create engaging digital experiences.
            </p>
            <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">Education</h3>
            <div className="space-y-8">
              {/* SD Education */}
              <div className="flex items-center gap-6 p-4 bg-white/10 rounded-xl shadow-md">
                <img src="/SD.png" alt="SD Madrasah Ibtidaiyah Logo" className="w-16 h-16 object-contain rounded-full" />
                <div>
                  <p className="text-xl font-semibold text-white">MI YAPINK 02</p>
                  <p className="text-lg text-gray-300">2014 - 2020</p>
                </div>
              </div>
              {/* SMP Education */}
              <div className="flex items-center gap-6 p-4 bg-white/10 rounded-xl shadow-md">
                <img src="/smp.png" alt="SMP Yapina Nur-El Arafah Logo" className="w-16 h-16 object-contain rounded-full" />
                <div>
                  <p className="text-xl font-semibold text-white">SMP Yapina Nur-El Arafah</p>
                  <p className="text-lg text-gray-300">2020 - 2023</p>
                </div>
              </div>
              {/* SMK Education */}
              <div className="flex items-center gap-6 p-4 bg-white/10 rounded-xl shadow-md">
                <img src="/smk.png" alt="SMK Telekomunikasi Telesandi Bekasi Logo" className="w-16 h-16 object-contain rounded-full" />
                <div>
                  <p className="text-xl font-semibold text-white">SMK Telekomunikasi Telesandi Bekasi</p>
                  <p className="text-lg text-gray-300">2023 - 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            My Expertise
          </motion.h2>
          <motion.div 
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "NEXTJS",
              "TYPESCRIPT",
              "REACT.JS",
              "PHP",
              "PYTHON",
              "LARAVEL 10",
              "TAILWIND CSS",
              "MYSQL",
              "GITHUB",
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-7 text-center border border-white/10 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
                variants={slideInUp} 
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              >
                <p className="text-xl font-semibold text-gray-200">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          >
            {/* Define project data here */}
            {[ 
              {
                image: "/1.png", 
                title: "DEKSTOP", 
                description: "I created a desktop-based application using the Python programming language, here I created an employee salary data application"
              },
              {
                image: "/2.png", 
                title: "WEBSITE", 
                description: "I create website-based applications using native PHP programming language, here I create a portfolio application"
              },
              {
                image: "/3.png", 
                title: "MOBILE", 
                description: "I created a mobile-based application using the MIT APP INVENTOR application, here I created a calculator application"
              },
            ].map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/10 overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
                variants={slideInUp}
                whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              >
                <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-400 text-lg overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <motion.a 
                  onClick={() => handleOpenImageModal(project.image)}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-semibold text-lg cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  see picture <span className="ml-1 text-xl">&rarr;</span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            variants={slideInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-base border-t border-gray-800">
        © {new Date().getFullYear()} Your Digital Realm. All rights reserved.
      </footer>

      {showImageModal && (
        <ImageModal src={selectedImage} onClose={handleCloseImageModal} />
      )}
    </div>
  );
}

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[1000] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative max-w-full max-h-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <img src={src} alt="Large project image" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors duration-300 z-10"
          aria-label="Close Image"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const SERVICE_ID = "service_nj947y5";
  const TEMPLATE_ID = "template_k28jkce";
  const PUBLIC_KEY = "Z7mhNLfOSIFuaF2Z6";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSubmitting(true);
      setIsSuccess(false);
      setIsError(false);

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          form.current?.reset();
        }, (error) => {
          console.log(error.text);
          setIsError(true);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/10 text-center"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }}
    >
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="user_name" className="block text-gray-300 text-lg font-medium mb-2 text-left">Nama Lengkap</label>
          <input 
            type="text" 
            id="user_name" 
            name="from_name" 
            required 
            className="w-full p-4 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-gray-300 text-lg font-medium mb-2 text-left">Email Anda</label>
          <input 
            type="email" 
            id="user_email" 
            name="user_email" 
            required 
            className="w-full p-4 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            placeholder="Masukkan alamat email Anda"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2 text-left">Pesan Anda</label>
          <textarea 
            id="message" 
            name="message" 
            rows={6} 
            required 
            className="w-full p-4 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-y"
            placeholder="Tulis pesan Anda di sini..."
          ></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="px-10 py-5 bg-gradient-to-r from-purple-700 to-pink-700 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-500 ease-in-out inline-block"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(236,72,153,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
        </motion.button>
        {isSuccess && <p className="text-green-400 mt-4 text-lg">Pesan berhasil dikirim!</p>}
        {isError && <p className="text-red-400 mt-4 text-lg">Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.</p>}
      </form>
    </motion.div>
  );
}
