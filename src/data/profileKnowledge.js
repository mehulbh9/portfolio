/**
 * Profile knowledge base for the recruiter-focused chatbot.
 * Each entry has keywords (lowercase) that trigger the response when matched in user input.
 * Responses are professional and highlight fit for data/ML/analytics roles.
 */

export const PROFILE_KNOWLEDGE = [
  {
    keywords: ['who are you', 'tell me about', 'introduce', 'about you', 'your background'],
    response: "I'm Mehul Bhardwaj—a powerhouse combining Data Science, AI, and Program Management. Currently a Data Analyst at AMD Toronto with a BASc in Engineering Science (Machine Intelligence) from UofT. I bring technical depth to build (300M+ row datasets, XGBoost, LLMs), strategic vision to lead (Jira dashboards, Monte Carlo forecasting), and the execution chops to ship. It's an elite combo: I can go deep on models and also own program-level delivery."
  },
  {
    keywords: ['experience', 'work history', 'jobs', 'roles', 'career'],
    response: "I have 4+ years of combined academic and industry experience. My current role is Data Analyst at AMD, where I build Python automation pipelines, Monte Carlo simulations for schedule forecasting, and Jira dashboards tracking 200+ builds. Previously, I was a Data Scientist Intern at AMD (XGBoost models with SHAP interpretability on 300M+ row datasets), Project Manager Intern, and I've done research at UofT on Bayesian Optimization and LLM/RAG work at GEI Consultants. I've delivered impact across data analytics, ML, and program management."
  },
  {
    keywords: ['amd', 'advanced micro devices'],
    response: "I've had three roles at AMD Toronto: (1) Current—Data Analyst building automation pipelines, Monte Carlo forecasting, and Jira dashboards for data center programs. (2) Data Scientist Intern—processed 300M+ row datasets, built XGBoost models with SHAP interpretability, and engineered 10 datasets from Snowflake. (3) Project Manager Intern—reduced data processing from 10+ minutes to under 5 seconds with Python automation and deployed supply-demand dashboards for 200+ NPI builds. I've consistently delivered measurable impact and am open to discussing how I can contribute to your team."
  },
  {
    keywords: ['education', 'degree', 'university', 'school', 'graduate', 'utoronto', 'uoft'],
    response: "I graduated from the University of Toronto with a Bachelor of Applied Science in Engineering Science, Machine Intelligence major—the most rigorous engineering program at UofT. Key courses include Machine Learning, Neural Networks & Deep Learning, Probabilistic Reasoning, and AI. I completed an Engineering Science thesis and have strong foundations in ML, Bayesian methods, and AI systems design."
  },
  {
    keywords: ['skills', 'technologies', 'tech stack', 'tools', 'expertise'],
    response: "My core skills span the data stack: Python (automation, ETL, modeling), Snowflake and SQL for big data, XGBoost and SHAP for interpretable ML, Monte Carlo and predictive modeling, Jira/Confluence for program analytics, and LLMs/RAG for AI applications. I've worked with 300M+ row datasets, built production dashboards, and delivered automation that reduced manual work by 75%. I'm also comfortable with React, APIs, and full-stack development for data tools."
  },
  {
    keywords: ['python', 'programming'],
    response: "Python is my primary language for data work. I've used it for automation pipelines (reducing 10+ minute processes to under 5 seconds), ETL workflows, XGBoost models, Monte Carlo simulations, k-means clustering, and LLM integrations. I've processed 300M+ row datasets with Pandas and built scalable analytics solutions. I'm proficient in data manipulation, modeling, and automation at scale."
  },
  {
    keywords: ['machine learning', 'ml', 'ai', 'models', 'xgboost', 'predictive'],
    response: "I have hands-on ML experience from industry and research. At AMD, I built XGBoost models with SHAP interpretability on 300M+ row datasets, plus anomaly detection with k-means. At UofT Research, I work on Gaussian Process Regression with Active Learning for manufacturing optimization. At GEI, I built an LLM-based RAG system across 200+ documents. I'm comfortable with supervised learning, Bayesian methods, and deploying models that drive business decisions."
  },
  {
    keywords: ['why hire', 'why you', 'good fit', 'value', 'bring to', 'contribute'],
    response: "I bring an elite combo: Data Science (300M+ row datasets, Snowflake, XGBoost, ETL), AI (LLMs, RAG, Bayesian Optimization), and Program Management (Jira dashboards for 200+ builds, Monte Carlo forecasting, leadership reports). Few combine deep technical skills with program-level ownership. I've delivered 75% reduction in manual reporting, 10+ min → 5 sec automation, and models that drive real decisions. I'm professional, collaborative, and focused on measurable outcomes."
  },
  {
    keywords: ['projects', 'portfolio', 'built', 'developed'],
    response: "I've delivered 10+ projects across ML, data science, and analytics. Highlights: Advanced Recommender System (collaborative filtering + content-based, production-ready), Supply Chain Analytics Dashboard for AMD (Snowflake, 75% reduction in reporting time), Personalized Image Culling with RNNs (83% accuracy), and an LLM RAG system for GEI. I also have academic projects in HMMs, Bayesian methods, sentiment analysis, and k-means. Many are on GitHub—I'd be happy to walk through any that interest you."
  },
  {
    keywords: ['available', 'open to', 'hiring', 'job', 'opportunities', 'looking'],
    response: "I'm currently a Data Analyst at AMD Toronto and open to collaborations and new opportunities that align with my skills in data analytics, machine learning, and program analytics. I'm based in Toronto and available for full-time roles. Feel free to reach out via the contact form or LinkedIn—I'm responsive and happy to discuss how I can contribute to your team."
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'connect'],
    response: "You can reach me at mehulbh9@gmail.com or connect on LinkedIn at linkedin.com/in/mehulbh9. I'm based in Toronto and typically respond within 24–48 hours. I'm happy to schedule a call or chat—please use the contact form on this site or reach out directly."
  },
  {
    keywords: ['gei', 'consultants'],
    response: "I worked with GEI Consultants Inc. as an AI/ML Engineer on a capstone project (Sept 2024–Feb 2025). I built an AI-driven RFP response system using LLMs via the OpenAI API, implemented RAG with Hugging Face embeddings across 200+ documents, and designed custom retrieval functions to prevent hallucinations. It was a great opportunity to apply LLM and RAG techniques to real business needs."
  },
  {
    keywords: ['research', 'university of toronto', 'uoft'],
    response: "I'm an Undergraduate Research Assistant at the University of Toronto, working on Gaussian Process Regression with Active Learning for lithium sulfide manufacturing optimization. I've built interactive 3D visualizations for Bayesian Optimization and done imputation and feature engineering in low-data regimes. This complements my industry work by keeping me at the forefront of ML research."
  },
  {
    keywords: ['data analyst', 'analytics', 'dashboard'],
    response: "As a Data Analyst at AMD, I build Python automation pipelines for task classification and ETL, Monte Carlo simulations and velocity-based forecasting for schedule risk, and Jira dashboards tracking 200+ builds across data center programs. I create Confluence documentation for KPIs and deliver weekly analytical reports for leadership. I focus on turning raw data into clear, actionable insights that drive decisions."
  },
  {
    keywords: ['achievements', 'awards', 'recognition'],
    response: "I've been recognized academically and professionally: Runner-up at Skulepedia Hackathon, International Rank 1 in GTSE Mathematics, JEE Advanced >99.1 percentile, perfect SAT Physics (800), and Scholar Awardee for 5 consecutive years. At AMD, I've delivered automation that cut processing time from 10+ minutes to under 5 seconds and built models on 300M+ row datasets. I'm driven by measurable impact and continuous improvement."
  },
  {
    keywords: ['snowflake', 'sql', 'big data'],
    response: "I have hands-on experience with Snowflake and SQL for big data. At AMD, I engineered 10 specialized datasets from Snowflake cloud data and processed 300M+ row, 500+ column datasets for scalable analytics. I've built supply chain dashboards that process 20GB+ of daily transaction data and optimized queries for performance. I'm comfortable designing pipelines and analytics on large-scale data."
  },
  {
    keywords: ['powerhouse', 'elite', 'unique', 'combo', 'data science ai program', 'what makes you', 'different', 'special'],
    response: "I combine three domains that rarely overlap: Data Science (300M+ row datasets, Snowflake, XGBoost, ETL), AI (LLMs, RAG, Bayesian Optimization), and Program Management (Jira dashboards for 200+ builds, Monte Carlo forecasting, leadership reports). Most people excel in one or two. I deliver across all three—technical depth to build, strategic vision to lead, and the execution chops to ship. That's the elite combo."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I'm Mehul's portfolio assistant. He's a powerhouse combining Data Science, AI, and Program Management—an elite combo. I can answer questions about his experience, skills, projects, and why he's a strong fit. What would you like to know?"
  },
  {
    keywords: ['help', 'what can you', 'questions'],
    response: "I can help you learn about Mehul's profile. He combines Data Science, AI, and Program Management—an elite combo. Try asking about: his experience at AMD, his unique skill mix, education at UofT, why he's a strong fit, his projects, or how to contact him. What would you like to explore?"
  }
]

/**
 * Get a response for the given user message.
 * Uses keyword matching; returns the first matching response or a fallback.
 */
export function getChatResponse(message) {
  const normalized = message.toLowerCase().trim()
  if (!normalized) {
    return "I'd be happy to help! Ask me about Mehul's experience, skills, projects, or background. What would you like to know?"
  }

  for (const entry of PROFILE_KNOWLEDGE) {
    const matchCount = entry.keywords.filter(kw => normalized.includes(kw)).length
    if (matchCount > 0) {
      return entry.response
    }
  }

  return "I'm not sure I have specific information on that. Try asking about Mehul's experience at AMD, his education at UofT, his skills in Python and ML, his projects, or why he'd be a great fit for your team. You can also use the contact form to reach him directly."
}
