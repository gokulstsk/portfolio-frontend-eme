export const mockExpertise = [
  {
    icon: "Code2",
    title: "Full Stack Web Development",
    description: "I design and develop secure, scalable, and high-performance web applications using modern full-stack technologies. I have hands-on experience building case management systems, implementing business workflows, and delivering production-ready applications with a strong focus on maintainability and security.",
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "REST APIs", "Git", "MySQL"],
  },
  {
    icon: "Workflow",
    title: "Workflow Automation & BPM",
    description: "I specialize in workflow-driven application development using BPM tools. I have implemented end-to-end business process automation, task orchestration, approvals, and case lifecycle management for enterprise applications.",
    techStack: ["Camunda BPM", "BPMN", "Workflow Automation", "Process Orchestration"],
  },
  {
    icon: "Glasses",
    title: "AR/VR & Emerging Technologies",
    description: "I explore emerging technologies and have practical experience building AR-based and immersive applications, along with secure real-time systems and visualization platforms.",
    techStack: ["Babylon.js", "Unity", "AR/VR Development"],
  },
];

export const mockExperience = [
  {
    type: "work",
    title: "Software Developer L1",
    company: "P3Fusion Inc · Full-time",
    date: "Jul 2024 – Present",
    description: [
      "Engineered a workflow-driven case management platform using React.js & Camunda BPM, automating 100% of manual approval tasks, reducing case processing time by 40%.",
      "Designed secure RESTful APIs with Node.js/Express.js, improving response times by 30% via query optimization and middleware refactoring. Integrated Okta SSO, RBAC, and MFA, enhancing authentication security and reducing unauthorized access incidents by 25%. Implemented audit logging and case history tracking, increasing compliance and traceability for enterprise operations.",
      "Contributed to Azure DevOps CI/CD pipelines, enabling bi-weekly deployments with zero critical downtime.",
    ],
    techStack: ["React", "Camunda", "Node.js", "Express.js", "Okta", "MySQL"],
  },
  {
    type: "work",
    title: "Project Intern",
    company: "Aviram Studio · Internship",
    date: "Feb 2024 – Jun 2024",
    description: ["Built a 2D multiplayer fruit-cutting game with secure authentication, real-time interactions, and session handling."],
    techStack: ["Game Logic", "Multiplayer", "Authentication"],
  },
  {
    type: "education",
    title: "B.E. Computer Science & Engineering",
    company: "Bannari Amman Institute of Technology",
    date: "Sept 2020 – Apr 2024",
    description: ["Strong foundation in software engineering, data structures, databases, and system design."],
    techStack: [],
  },
];

export const mockProjects = [
  {
    title: "Github Analytics SaaS Dashboard",
    description:
      "Built a full-stack SaaS analytics platform using React and Node.js with secure GitHub OAuth token-based authentication and protected REST APIs. Integrated the GitHub API to fetch and process repository insights (commits, contributors, languages, PRs), implementing backend token validation and middleware-based route protection. Developed interactive data visualizations using Recharts with a responsive UI built.",
    techStack: ["React", "Node.js", "GitHub OAuth", "REST APIs", "Recharts"],
    githubUrl: "https://github.com/gokulstsk/github-analytics-dashboard",
    liveUrl: "#",
  },
  {
    title: "AFR (All File Recovery)",
    description: "Digital forensics tool to recover deleted data from HDDs, SSDs, and USB devices. Includes secure access control and validation to prevent unauthorized recovery.",
    image: "https://images.unsplash.com/photo-1761497194591-9c8fb8a1fffb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxmb3JlbnNpY3MlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDEzNTA4N3ww&ixlib=rb-4.1.0&q=85",
    techStack: ["Python", "Forensics", "File Systems", "Security"],
    githubUrl: "https://github.com/gokulstsk/All-File-Recover",
    liveUrl: "#",
  },
  // {
  //   title: "WebArchitectAR",
  //   description: "AR-based architectural visualization platform built with Babylon.js, featuring Google Authentication and Multi-Factor Authentication (MFA).",
  //   image: "https://images.unsplash.com/photo-1764258057610-be7ca21a0978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxBUiUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzcwMTM1MTA4fDA&ixlib=rb-4.1.0&q=85",
  //   techStack: ["Babylon.js", "WebAR", "Google Auth", "MFA"],
  //   githubUrl: "https://github.com/gokulstsk/WebArchitectAR",
  //   liveUrl: "#",
  // },
];
