const resume = {
  name: "Antoine Combaldieu",
  title: "Junior Data Engineer – Big Data & Cloud",
  location: "Paris - France",
  availability: "Available from September 2026 - France and international",
  email: "antoine@combaldieu.fr",
  phone: "+33 7 69 49 63 12",
  homepage: "https://combaldieu.fr",
  linkedin: "https://www.linkedin.com/in/antoine-combaldieu-304ba3220/",
  github: "https://github.com/AntoineCmbld",

  about:
    "Engineering student specializing in Big Data & Machine Learning, with hands-on experience in data analysis, cloud automation, and business intelligence (SAP BW, MicroStrategy, Microsoft Fabric, Power BI). Strong interest in data engineering and cloud infrastructure, with personal projects deployed on Kubernetes.",

  experience: [
    {
      role: "Apprenticeship - Assistant Branch Manager",
      company: "GRDF",
      period: "Current",
      bullets: [
        "Extraction, cleaning, and analysis of data from SAP BW, MicroStrategy, and Microsoft Fabric; BI reporting using SAP WebI, Power BI, and Excel (SQL, Power Query).",
        "Designed and deployed around ten automation workflows using Power Automate, SharePoint, and Office Scripts (TypeScript), resulting in an estimated ~10 hours/week time saving.",
      ],
    },
    {
      role: "Part-time Sales Assistant",
      company: "Wine Shop",
      period: "Current",
      bullets: ["Weekend role."],
    },
  ],

  education: [
    {
      degree: "Engineering Degree in Big Data & Machine Learning",
      school: "Efrei Paris",
      year: "2021-2026",
      description:
        "5-year engineering program in computer science.",
    },
    {
      degree: "Exchange Semester",
      school: "APU Kuala Lumpur",
      year: "2023",
      description: "Malaysia.",
    },
  ],

  certifications: [
    {
      year: "2026",
      name: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/antoinecombaldieu-8127/credentials/ed7c4300a0a2447f",
    },
    {
      year: "2025",
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/92351236-0c67-4d72-9d5d-8166f59cdbf2",
    },
  ],

  projects: [
    {
      name: "Geometrics",
      description:
        "Event-driven microservices platform for analyzing company visibility in LLMs: automated question generation, inference using HuggingFace, multilingual translation via LibreTranslate, asynchronous orchestration with NATS Jetstream, FastAPI and Gin backends deployed on Kubernetes with Ory stack for authentication.",
      link: "https://geometrics.combaldieu.fr",
      github: "https://github.com/orgs/geo-metrics-project/repositories",
    },
    {
      name: "Medical imaging cancer diagnosis tool",
      description: "TensorFlow / deep learning.",
      github: "https://github.com/AntoineCmbld/cancer_detection",
    },
    {
      name: "Data visualization and decision-support applications",
      description:
        "Built with Streamlit.",
      github: "https://github.com/AntoineCmbld/streamlit-resume",
    },
    {
      name: "Automatic text enhancement service",
      description: "Using the ChatGPT API.",
      github: "https://github.com/AntoineCmbld/MailPerfect",
    },
  ],

  skills: {
    python: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Streamlit",
      "Plotly",
    ],
    infrastructure: [
      "Docker",
      "Kubernetes",
      "Helm",
      "VMware",
      "GitHub Actions",
      "Git",
      "Jujutsu",
    ],
    other: [
      "SQL",
      "JavaScript/TypeScript",
      "Go",
      "Bash",
      "Power BI",
      "Power Query",
      "Microsoft Fabric",
      "SAP BW",
      "SAP WebI",
      "Apache Kafka",
      "NATS Jetstream",
      "FastAPI",
      "Gin",
      "Next.js",
    ],
  },

  associations: [
    {
      role: "President – Oenology Association",
      name: "Millésime",
      period: "2024-2025",
    },
    {
      role: "Member – Music Association",
      name: "Music Association",
      period: "2023-2026",
    },
  ],

  languages: [
    {
      language: "French",
      level: "Native",
      note: "Voltaire Certificate: 789 – Business-level spelling",
      link: "https://mon.certificat-voltaire.fr/verification-certificat?code=4GMUKCP",
    },
    {
      language: "English",
      level: "Fluent",
      note: "TOEIC: 980",
      link: "https://www.etsglobal.org/fr/en/digital-score-report/6C93925F32A8456B918A041F62C3F7F4D6736BFC370C312C988A9C22C61EFD21bDhqeWlmV0kzT3VRSGlHbXh3TDBLKzcyK1BENFBSeUUrVFk2YTV4SVU1S1NzSHAw",
    },
    {
      language: "Spanish",
      level: "Intermediate",
    },
  ],
};

export default resume;
