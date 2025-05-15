import { Project, Education, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Trelltech",
    description: "Clone de Trello développé en Vue.js et React Native, connecté à une base WordPress via API REST.",
    technologies: ["Vue.js", "React Native", "WordPress", "REST API"],
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "#",
  },
  {
    id: 2,
    title: "ClasseSTEM",
    description: "Plateforme e-learning gamifiée pour enfants, avec design enfantin personnalisé sous Moodle (thème Moove).",
    technologies: ["Moodle", "PHP", "MySQL", "JavaScript"],
    imageUrl: "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "#",
  },
  {
    id: 3,
    title: "My Shop",
    description: "Site e-commerce électronique, vente/achat avec gestion de comptes vendeurs et clients.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 4,
    title: "My Rotten Tomatos",
    description: "Clone de Rotten Tomatoes avec Next.js + MongoDB, permettant de noter et commenter des films.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "API"],
    imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Dashboard ReactJS",
    description: "Application de gestion avec React.js et MongoDB, affichant des statistiques, filtres et graphique en temps réel.",
    technologies: ["React.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    imageUrl: "https://images.pexels.com/photos/7947155/pexels-photo-7947155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "#",
  },
  {
    id: 6,
    title: "MyChaty",
    description: "Application de messagerie mobile en Flutter avec interface moderne, support des conversations, notifications, etc.",
    technologies: ["Flutter", "Firebase", "Dart", "SQLite"],
    imageUrl: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "#",
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Master 1 Big Data Analytics (en cours)",
    institution: "Université Virtuelle de Côte d'Ivoire",
    duration: "2024 - Présent",
  },
  {
    id: 3,
    degree: "Certificat Flutter",
    institution: "Wecode by Epitech",
    duration: "2025",
  },
  {
    id: 4,
    degree: "Certificat Développeur Full Stack & Mobile",
    institution: "Wecode by Epitech",
    duration: "2024 - 2025",
  },
  {
    id: 5,
    degree: "Licence en Développement d'Applications et e-Services",
    institution: "Université Virtuelle de Côte d'Ivoire",
    duration: "2023 - 2024",
  },

  {
    id: 2,
    degree: "Certificat UI/UX Design",
    institution: "Simplon Côte d'Ivoire",
    duration: "2023",
  },
  
  
  {
    id: 6,
    degree: "Baccalauréat Série D",
    institution: "Lycée Moderne de Cocody",
    duration: "2021",
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "HTML/CSS", icon: "html", category: "frontend", proficiency: 95 },
  { id: 2, name: "Tailwind CSS", icon: "tailwind", category: "frontend", proficiency: 90 },
  { id: 3, name: "React.js", icon: "react", category: "frontend", proficiency: 90 },
  { id: 4, name: "Vue.js", icon: "vue", category: "frontend", proficiency: 85 },
  { id: 5, name: "Next.js", icon: "next", category: "frontend", proficiency: 80 },
  
  // Backend
  { id: 6, name: "Node.js", icon: "node", category: "backend", proficiency: 85 },
  { id: 7, name: "NestJS", icon: "nest", category: "backend", proficiency: 75 },
  { id: 8, name: "Laravel", icon: "laravel", category: "backend", proficiency: 80 },
  { id: 9, name: "PHP", icon: "php", category: "backend", proficiency: 85 },
  { id: 10, name: "Python", icon: "python", category: "backend", proficiency: 75 },
  { id: 11, name: "Flask", icon: "flask", category: "backend", proficiency: 70 },
  
  // Databases
  { id: 12, name: "MySQL", icon: "mysql", category: "backend", proficiency: 85 },
  { id: 13, name: "SQLite", icon: "sqlite", category: "backend", proficiency: 80 },
  { id: 14, name: "MongoDB", icon: "mongodb", category: "backend", proficiency: 85 },
  
  // Mobile
  { id: 15, name: "Flutter", icon: "flutter", category: "mobile", proficiency: 90 },
  { id: 16, name: "React Native", icon: "react-native", category: "mobile", proficiency: 85 },
  
  // Tools
  { id: 17, name: "Git/GitHub", icon: "github", category: "tools", proficiency: 90 },
  { id: 18, name: "Figma", icon: "figma", category: "tools", proficiency: 85 },
  { id: 19, name: "Adobe XD", icon: "xd", category: "tools", proficiency: 80 },
  { id: 20, name: "Postman", icon: "postman", category: "tools", proficiency: 85 },
  
  // Design
  { id: 21, name: "UI/UX Design", icon: "design", category: "design", proficiency: 85 },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Développeur Web & Gestionnaire de Plateforme à WaiCeBon",
    company: "WaiCeBon",
    duration: "Juin - Novembre 2024",
    description: [
      "Gestion technique de la plateforme e-commerce",
      "Intégration, modification et mise à jour des contenus (produits, images, descriptions)",
      "Veille sur les performances et le bon fonctionnement de la plateforme",
      "Collaboration avec les équipes design et marketing"
    ]
  },
  {
    id: 2,
    role: "Développeur Full Stack",
    company: "Digitazone",
    duration: "2023 - 2024",
    description: [
      "Développement de fonctionnalités backend et frontend",
      "Intégration de bases de données (MongoDB, MySQL)",
      "Veille technologique et amélioration continue du produit"
    ]
  },
  {
    id: 3,
    role: "Stagiaire UI/UX Designer",
    company: "Ivoire Geek School",
    duration: "Juillet - Octobre 2023",
    description: [
      "Conception graphique d'interfaces conviviales et esthétiques",
      "Réalisation d'infographies et amélioration de l'expérience utilisateur",
      "Collaboration étroite avec les développeurs web"
    ]
  }
];

export const personalInfo = {
  name: "Dogo Lobognon Didier",
  title: "Développeur Full Stack & Mobile",
  location: "Abidjan, Côte d'Ivoire",
  email: "didier.dogo@epitech.eu",
  phone: "+225 01 61 87 59 57",
  address: "Abidjan, Cocody",
  nationality: "Ivoirien",
  about: "Passionné de technologie avec un excellent esprit d'analyse. J'aime concevoir des interfaces utiles, belles et accessibles. J'apprends vite, travaille bien en équipe, et combine créativité et logique pour résoudre des problèmes complexes.",
  social: {
    github: "https://github.com/LDdidier",
    linkedin: "https://www.linkedin.com/in/ld-didier",
  }
};