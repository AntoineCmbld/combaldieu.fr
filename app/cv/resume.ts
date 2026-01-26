const resume = {
  name: "Antoine Combaldieu",
  title: "Junior Data Engineer – Big Data & Cloud",
  location: "Paris, France",
  availability: "Available from September 2026 – France & International",
  email: "antoine@combaldieu.fr",
  phone: "+33 7 69 49 63 12",
  linkedin: "https://www.linkedin.com/in/antoine-combaldieu-304ba3220/",
  github: "https://github.com/AntoineCmbld",

  about:
    "Passionate about data and its real-world applications, I specialize in data exploitation, analysis, and value creation. The rapid development of artificial intelligence has naturally guided my academic path toward deep learning and cloud infrastructures.",

  experience: [
    {
      role: "Apprenticeship",
      company: "GRDF (France’s leading gas distribution company)",
      period: "Present",
      bullets: [
        "Management of operational data and cloud-based automation of agency tasks using Python, Office Scripts (TypeScript), and Power Automate.",
        "Use of SQL, Power Query, Power BI, and Microsoft Fabric data pipelines.",
      ],
    },
    {
      role: "Permanent Contract (Part-time)",
      company: "Caviste Keskongout'",
      period: "Present",
      bullets: ["Weekend polyvalent employee in a wine shop."],
    },
    {
      role: "Sales Internship",
      company: "Efrei Paris",
      period: "2023",
      bullets: [
        "Promotion of the engineering school during open days and student fairs.",
      ],
    },
    {
      role: "Intern",
      company: "Sipa Press",
      period: "2022",
      bullets: [
        "Administrative support, photo sorting, and assistance to a photographer intern.",
      ],
    },
    {
      role: "Fixed-term Contract",
      company: "SCEA Famille Vimeney",
      period: "2020",
      bullets: ["Seasonal agricultural work: vine pruning and leaf removal."],
    },
  ],

  education: [
    {
      degree: "Engineering Degree – Big Data & Machine Learning",
      school: "Efrei Paris",
      year: "2021 — 2026",
      description:
        "Five-year engineering program specializing in data, machine learning, and artificial intelligence.",
    },
    {
      degree: "Study Abroad Semester",
      school: "APU Kuala Lumpur",
      year: "2023",
      description: "Academic semester completed in Malaysia.",
    },
  ],

  projects: [
    {
      name: "Microservices platform for company visibility analysis across multiple LLM models",
      description:
        "Design, development, and deployment of FastAPI backend microservices deployed on Kubernetes.",
      link: "https://geometrics.combaldieu.fr",
      github: "https://github.com/orgs/geo-metrics-project/repositories",
    },
    {
      name: "Ory stack configuration and deployment",
      description:
        "Authentication and authorization setup for web projects deployed on Kubernetes.",
      link: "https://auth.combaldieu.fr/auth/login",
      github: "https://github.com/orgs/geo-metrics-project/repositories",
    },
    {
      name: "Decision-support and data visualization tools",
      description:
        "Interactive applications developed using Streamlit.",
      github: "https://github.com/AntoineCmbld/streamlit-resume",
    },
    {
      name: "Medical imaging diagnostic tool for cancer detection",
      description: "Designed using TensorFlow.",
      github: "https://github.com/AntoineCmbld/cancer_detection",
    },
    {
      name: "Automatic text enhancement service",
      description: "Based on the ChatGPT API.",
      github: "https://github.com/AntoineCmbld/MailPerfect",
    },
  ],

  skills: {
    python: [
      "Data manipulation, analysis, and visualization (NumPy, Pandas, Matplotlib, Plotly, Streamlit)",
      "Data engineering: ingestion, transformation, and data pipelines",
      "Data streaming with Apache Kafka (confluent-kafka, kafka-python)",
      "API and backend service development with FastAPI",
      "Machine learning with scikit-learn; deep learning with PyTorch and TensorFlow",
    ],
    infrastructure: [
      "Virtual machines, containerization, and orchestration: VMware, VirtualBox, Docker, Kubernetes",
      "Deployment and configuration using Helm",
      "CI/CD pipelines with GitHub Actions",
    ],
    other: [
      "SQL and NoSQL databases",
      "Frontend: Next.js",
      "Backend: Golang",
    ],
  },

  associations: [
    {
      role: "President – Oenology Association",
      name: "Millésime",
      period: "2024 — 2025",
    },
    {
      role: "Member – Music Association",
      name: "Music Association",
      period: "2023 — 2026",
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
