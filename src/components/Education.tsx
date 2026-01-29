import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">
          Education
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Bachelor of Science in Computer Science (Special Degree)
                </h3>
                <p className="text-blue-600 mb-3">University of Vavuniya</p>
                <p className="text-gray-700 mb-4">
                  Currently pursuing a special degree in Computer Science with focus on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Data Science and Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Machine Learning and Artificial Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Python Programming and Data Structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Database Management and SQL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Award className="text-indigo-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Diploma in Computer Hardware
                </h3>
                <p className="text-gray-700 mt-2">
                  Comprehensive understanding of computer architecture, hardware components, troubleshooting, and system maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="text-purple-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Diploma in Graphic Design
                </h3>
                <p className="text-gray-700 mt-2">
                  Professional training in visual design principles, digital illustration, branding, and creative software tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
