const profile = {
  name: 'Simone Caminati',
  title: 'Senior Software Engineer',
  location: 'Anzio (Rome), Italy',
  summary: `I am a Software Engineer with over 10 years in the IT industry, specializing in full‑stack development, mobile and web applications, and user interface design. Currently serving as a Software Development Senior Specialist at BV TECH S.p.A., where I contribute to the evolution of PagoPA, the digital payment platform used by Italian citizens. Previously, I led the design and development of hybrid mobile apps and web solutions at Exaltech S.r.l., gaining experience across front‑end and back‑end technologies.`,
  coreStack: ['React', 'Angular', 'Node.js', 'Java • Spring Boot', 'Kotlin', 'PostgreSQL', 'Redis', 'Docker • Kubernetes'],
  contact: {
    email: 'simone.caminati@gmail.com',
    phone: '+39 3297855513',
    github: 'https://github.com/scaminati-bv',
    linkedin: 'https://www.linkedin.com/in/simonecaminati'
  },
  skills: {
    'DevOps': ['Azure', 'Docker', 'Kubernetes (AKS)', 'CI/CD Pipelines', 'Terraform', 'Jenkins', 'OpenShift', 'Agile Scrum'],
    'Back-end': ['Spring Boot', 'Express', 'Fastify', 'REST API', 'Drools', 'Camunda'],
    'Front-end': ['Next.js', 'TailwindCSS', 'Angular', 'React', 'Vue.js'],
    'Data': ['MongoDB', 'Redis', 'Oracle SQL', 'PostgreSQL'],
    'Mobile': ['Android', 'Ionic', 'Capacitor', 'Cordova'],
    'Programming': ['Node.js', 'JavaScript', 'TypeScript', 'fp-ts (Functional programming)', 'Kotlin', 'Java'],
    'Languages': ['Italian (native)', 'English (B2)']
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
      stack: ['Spring Boot', 'Java', 'Kotlin', 'React', 'Node.js', 'Redis'],
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
