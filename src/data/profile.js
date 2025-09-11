const profile = {
  name: 'Simone Caminati',
  title: 'Hi, I’m Simone 👋',
  location: 'Anzio (Rome), Italy',
  summary: `I am a Senior Software Engineer with over 10 years in the IT industry, specializing in full‑stack development of web and mobile applications and user interface design. Currently serving as a Software Development Senior Specialist at BV TECH S.p.A., where I contribute to the evolution of PagoPA, the digital payment platform used by Italian citizens. Previously, I led the design and development of hybrid mobile apps and web solutions at Exaltech S.r.l., gaining experience across front‑end and back‑end technologies.`,
  contact: {
    github: 'https://github.com/scaminati',
    githubPagoPA: 'https://github.com/scaminati-bv',
    linkedin: 'https://www.linkedin.com/in/simonecaminati'
  },
  skills: {
    'DevOps': ['Azure', 'Vercel', 'Docker', 'Kubernetes (AKS)', 'CI/CD Pipelines', 'Terraform', 'Jenkins', 'OpenShift', 'Agile Scrum'],
    'Back-end': ['Spring Boot', 'Express', 'Fastify', 'REST API', 'Drools', 'Camunda'],
    'Front-end': ['Next.js', 'TailwindCSS', 'Angular', 'React', 'Vue.js'],
    'Data': ['MongoDB', 'Redis', 'Oracle SQL', 'PostgreSQL'],
    'Mobile': ['Android', 'Ionic', 'Capacitor', 'Cordova'],
    'Programming': ['Node.js', 'JavaScript', 'TypeScript', 'fp-ts (Functional programming)', 'Kotlin', 'Java'],
    'Languages': ['Italian (native)', 'English (professional)']
  },
  experience: [
    {
      company: 'BV TECH S.p.A.',
      title: 'Software Development Sr. Specialist',
      location: 'Remote',
      period: 'Jul 2024 – Present',
      highlights: [
        'Consultant at PagoPA, optimizing payment processes and adding features to improve UX and platform efficiency.',
        'Developed communications management software for the Lombardy region.'
      ]
    },
    {
      company: 'Exaltech S.r.l.',
      title: 'Software Engineer',
      location: 'Latina',
      period: 'May 2013 – Jul 2024',
      highlights: [
        'Consultant at Reply, Poste Italiane, Ministero di Giustizia.',
        'Mobile: e‑commerce app for online shopping.',
        'Mobile: aerial equipment calibration tool for field adjustments and diagnostics.',
        'Mobile: social network for multimedia sharing with followers and interactions.',
        'Mobile: delivery management app to receive, track and complete orders.',
        'Mobile: ExploraLatina – explore historical, cultural and natural sites (Expo Milano 2015).',
        'Web: smart key access control for booked accommodation (Nuki).',
        'Web: industrial access control system to manage entry points.',
        'Web: guided tours booking platform with real‑time availability.'
      ]
    }
  ],
  projects: [
    {
      name: 'PagoPA Checkout',
      company: 'BV TECH S.p.A.',
      period: 'Jul 2024 – Apr 2025',
      stack: ['Spring Boot', 'Java', 'Kotlin', 'React', 'Node.js', 'Redis', 'CI/CD Pipelines', 'Azure', 'Docker', 'Terraform', 'Scrum'],
      points: [
        'Maintained and enhanced frontend and backend components with performance optimizations.',
        'Wrote unit tests for React components to improve reliability and maintainability.',
        'Integrated Redis caching into the Wallet API achieving ~60% response time reduction.',
        'Implemented SPID authentication flow for secure user access.',
        'Designed CI pipelines for automated deployments with unit/integration tests across UAT and production.',
        'Performed soak testing using k6 to validate stability after Node.js 22 upgrade.'
      ]
    },
    {
      name: 'FantaMD',
      company: 'Personal Project',
      period: 'Jun 2025 – Present',
      stack: ['Next.js', 'TailwindCSS', 'HeroUI', 'Fastify', 'PostgreSQL', 'React', 'Github Actions', 'Vercel'],
      github: 'https://github.com/scaminati/fantacalcio-md',
      points: [
        'FantaMD is a full-stack web application designed to support participants management for our fantasy football game.',
        'The entire project is deployed on Vercel for seamless hosting and scalability.',
        'On every commit, a GitHub Action is triggered to automatically run the unit tests.',
      ]
    },
    {
      name: "GATCOM – Civil Protection communications platform",
      company: "BV TECH S.p.A.",
      period: "Apr 2025 – Present",
      stack: ["Spring Boot", "Java", "Quartz"],
      points: [
        "Designed and developed a platform to manage communications for the Lombardy Region Civil Protection.",
        "Built REST APIs for CRUD operations and batch processes for communications delivery and lifecycle management."
      ]
    },
    {
      name: 'Ministero di Giustizia – Public sales portal',
      company: 'Exaltech S.r.l.',
      period: 'Jan 2024 – Jul 2024',
      stack: ['Java', 'Spring Boot'],
      points: [
        'Implemented process for receiving telematic offers from buyers in judicial sales.',
        'Developed PEC reader to store encrypted offers; automatically decrypted three hours before the hearing.',
        'Managed external communications and reporting via SOAP services, ensuring legal compliance.',
        'Orchestrated batch jobs accessing DB concurrently, monitoring and updating workflow status.'
      ]
    },
    {
      name: 'Smactory – Industrial solutions suite',
      company: 'Exaltech S.r.l.',
      period: 'May 2016 – Jul 2024',
      stack: ['JavaScript', 'AngularJS', 'Cordova'],
      points: [
        'Real‑time insights on machinery, processes and HMI.',
        'Features: augmented reality, beacon detection, QR scanning, video calling.',
        'Responsive web app converted to hybrid mobile app via Cordova.'
      ]
    },
    {
      name: "PosteItaliane - User identification and Business account management",
      company: "Exaltech S.r.l.",
      period: "Jan 2022 – Dec 2023",
      stack: ["Java", "Spring Boot", "Angular", "Quartz", "Drools"],
      points: [
        "Analyzed and maintained issues in a national-scale identification system.",
        "Implemented the new identification platform planned to replace the legacy system.",
        "Managed purchasing and enrichment workflows for business customers."
      ]
    },
    {
      name: "E‑commerce mobile app",
      company: "Exaltech S.r.l.",
      period: "Jan 2020 – Sep 2023",
      stack: ["Ionic", "Angular", "TypeScript"],
      points: [
        "Developed mobile apps (iOS & Android) for customer purchases and for agents/sales managers’ operations.",
        "Supported sales monitoring and field operations within a unified mobile experience."
      ]
    },
    {
      name: "IOS app for calibration tool",
      company: "Exaltech S.r.l.",
      period: "Feb 2019 – Feb 2022",
      stack: ["Cordova", "AngularJS Material"],
      points: [
        "Built an application to control a hardware case used for aerial equipment calibration.",
        "Delivered device interactions and UI flows tailored for field calibration procedures."
      ]
    },
    {
      name: "Social Network",
      company: "Exaltech S.r.l.",
      period: "Jun 2021 – Jan 2022",
      stack: ["Kotlin", "Android"],
      points: [
        "Designed and developed an Android social app for sharing images, videos, and live streams.",
        "Implemented content obfuscation with controlled unmasking after payment by followers."
      ]
    },
    {
      name: "Home Hospitality",
      company: "Exaltech S.r.l.",
      period: "Jan 2021 – Jul 2021",
      stack: ["Angular", "Angular Material", "Single‑SPA"],
      points: [
        "Developed a web app for remote booking and access management for apartments.",
        "Integrated Nuki devices to enable remote door opening, check‑in, and reservations."
      ]
    },
    {
      name: "Delivery man app for food delivery",
      company: "Exaltech S.r.l.",
      period: "Apr 2020 – Sep 2020",
      stack: ["Android SDK"],
      points: [
        "Built an Android app to support pick‑up and delivery operations with real‑time geolocation.",
        "Captured photo evidence through the delivery flow to increase accuracy and accountability."
      ]
    },
    {
      name: "Bills management and parts procurement",
      company: "Exaltech S.r.l.",
      period: "Dec 2017 – Jan 2020",
      stack: ["AngularJS"],
      points: [
        "Developed a web application to manage bills and support procurement of parts for production."
      ]
    },
    {
      name: "Electronic invoice",
      company: "Exaltech S.r.l.",
      period: "Jun 2018 – Dec 2019",
      stack: ["Spring Boot", "Java", "Camunda BPM", "RabbitMQ", "Oracle"],
      points: [
        "Architected and developed microservices for XML e‑invoice archiving and validation on Oracle DB.",
        "Automated ingestion and validation workflows with Camunda BPM and inter‑service messaging via RabbitMQ."
      ]
    },
    {
      name: "Invoice reconciliation",
      company: "Exaltech S.r.l.",
      period: "Dec 2018 – Nov 2019",
      stack: ["AngularJS Material"],
      points: [
        "Built a front‑end to streamline order‑to‑invoice association.",
        "Enabled learning of user associations so future matches could be automated."
      ]
    },
    {
      name: "Console Operation (e‑invoicing help desk)",
      company: "Exaltech S.r.l.",
      period: "Feb 2019 – Jun 2019",
      stack: ["React"],
      points: [
        "Developed a support console for help‑desk operations of an e‑invoicing platform."
      ]
    },
    {
      name: "ACS – Access Control System",
      company: "Exaltech S.r.l.",
      period: "Sep 2014 – May 2016",
      stack: ["AngularJS"],
      points: [
        "Implemented plant access control with interactive map to open/close turnstiles and barriers.",
        "Evaluated user access attempts via a Business Rules Management System (BRMS)."
      ]
    },
    {
      name: "Pullsar (smart manufacturing ecosystem)",
      company: "Exaltech S.r.l.",
      period: "Sep 2013 – May 2016",
      stack: ["Android SDK"],
      points: [
        "Developed smartphone, tablet, and smartwatch apps supporting a smart ecosystem for packaging operations."
      ]
    },
    {
      name: "Piguto (guided tours)",
      company: "Exaltech S.r.l.",
      period: "Jul 2015 – Apr 2016",
      stack: ["Ionic", "AngularJS"],
      points: [
        "Built mobile apps (iOS & Android) for booking guided tours.",
        "Developed the web app for tour operators to create and manage tours."
      ]
    },
    {
      name: "Explora Latina",
      company: "Exaltech S.r.l.",
      period: "Mar 2015 – Nov 2015",
      stack: ["Ionic"],
      points: [
        "Created a mobile app aggregating information on historical, cultural, and natural sites in the province of Latina.",
        "Project showcased at Expo Milano 2015."
      ]
    },
    {
      name: "Bibshake",
      company: "Exaltech S.r.l.",
      period: "Apr 2013 – Dec 2013",
      stack: ["PrimeFaces"],
      points: [
        "Developed a web app to manage scientific expertise for Sapienza University of Rome."
      ]
    }
  ],
  education: [
    {
      school: 'Sapienza University, Rome',
      degree: "Bachelor's Degree – Information Engineering",
      period: 'Aug 2009 – Dec 2012',
      details: 'Grade: 108/110. Thesis: Implementazione e analisi sperimentale di algoritmi di data streaming su piattaforma GPU.'
    }
  ]
}

export default profile
