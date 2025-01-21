import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Github, Linkedin, Mail, ExternalLink, Star } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Project 1",
      description: "A kawaii-themed web application",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&q=80",
    },
    {
      title: "Project 2",
      description: "Anime-inspired mobile app",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    },
    {
      title: "Project 3",
      description: "Cute gaming platform",
      image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&q=80",
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      {/* Hero Section */}
      <motion.header 
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden kawaii-border floating"
          whileHover={{ scale: 1.1 }}
        >
          <img 
            src="https://d.uguu.se/JggefXDp.jpg" 
            alt="Firman Wahyudi" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Firman Wahyudi
          <motion.span 
            className="inline-block ml-2"
            animate={{ rotate: [0, 14, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="inline-block text-yellow-400" />
          </motion.span>
        </h1>
        <p className="text-xl text-purple-700 mb-6">Full Stack Developer & Anime Enthusiast</p>
        <div className="flex justify-center space-x-4">
          <motion.a 
            href="https://github.com" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="mailto:contact@firman.dev"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="max-w-4xl mx-auto mb-16 kawaii-card p-8"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
          <Heart className="mr-2" /> About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Konnichiwa! I'm a passionate developer who combines the power of modern web technologies
          with the kawaii aesthetic of anime. With expertise in React, Node.js, and other cutting-edge
          technologies, I create beautiful and functional applications that bring joy to users.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="max-w-4xl mx-auto mb-16 kawaii-card p-8"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
          <Code className="mr-2" /> Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL'].map((skill) => (
            <motion.div
              key={skill}
              className="p-3 text-center rounded-lg bg-pink-50 text-pink-600 kawaii-shadow"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="max-w-4xl mx-auto mb-16"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
          <Star className="mr-2" /> Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="kawaii-card p-4 hover:kawaii-shadow transition-all"
              whileHover={{ y: -5 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-pink-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
                whileHover={{ x: 5 }}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-16">
        <p>Made with <Heart className="inline text-pink-600" size={16} /> by Firman Wahyudi</p>
      </footer>
    </div>
  );
}

export default App;
