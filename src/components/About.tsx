import { BookOpen, Brain, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Computer Science undergraduate at the University of Vavuniya, pursuing a special degree with a focus on Data Science and Machine Learning. My academic journey is driven by a deep interest in leveraging technology to solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Beyond my degree, I've expanded my expertise through diplomas in Computer Hardware and Graphic Design, along with multiple online certifications in cutting-edge technologies. I'm committed to continuous learning and staying updated with the latest developments in AI and data science.
            </p>
            <p className="text-lg text-gray-700">
              My goal is to contribute to innovative projects that harness the power of data and artificial intelligence to create meaningful impact.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
              <BookOpen className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Education Focus</h3>
                <p className="text-gray-700">
                  Specialized in Computer Science with emphasis on Data Science, Machine Learning, and AI technologies
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-indigo-50 rounded-lg">
              <Brain className="text-indigo-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Problem Solver</h3>
                <p className="text-gray-700">
                  Passionate about using data-driven approaches and machine learning to tackle complex challenges
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-purple-50 rounded-lg">
              <Code className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Full Stack Skills</h3>
                <p className="text-gray-700">
                  Proficient in both front-end and back-end technologies, with strong foundation in modern web development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
