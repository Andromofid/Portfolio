export const profile = {
  name: "Youssef El Mofid",
  title: "Développeur Full-Stack",
  strapline: "Laravel, React, infrastructure VPS et produits web en production",
  location: "Marrakech, Aït Ourir - Maroc",
  email: "ymofid18@gmail.com",
  phone: "+212 7 77 52 71 59",
  linkedin: "https://linkedin.com/in/el-mofid-youssef",
  github: "https://github.com/Andromofid",
  cvUrl: "/cv_youssef_elmofid.pdf",
  availability:
    "Disponible pour une mission freelance ou un poste junior full-stack",
  summary:
    "Développeur Full-Stack avec une expérience concrète sur la conception, le développement et l'exploitation en production de FIXI.MA, une plateforme marocaine de réservation de services automobiles. À l'aise sur toute la chaîne, du back-end Laravel aux interfaces React, avec un vrai focus sur la fiabilité, la sécurité et la performance.",
  focus: [
    "APIs Laravel sécurisées",
    "Interfaces React orientées conversion",
    "Administration VPS dev et production",
    "Workflows CRM et réservation multi-plateforme",
  ],
};

export const spotlight = [
  {
    value: "2 VPS",
    label: "administrés au quotidien",
  },
  {
    value: "3 plateformes",
    label: "reliées autour du parcours FIXI",
  },
  {
    value: "2024 - présent",
    label: "expérience produit en freelance",
  },
];

export const experience = {
  role: "Développeur Full-Stack",
  company: "FIXI.MA",
  type: "Freelance",
  when: "2024 - Présent",
  intro:
    "Participation directe au produit, aux APIs, à l'infrastructure et à l'amélioration continue de l'expérience client côté web et mobile.",
  pillars: [
    {
      title: "Produit & expérience utilisateur",
      points: [
        "Amélioration de l'ergonomie et du design de Fixi Market et de Fixi Pro avec retouches UI, harmonisation visuelle et corrections issues de rapports de bugs détaillés.",
        "Migration complète du site vitrine de WordPress vers une architecture React connectée à une API Laravel sécurisée, avec gains visibles en SEO et en performance.",
        "Mise en place du système de réservation multi-plateforme pour Fixi.ma, Fixi+, et Fixi Pro avec confirmations, annulations et notifications automatisées.",
      ],
    },
    {
      title: "Back-end & mobile APIs",
      points: [
        "Développement des APIs mobiles : authentification classique et Google OAuth, gestion des véhicules et documents, alertes d'expiration, historique des rendez-vous et notifications push.",
        "Conception du module CRM avec gestion clients, véhicules, historique des visites et tableaux de bord multi-garages.",
        "Intégration de Firebase Cloud Messaging pour les rappels de rendez-vous dans l'application mobile Fixi.",
      ],
    },
    {
      title: "Infrastructure & analytics",
      points: [
        "Administration de deux VPS, développement et production, avec gestion des accès, maintenance système et résolution d'incidents courants.",
        "Mise en place de Google Tag Manager et GA4 sur le tunnel de réservation, avec gestion du consentement cookies.",
        "Travail régulier autour de la stabilité, de la sécurité applicative et de la qualité de déploiement.",
      ],
    },
  ],
};

export const projects = [
  {
    name: "Jarrabtiha.ma",
    year: "2026",
    desc: "Plateforme marocaine d'avis sur les produits cosmétiques, pensée pour un catalogue structuré et une navigation simple côté utilisateur.",
    images: [
      "/images/jarrabtiha.png",
      "/images/jarrabtiha1.png",
      "/images/jarrabtiha2.png",
    ],
    link: "https://jarrabtiha.ma/",
    tags: ["Laravel 11", "Tailwind CSS", "Alpine.js", "MySQL"],
    bullets: [
      "Système de notation avec cache calculé pour améliorer la rapidité d'affichage.",
      "Arborescence de 36 catégories pour organiser le catalogue beauté.",
      "Architecture orientée contenu, filtrage et consultation rapide des produits.",
    ],
  },
  {
    name: "Bus Tracker",
    year: "2025",
    desc: "Application de suivi GPS en temps réel pour les transports, avec une expérience dédiée aux usagers, aux conducteurs et à l'administration.",
    images: [
      "/images/tracking_bus.png",
      "/images/tracking_bus1.png",
      "/images/tracking_bus2.png",
    ],
    tags: ["Laravel", "React", "Pusher", "Temps réel"],
    bullets: [
      "Carte utilisateur avec position des bus en direct.",
      "Espace conducteur pour l'envoi des coordonnées GPS.",
      "Back-office pour la gestion des lignes, des véhicules et des arrêts.",
    ],
  },
  {
    name: "KechQuad — Réservation d'excursions quad & buggy",
    year: "2026",
    desc: "Landing page et plateforme de réservation pour une agence d'excursions quad et buggy à Marrakech, développée avec Next.js.",
    images: ["/images/kechquad.png", "/images/kechquad-reservation.png"],
    link: "https://marrakech-quad.vercel.app/", // ajoute l'URL du site si disponible
    tags: ["Next.js", "Réservation", "Email", "UI/UX"],
    bullets: [
      "Landing page orientée conversion : hero avec image d'ambiance, chiffres clés (expérience, clients, guides) et doubles appels à l'action.",
      "Tunnel de réservation multi-étapes (choix de l'activité, options, date) avec calcul du sous-total en temps réel.",
      "Notification automatique par email au vendeur/gérant à chaque nouvelle réservation.",
      "Galerie photo des excursions et des parcours proposés.",
    ],
  },
  {
    name: "FIXI.MA",
    year: "2025",
    desc: "Plateforme de réservation de services automobiles qui relie clients, garages et applications métiers autour d'un même parcours.",
    images: ["/images/fixi.png", "/images/fixi2.png"],
    link: "https://www.fixi.ma/",
    tags: ["React", "Laravel", "SEO", "Réservation"],
    bullets: [
      "Migration de WordPress vers React pour moderniser l'expérience et améliorer le référencement.",
      "Connexion à une API Laravel sécurisée pour la recherche, la réservation et les parcours clients.",
      "Création d'une expérience de réservation adaptée aux besoins réels des automobilistes.",
    ],
  },
  {
    name: "FIXI Pro",
    year: "2025",
    desc: "Application métier destinée aux garages partenaires pour centraliser les rendez-vous, les clients, les véhicules et le suivi des interventions.",
    images: ["/images/fixi-pro.png", "/images/fixi-pro-calendar.png"],
    tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    bullets: [
      "Tableau de bord avec indicateurs d'activité et calendrier des rendez-vous.",
      "Gestion centralisée des clients, des véhicules, des prestations et des interventions.",
      "Suivi des commandes de pièces, notifications et rappels automatiques des rendez-vous.",
    ],
  },
  {
    name: "FIXI Admin",
    year: "2025",
    desc: "Back-office d'administration de l'écosystème FIXI permettant de superviser les garages, les utilisateurs et les données utilisées par les différentes applications.",
    tags: ["Laravel", "Blade", "Tailwind CSS", "Administration"],
    bullets: [
      "Gestion des garages, mécaniciens, utilisateurs, villes et quartiers.",
      "Administration du catalogue automobile, des services et des offres commerciales.",
      "Supervision des réservations, promotions et paramètres partagés entre les applications FIXI.",
    ],
  },
  {
    name: "Glow-UP",
    year: "2024",
    desc: "Landing page produit pensée pour la conversion avec une identité visuelle plus éditoriale.",
    images: ["/images/glow.png"],
    link: "https://andromofid.github.io/Glow-UP/",
    tags: ["HTML", "CSS", "Landing Page"],
    bullets: [
      "Hero marketing avec appel à l'action clair.",
      "Ambiance visuelle skincare basée sur des dégradés et des flous décoratifs.",
      "Structure simple, responsive et centrée sur la conversion.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Back-end",
    items: ["PHP", "Laravel", "Node.js", "Express", "Python", "API REST"],
  },
  {
    title: "Front-end",
    items: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Blade",
      "Alpine.js",
      "HTML/CSS",
    ],
  },
  {
    title: "Données & outils",
    items: [
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "SonarQube",
      "Tests unitaires",
    ],
  },
  {
    title: "Infra & intégrations",
    items: ["VPS", "Nginx", "Docker", "Firebase", "Google Tag Manager", "GA4"],
  },
];

export const education = [
  {
    school: "ISTA NTIC SYBA",
    detail: "Développement Web Full-Stack",
    years: "2022 - 2024",
  },
  {
    school: "FSSM - Marrakech",
    detail: "SMPC",
    years: "2021 - 2022",
    img: "/images/fssm.jfif",
  },
  {
    school: "Baccalauréat Sciences Physiques",
    detail: "Mention Assez Bien",
    years: "2021",
  },
];

export const languages = [
  { name: "Arabe", level: "Natif" },
  { name: "Tamazight", level: "Natif" },
  { name: "Français", level: "A2" },
  { name: "Anglais", level: "A2" },
];

export const softSkills = [
  "Autonomie et collaboration en équipe réduite",
  "Résolution de problèmes techniques sous contrainte",
  "Gestion du temps et priorisation",
];
