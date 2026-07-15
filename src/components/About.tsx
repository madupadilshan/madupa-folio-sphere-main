import { Download, Workflow, Container, Cloud, Server, Network, Code2 } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import AnimatedCard from "./AnimatedCard";
import { motion } from "framer-motion";

const expertise = [
  {
    icon: Workflow,
    text: "Designing CI/CD pipelines with GitHub Actions and Jenkins to automate build, test, and deployment",
  },
  {
    icon: Container,
    text: "Containerizing applications with Docker and deploying to AWS ECS Fargate",
  },
  {
    icon: Server,
    text: "Provisioning cloud infrastructure as code with Terraform (VPC, ECS, ECR, ALB)",
  },
  {
    icon: Cloud,
    text: "Building and operating on AWS — EC2, ECS, ECR, S3, IAM, and core cloud services",
  },
  {
    icon: Network,
    text: "Applying strong networking and security fundamentals (TCP/IP, firewalls, VPC design)",
  },
  {
    icon: Code2,
    text: "Full-stack development with the MERN stack to build the applications I deploy",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">About Me</h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="leading-relaxed">
            I'm a Cloud & DevOps Engineer focused on automating the journey from code to
            production. I design CI/CD pipelines, containerize applications with Docker,
            and provision cloud infrastructure as code on AWS. Backed by a solid
            foundation in networking, security, and full-stack (MERN) development, I build
            systems that are reliable, scalable, and easy to ship.
          </p>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 py-8">
            {expertise.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="card-portfolio flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </AnimatedCard>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="leading-relaxed"
          >
            I'm looking to take on Cloud and DevOps engineering challenges where I can
            automate infrastructure, streamline delivery pipelines, and help teams ship
            faster and more reliably.
          </motion.p>

          {/* CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center pt-4"
          >
            <a
              href={getAssetPath("/Madupa_Dilshan_CV.pdf")}
              download="Madupa_Dilshan_CV.pdf"
              className="btn-hero-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download My CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
