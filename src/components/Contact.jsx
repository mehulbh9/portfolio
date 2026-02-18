import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1500)
  }
  
  return (
    <section className="section bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950/20" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-primary">Let's connect</p>
          <h2 className="section-title text-left">
            Get In Touch
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-600/50"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Email</h4>
                  <a href="mailto:mehulbh9@gmail.com" className="text-slate-300 hover:text-primary transition-colors">
                    mehulbh9@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Phone</h4>
                  <p className="text-slate-300">+1 437-989-1815</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-600/50"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitMessage ? (
              <div className="bg-green-500/20 text-green-300 p-4 rounded-lg mb-6">
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-white/80"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-slate-700/50 text-white placeholder-slate-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-white/80"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 resize-none bg-slate-700/50 text-white placeholder-slate-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 