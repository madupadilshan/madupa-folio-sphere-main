import { Building2, GraduationCap, Download, Code2, Network, Cloud, Zap, Shield } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

const expertise = [
  {
    icon: Code2,
    text: "Crafting responsive user interfaces using the MERN Stack (MongoDB, Express.js, React, Node.js)",
  },
  {
    icon: Network,
    text: "A strong understanding of networking principles that underpin web technologies",
  },
  {
    icon: Cloud,
    text: "Foundational knowledge in cloud computing, with exposure to Amazon Web Services (AWS)",
  },
  {
    icon: Zap,
    text: "Foundational knowledge in DevOps practices, including CI/CD pipelines for MERN applications",
  },
  {
    icon: Shield,
    text: "Implementing user authentication and authorization systems",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="leading-relaxed">
            I am a motivated third-year Network Technology student at the University of
            Sri Jayewardenepura, passionate about building modern web applications.
            While my studies focus on Network Technology and Cybersecurity, I have over
            a year of hands-on experience developing MERN-stack solutions.
          </p>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 py-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="card-portfolio flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="leading-relaxed">
            I am actively seeking a challenging internship to apply my skills in both
            web development and networking, and to gain valuable hands-on experience in
            a professional environment.
          </p>

          {/* CV Download Button */}
          <div className="flex justify-center pt-4">
            <a
              href={getAssetPath("/Madupa_Dilshan_CV.pdf")}
              download="Madupa_Dilshan_CV.pdf"
              className="btn-hero-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
