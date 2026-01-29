import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Machine Learning Prediction Model',
      description: 'Developed a predictive model using Python and scikit-learn to analyze datasets and generate accurate forecasts.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas'],
      category: 'Data Science',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard to visualize complex datasets with charts and graphs for better insights.',
      technologies: ['Python', 'Data Visualization', 'Analytics'],
      category: 'Data Science',
    },
    {
      title: 'Web Application Project',
      description: 'Built a full-stack web application using HTML, CSS, JavaScript with SQL database integration.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL'],
      category: 'Web Development',
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Designed an AI-powered chatbot using natural language processing techniques to handle user queries.',
      technologies: ['Python', 'AI', 'NLP', 'Machine Learning'],
      category: 'Artificial Intelligence',
    },
    {
      title: 'Database Management System',
      description: 'Designed and implemented a relational database system with optimized queries and data integrity.',
      technologies: ['SQL', 'Database Design', 'Data Modeling'],
      category: 'Database',
    },
    {
      title: 'Graphic Design Portfolio',
      description: 'Created various visual designs including logos, branding materials, and digital illustrations.',
      technologies: ['Graphic Design', 'Visual Communication', 'Branding'],
      category: 'Design',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-gray-900">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of academic and personal projects demonstrating my skills in data science, machine learning, and web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  {project.category === 'Data Science' && '📊'}
                  {project.category === 'Web Development' && '💻'}
                  {project.category === 'Artificial Intelligence' && '🤖'}
                  {project.category === 'Database' && '🗄️'}
                  {project.category === 'Design' && '🎨'}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
