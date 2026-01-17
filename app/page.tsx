'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary-600">TJ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#experience" className="text-gray-700 hover:text-primary-600 transition">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600 transition">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-primary-600 transition">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Tarun Jagadish
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Data Scientist & Machine Learning Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              MS in Applied Data Science @ USC | Specializing in Computer Vision, ML, and Data Analytics
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">MS in Applied Data Science</p>
                    <p className="text-gray-600">University of Southern California</p>
                    <p className="text-sm text-gray-500">GPA: 3.57/4.0 | Expected May 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                    <p className="text-gray-600">Vellore Institute of Technology</p>
                    <p className="text-sm text-gray-500">CGPA: 8.92/10 | 2020-2024</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Los Angeles, CA | U.S. Citizen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container bg-gray-100">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Technology Intern</h3>
                <p className="text-primary-600 font-medium">Maersk</p>
              </div>
              <span className="text-gray-500 text-sm">May 2025 - Aug 2025</span>
            </div>
            <p className="text-gray-600 mb-3">Los Angeles, CA</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Automated vessel schedule extraction via a web-scraping system across global shipping carriers, significantly cutting down manual data collection</li>
              <li>Proactively ensured consistent data flow by designing and maintaining architecture diagrams for five core data pipelines, monitoring their reliability, and implementing necessary fixes</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Data Science Intern</h3>
                <p className="text-primary-600 font-medium">Maersk</p>
              </div>
              <span className="text-gray-500 text-sm">Jan 2024 - Jul 2024</span>
            </div>
            <p className="text-gray-600 mb-3">Bengaluru, India</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Implemented a genetic algorithm to optimize a patent-pending container consolidation algorithm, significantly reducing required containers and improving space utilization</li>
              <li>Applied optimization algorithms to various Maersk product use cases, focusing on enhanced efficiency and resource allocation</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                <p className="text-primary-600 font-medium">Angel One Limited</p>
              </div>
              <span className="text-gray-500 text-sm">May 2022 - Jul 2022</span>
            </div>
            <p className="text-gray-600 mb-3">Mumbai, India</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Contributed to company presentations and meetings, analyzing and visualizing data within the Digital Revenue Department</li>
              <li>Worked extensively with Big Data using Qubole and Microsoft SQL Server</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Research Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">AI-Generated Image Detection</h3>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">ICCCNT 2024</span>
            </div>
            <p className="text-gray-700">
              Created a highly accurate CNN model for AI-generated image detection in news media, surpassing models like ResNet50 and InceptionV3.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Cross-Lingual Sentiment Analysis</h3>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">ICRTAC 2023</span>
            </div>
            <p className="text-gray-700">
              Designed a cross-lingual sentiment analysis framework for political tweets (Urdu, transliterated Urdu, English) that surpassed mBERT and RoBERTa.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Emotion Detection System</h3>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">ICERCS 2023</span>
            </div>
            <p className="text-gray-700">
              Developed an emotion detection system using a depth index for precise understanding, with potential applications in counseling, customer service, and market research.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Automated Waste-Sorting System</h3>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">ADCIS 2023</span>
            </div>
            <p className="text-gray-700">
              Computer vision-based automated waste-sorting system achieved 93.20% accuracy in classifying organic and recyclable materials.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-gray-100">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'Data Analytics', 'Machine Learning', 'Algorithm Optimization'].map((skill) => (
                  <span key={skill} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL'].map((lang) => (
                  <span key={lang} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="card md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                <p className="text-gray-700">• Google Data Analytics Specialization</p>
                <p className="text-gray-700">• IBM Artificial Intelligence Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-container">
        <h2 className="section-title">Activities & Organizations</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Vice President</strong> of CubeSC - Rubik's Cube club of University of Southern California</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Core Member</strong> of Rotaract Club of VIT Chennai</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Organizing Committee Member</strong> of Research Department of Data Science Club of VIT Chennai</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-gray-100">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <p className="text-lg text-gray-700 mb-4">
              I'm always open to discussing new opportunities, projects, or collaborations.
            </p>
            <div className="space-y-3">
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (213) 410-8793
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> Los Angeles, CA
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="mailto:tarunjagadish28@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Email
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://www.linkedin.com/in/tarunjagadish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  LinkedIn
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://github.com/tarunjag28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  GitHub
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="section-container text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tarun Jagadish. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
