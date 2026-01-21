const resume = {
  name: "Antoine Combaldieu",
  title: "Data Engineer Junior - Big Data & Cloud",
  location: "Paris, France",
  availability: "Disponible à partir de septembre 2026 - France entière",
  email: "antoine@combaldieu.fr",
  phone: "+33 7 69 49 63 12",
  linkedin: "https://www.linkedin.com/in/antoine-combaldieu-304ba3220/",
  github: "https://github.com/AntoineCmbld",
  about:
    "Passionné par la data et ses applications concrètes, je me spécialise dans l'exploitation, l'analyse et la valorisation des données. Le développement rapide de l'intelligence artificielle a naturellement orienté mon parcours vers le deep learning et les infrastructures cloud.",
  experience: [
    {
      role: "Alternance",
      company: "GRDF - Appui Chef d'Agence",
      period: "Actuel",
      bullets: [
        "Mise à disposition pour le management des données opérationnelles et automatisation cloud des tâches de l'agence avec Python, Office Script (TypeScript) et Power Automate.",
        "Utilisation de SQL, Power Query, PowerBI et flux de données Microsoft Fabric.",
      ],
    },
    {
      role: "CDI",
      company: "Caviste Keskongout'",
      period: "Actuel",
      bullets: ["Employé polyvalent chez un caviste le week-end."],
    },
    {
      role: "Stage commercial",
      company: "Efrei Paris",
      period: "2023",
      bullets: [
        "Mise en avant de l'école lors de journées portes ouvertes et forums étudiants.",
      ],
    },
    {
      role: "Stagiaire",
      company: "Sipa Press",
      period: "2022",
      bullets: [
        "Aide administrative, tri de photos, accompagnement d'un stagiaire photographe.",
      ],
    },
    {
      role: "CDD - Ouvrier agricole saisonnier",
      company: "SCEA Famille Vimeney",
      period: "2020",
      bullets: ["Effeuillage et taille des vignes."],
    },
  ],
  education: [
    {
      degree: "Ingénieur en filière Big Data et Machine Learning",
      school: "Efrei Paris",
      year: "2021 — 2026",
      description: "École d'ingénieur informatique en 5 ans.",
    },
    {
      degree: "Semestre à l'étranger",
      school: "APU Kuala Lumpur",
      year: "2023",
      description: "Semestre d'étude en Malaisie.",
    },
  ],
  skills: {
    python: [
      "Manipulation, analyse et visualisation de données (NumPy, Pandas, Matplotlib, Plotly, Streamlit)",
      "Data engineering : ingestion, transformation et pipelines de données",
      "Streaming de données avec Apache Kafka (confluent-kafka, kafka-python)",
      "Développement d'APIs et services backend avec FastAPI",
      "Machine learning avec scikit-learn, deep learning avec PyTorch et TensorFlow",
    ],
    infrastructure: [
      "Machines virtuelles, conteneurisation et orchestration : VMWare, Virtualbox, Docker, Kubernetes",
      "Déploiement et configuration avec Helm",
      "CI/CD avec GitHub Actions",
    ],
    other: [
      "Bases de données SQL et NoSQL",
      "Frontend : Next.js",
      "Backend : Golang",
    ],
  },
  projects: [
    {
      name: "Plateforme microservices d'analyse du référencement des entreprises sur différents modèles de LLM",
      description:
        "Conception, développement et déploiement avec des services backend FastAPI, déployés sur Kubernetes.",
      link: "https://geometrics.combaldieu.fr",
      github: "https://github.com/orgs/geo-metrics-project/repositories",
    },
    {
      name: "Configuration du stack Ory",
      description:
        "Authentification et autorisations pour projets web, déployé sur Kubernetes.",
      link: "https://auth.combaldieu.fr",
      github: "https://github.com/orgs/geo-metrics-project/repositories",
    },
    {
      name: "Outils de visualisation et d'aide à la décision",
      description:
        "Applications interactives développées avec Streamlit.",
      github: "https://github.com/AntoineCmbld/streamlit-resume",
    },
    {
      name: "Outil de diagnostic pour la détection de cancer en imagerie médicale",
      description: "Conception avec TensorFlow.",
      github: "https://github.com/AntoineCmbld/cancer_detection",
    },
    {
      name: "Service d'amélioration automatique de texte",
      description: "Basé sur l'API de ChatGPT.",
      github: "https://github.com/AntoineCmbld/MailPerfect",
    },
  ],
  associations: [
    {
      role: "Président de l'association Millésime (Oenologie)",
      name: "Association Millésime",
      period: "2024 — 2025",
    },
    {
      role: "Membre de l'association de musique (Guitare, piano, chant)",
      name: "Association de musique",
      period: "2023 — 2026",
    },
  ],
  languages: [
    {
      language: "Français",
      level: "Langue maternelle",
      note: "Certificat Voltaire : 789 - Orthographe affaires",
      link: "https://mon.certificat-voltaire.fr/verification-certificat?code=4GMUKCP",
    },
    {
      language: "Anglais",
      level: "Courant",
      note: "TOEIC: 980",
      link: "https://www.etsglobal.org/fr/en/digital-score-report/6C93925F32A8456B918A041F62C3F7F4D6736BFC370C312C988A9C22C61EFD21bDhqeWlmV0kzT3VRSGlHbXh3TDBLKzcyK1BENFBSeUUrVFk2YTV4SVU1S1NzSHAw",
    },
    {
      language: "Espagnol",
      level: "Intermédiaire",
    },
  ],
};

export default resume;
