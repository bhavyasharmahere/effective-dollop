import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Projects = () => {
  // Helper to resolve image path - supports both URLs and local images
  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith('http')) return imagePath;
    // If local path like "preview" -> "/img/preview.png"
    return `${imagePath}.png`;
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Selected Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          A collection of projects that push the boundaries of web development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
          >
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video overflow-hidden"
            >
              <motion.img 
                src={getImageSrc(project.image)} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to default placeholder if image fails
                  (e.target as HTMLImageElement).src = '/img/preview.png';
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            </a>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};