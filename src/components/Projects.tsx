import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { useState } from "react";
import AnimatedCard from "./AnimatedCard";

const projects = [
  {
    category: "MERN/DevOps/Cloud",
    title: "AI-Powered Recruitment Platform",
    description:
      "Full-stack recruitment platform with AI-driven CV analysis and job matching using React, Node.js, and Python microservices integrated with Google Gemini 2.0 AI. Containerized with Docker, implemented CI/CD pipeline using GitHub Actions, and deployed to cloud with Nginx and Let's Encrypt SSL.",
    tags: ["React", "Node.js", "MongoDB Atlas", "Python Flask", "Google Gemini AI", "Docker", "GitHub Actions", "Socket.io", "JWT"],
    liveUrl: "https://recruitmentapp.live/",
    githubUrl: "https://github.com/madupadilshan/recruitment-ai-system",
    image: getAssetPath("/projects/recruitment-system.png"),
  },
  {
    category: "DevOps/Cloud",
    title: "Full Automated CI/CD Pipeline for Node.js",
    description:
      "Complete CI/CD automation with GitHub Actions deploying containerized Node.js app to AWS ECS Fargate. Infrastructure provisioned with Terraform including VPC, ECR, ECS, and ALB. Automatic build, test, and deployment on every git push.",
    tags: ["Node.js", "Docker", "Terraform", "GitHub Actions", "AWS ECS", "AWS ECR"],
    liveUrl: "",
    githubUrl: "https://github.com/madupadilshan/nodejs-aws-cicd.git",
    image: getAssetPath("/projects/nodejs-cicd-pipeline.png"),
    hideLiveDemo: true,
    date: "Nov 2024",
  },
  {
    category: "DevOps/Cloud",
    title: "Automated CI/CD Pipeline on AWS",
    description:
      "Fully automated CI/CD pipeline with Jenkins, Docker, and AWS EC2. Git push triggers automatic container build and deployment via GitHub webhooks.",
    tags: ["AWS", "Jenkins", "Docker", "CI/CD"],
    liveUrl: "", // No live demo
    githubUrl: "https://github.com/madupadilshan/cicd-project",
    image: getAssetPath("/projects/cicd-pipeline.png"),
    hideLiveDemo: true, // Hide live demo button for this project
  },
  {
    category: "Web Design",
    title: "Personal Portfolio Website",
    description:
      "A fully responsive portfolio website showcasing my skills, projects, and experience with modern UI/UX design principles.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://madupadilshan.github.io/portfolio/",
    githubUrl: "https://github.com/madupadilshan/portfolio",
    image: getAssetPath("/projects/portfolio.jpg"),
  },
  {
    category: "E-Commerce",
    title: "E-commerce Store",
    description:
      "Full-featured online store with product listings, shopping cart, payment integration, and user authentication system.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://madupadilshan.github.io/ecommerce-store",
    githubUrl: "https://github.com/madupadilshan/ecommerce-store",
    image: getAssetPath("/projects/online-store.jpg"),
  },
  {
    category: "Content Platform",
    title: "Blog Platform",
    description:
      "Content management system allowing users to create, edit, publish articles with rich text editor and comment system.",
    tags: ["MERN", "RESTful API"],
    liveUrl: "https://blogfrontend-nu.vercel.app/",
    githubUrl: "https://github.com/madupadilshan/blogApp",
    image: getAssetPath("/projects/blog.jpg"),
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and creative solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.15}
              className="card-portfolio space-y-4 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 -mx-6 -mt-6 mb-2 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Category Badge on Image */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary rounded text-xs text-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {!project.hideLiveDemo && (
                  project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
                    </span>
                  )
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-hero-primary inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Show More Projects
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
