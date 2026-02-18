import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-28 pb-10 bg-slate-900">
        <div className="container">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Me</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out to me 
              using the contact form below.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Contact />
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Connect and Build Something Amazing Together
            </motion.h2>
            <motion.p
              className="text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm currently looking for new opportunities and would love to hear about your 
              project or job opening. Whether you need a data scientist, AI engineer, or someone 
              with strong technical skills and problem-solving abilities, I'm here to help 
              transform your ideas into reality.
            </motion.p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage 