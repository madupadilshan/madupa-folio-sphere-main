import { Shield, Code, Layers, Database, Wrench, Sparkles } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const skillCategories = [
  {
    icon: Shield,
    title: "Networking & Security",
    skills: [
      "TCP/IP Suite",
      "Routing & Switching Concepts",
      "Firewall Configuration",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["HTML5", "CSS3/Sass", "JavaScript (ES6+)", "Python"],
  },
  {
    icon: Layers,
    title: "Frontend & Backend",
    skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: ["Git/GitHub", "Docker", "CI/CD Pipelines", "AWS Basics"],
  },
  {
    icon: Sparkles,
    title: "Other",
    skills: [
      "Responsive Design",
      "Web Accessibility",
      "Performance Optimization",
      "Agile Methodologies",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="card-portfolio space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
