import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiStar, FiBarChart2, FiBookOpen, FiAward as FiTrophyIcon } from 'react-icons/fi'

const Achievements = () => {
  const awards = [
    {
      title: 'Runner-up at Skulepedia Hackathon',
      year: '2021',
      icon: <FiTrophyIcon className="text-yellow-500" />,
      description: 'Recognized for innovative problem-solving and technical implementation in a competitive hackathon environment, developing a comprehensive educational platform for engineering students.'
    },
    {
      title: 'Merit Certificate from CBSE',
      year: '',
      icon: <FiAward className="text-red-500" />,
      description: 'Achieved perfect score in Social Science, demonstrating exceptional academic performance and comprehensive understanding of the subject matter.'
    },
    {
      title: 'Scholar Awardee for 5 consecutive years',
      year: '',
      icon: <FiStar className="text-amber-500" />,
      description: 'Maintained academic excellence with 90%+ overall score for five consecutive years, showcasing consistent dedication to scholastic achievement.'
    },
    {
      title: 'GTSE Mathematics',
      year: '',
      icon: <FiBarChart2 className="text-green-500" />,
      description: 'Achieved International Rank 1 in the Global Talent Search Examination for Mathematics, demonstrating exceptional mathematical aptitude and problem-solving skills on a global stage.'
    },
    {
      title: 'JEE Advanced',
      year: '',
      icon: <FiBookOpen className="text-blue-500" />,
      description: 'Scored >99.1 percentile (Top 10k rank) in one of India\'s most competitive engineering entrance examinations, securing admission to elite engineering programs.'
    },
    {
      title: 'JEE Main',
      year: '',
      icon: <FiBarChart2 className="text-indigo-500" />,
      description: '98.52 percentile in the nationwide engineering entrance examination, showcasing strong foundational knowledge in mathematics, physics, and chemistry.'
    },
    {
      title: 'SAT Subject Physics',
      year: '',
      icon: <FiAward className="text-purple-500" />,
      description: 'Perfect score of 800/800 in the SAT Subject Test for Physics, demonstrating mastery of advanced physics concepts and problem-solving techniques.'
    },
    {
      title: 'SAT Subject Mathematics',
      year: '',
      icon: <FiAward className="text-teal-500" />,
      description: 'Near-perfect score of 780/800 in the SAT Subject Test for Mathematics, showcasing exceptional mathematical proficiency and analytical skills.'
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  
  // Group awards by category for better display
  const featuredAwards = awards.slice(0, 4)
  const additionalAwards = awards.slice(4)
  
  return (
    <section className="section bg-gray-50" id="achievements">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Awards
        </motion.h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          A collection of academic and professional achievements that demonstrate my commitment to excellence, 
          problem-solving abilities, and continuous learning throughout my educational journey.
        </p>
        
        {/* Featured Awards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredAwards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                  {award.icon}
                </div>
                {award.year && (
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {award.year}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{award.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Awards in a compact table format */}
        <motion.div
          className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FiTrophyIcon size={24} className="text-primary" />
            <h3 className="text-2xl font-bold">Additional Achievements</h3>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Achievement
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {additionalAwards.map((award, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                          {award.icon}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{award.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="text-sm text-gray-500">{award.description}</div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FiTrendingUp size={24} className="text-primary" />
            <h3 className="text-2xl font-bold">Academic Excellence</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Consistently ranked among the top performers throughout my academic career, with perfect or near-perfect scores in multiple standardized tests, highlighting my dedication to excellence and deep understanding of technical subjects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <FiStar className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold">Mathematical Aptitude</h4>
                <p className="text-sm text-gray-500">Top-tier performance in mathematics competitions</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4">
                <FiBookOpen className="text-green-500" />
              </div>
              <div>
                <h4 className="font-bold">Engineering Knowledge</h4>
                <p className="text-sm text-gray-500">Elite performance in engineering entrance exams</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                <FiTrophyIcon className="text-purple-500" />
              </div>
              <div>
                <h4 className="font-bold">Consistent Excellence</h4>
                <p className="text-sm text-gray-500">5-year record of outstanding academic achievement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 