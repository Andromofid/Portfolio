export const profile = {
  name: "Youssef El Mofid",
  title: "Développeur Web Full‑Stack — Laravel & React",
  location: "Marrakech, Aït Ourir",
  email: "ymofid18@gmail.com",
  phone: "+212 7 77 52 71 59",
  linkedin: "https://linkedin.com/in/el-mofid-youssef",
  github: "https://github.com/Andromofid",
  cvUrl: "/cv_youssef_elmofid.pdf",
};

export const skills = {
  tech: [
    "HTML",
    "CSS",
    "Tailwind",
    "PHP · Laravel",
    "JavaScript · React",
    "Express.js",
    "APIs REST",
    "Tests unitaires",
    "MySQL",
    "MongoDB · PyMongo",
    "Git · GitHub",
    "SonarQube",
  ],
  soft: [
    "Gestion du temps",
    "Travail en équipe",
    "Communication",
    "Résolution de problèmes",
  ],
  languages: [
    "Arabe — Natif",
    "Tamazight — Natif",
    "Français — A2",
    "Anglais — A2",
  ],
};

export const experiences = [
  {
    title: "Migration de plateforme — Fixi.ma (WordPress → React)",
    company: "Startup FIXI",
    when: "2025 (Freelance)",
    points: [
      "Refonte front‑end vers une application React moderne (SEO & performances).",
      "Export WordPress & import MySQL via back‑end Laravel (nettoyage & mapping).",
      "APIs REST sécurisées pour la recherche et la réservation.",
    ],
  },
  {
    title: "APIs mobiles — Application FIXI (Auth & Données)",
    company: "Startup FIXI",
    when: "2025 (Freelance)",
    points: [
      "APIs d’authentification : connexion classique et Google OAuth.",
      "Endpoints pour gestion des voitures et des papiers (CRUD, alertes).",
      "Standards REST : validation, pagination, gestion des erreurs, sécurité (tokens).",
    ],
  },
  {
    title: "Réservations — Fixi.ma · Fixi+ · Fixi Pro",
    company: "Startup FIXI",
    when: "2024–2025 (Freelance)",
    points: [
      "Modèle de réservation (WordPress) + API Laravel sécurisée.",
      "Suivi client (Fixi+) et gestion garages (Fixi Pro).",
      "Notifications email/SMS.",
    ],
  },
  {
    title: "Suite d’applications — Fixi Plus, Fixi Pro & Fixi Admin",
    company: "Startup FIXI",
    when: "2024 (Freelance)",
    points: [
      "Modules : maintenance, documents (alertes), clients, véhicules, reporting.",
      "Administration : utilisateurs/garages, paramétrages, tableaux de bord.",
    ],
  },
];

// export const projects = [
//   {
//     name: "Application Bus Tracker (projet personnel)",
//     year: "2025",
//     desc: "Suivi en temps réel pour bus avec Laravel, React et Pusher.",
//     bullets: [
//       "App utilisateur : carte avec position en direct.",
//       "Espace conducteur : envoi des coordonnées (X,Y).",
//       "Admin : gestion des bus et des arrêts."
//     ]
//   },
//   {
//     name: "Fixi.ma",
//     year: "2025",
//     desc: "FIXI est une plateforme innovante qui connecte les professionnels d’entretien des véhicules et les garages de confiance avec les clients à la recherche de services de réparation et d’entretien.",
//     bullets: ["Migration WordPress → React",
//       "APIs Laravel et SEO/performance."
//     ]
//   }
// ];

export const projects = [
  {
    name: "Application Bus Tracker (projet personnel)",
    year: "2025",
    desc: "Suivi en temps réel pour bus avec Laravel, React et Pusher.",
    images: [
      "/images/tracking_bus.png",
      "/images/tracking_bus1.png",
      "/images/tracking_bus2.png",
    ], // ← add this image

    link: "", // optional demo/github url
    tags: ["Laravel", "React", "Pusher", "Temps réel"],
    bullets: [
      "App utilisateur : carte avec position en direct.",
      "Espace conducteur : envoi des coordonnées (X,Y).",
      "Admin : gestion des bus et des arrêts.",
    ],
  },
  {
    name: "Fixi.ma",
    year: "2025",
    desc: "FIXI est une plateforme innovante qui connecte les professionnels d’entretien des véhicules et les garages de confiance avec les clients à la recherche de services de réparation et d’entretien.",
    images: ["/images/fixi.png", "/images/fixi2.png"], // ← add this image
    link: "https://www.fixi.ma/",
    tags: ["React", "Laravel", "SEO", "Migration"],
    bullets: [
      "Migration WordPress → React",
      "APIs Laravel et SEO/performance.",
    ],
  },
  {
    name: "BGame — Front-end React",
    year: "2024",
    desc: "Interface moderne de plateforme de jeux vidéo construite en React, avec carrousel dynamique et cartes de jeux interactives.",
    images: ["/images/bgame.png", "/images/bgame1.png"],
    tags: ["React", "Tailwind CSS", "Front-end", "UI/UX"],
    bullets: [
      "Page d’accueil interactive présentant les jeux tendance (Trending Now).",
      "Carrousel d’actualités avec navigation fluide et transitions animées.",
      "Composants réutilisables pour cartes de jeux : images, catégories, notation, statistiques.",
      "Design moderne inspiré du gaming, avec mode sombre et responsive layout.",
    ],
  },
  {
    name: "Glow-UP — Landing Page produit",
    year: "2024",
    desc: "Landing page élégante en HTML/CSS pour un patch anti-imperfections, avec redirection vers la page Amazon du produit.",
    images: ["/images/glow.png"],
    link: "https://andromofid.github.io/Glow-UP/", // ← mets ici l’URL Amazon
    tags: ["HTML", "CSS", "Landing Page"],
    bullets: [
      "Hero section avec texte marketing et bouton d’appel à l’action (BUY NOW).",
      "Arrière-plan dégradé + éléments floraux floutés pour une ambiance skincare.",
      "Mise en page responsive, typographie forte et focus sur la conversion.",
      "Bouton CTA redirige vers Amazon (tracking possible via paramètres UTM).",
    ],
  },
];
export const education = [
  {
    school: "ISTA NTIC SYBA",
    detail: "Développement Web Full-Stack (2022–2024)",
  },
  {
    school: "FSSM",
    detail: "SMPC (2021–2022)",
    img: "/images/fssm.jfif",
  },
  {
    school: "Baccalauréat",
    detail: "Sciences Physiques (2020–2021)",
  },
];
