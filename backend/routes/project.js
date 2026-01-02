import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Real-Time Analytics Dashboard",
      year: "2024",
      description: [
        "Developed a real-time analytics dashboard using Kafka for streaming data.",
        "Backend powered by Spring Boot to process and store events efficiently.",
        "Provides low-latency visualizations for monitoring system performance.",
        "Integrated PostgreSQL for storing historical metrics and logs.",
        "Scalable architecture for multiple concurrent users."
      ],
      uses: ["Monitoring", "Event streaming", "Data analytics"],
      techStack: ["Spring Boot", "Kafka", "PostgreSQL", "React", "Tailwind"]
    },
    {
      id: 2,
      title: "Career Portal Application",
      year: "2025",
      description: [
        "Built a job portal for candidates and recruiters.",
        "Implemented secure authentication with JWT and role-based access.",
        "Responsive frontend with React and Tailwind CSS.",
        "Backend using Spring Boot for handling job postings and applications.",
        "MySQL database for storing user profiles, jobs, and applications."
      ],
      uses: ["Job search", "Recruitment", "Career management"],
      techStack: ["Spring Boot", "React", "MySQL", "Tailwind"]
    },
    {
      id: 3,
      title: "Freelancing Mobile App – Employee Dashboard",
      year: "2025",
      description: [
        "Mobile dashboard for freelancers to track tasks, earnings, and work status.",
        "Backend REST APIs built with Spring Boot.",
        "React Native mobile app with real-time updates.",
        "Integrated PostgreSQL for user and task management.",
        "Provides notifications and analytics for freelancers on-the-go."
      ],
      uses: ["Freelancing", "Task management", "Work tracking"],
      techStack: ["Spring Boot", "React Native", "PostgreSQL", "Tailwind"]
    }
  ]);
});

export default router;
