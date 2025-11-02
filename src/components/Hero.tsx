import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Typewriter from "typewriter-effect";
import { getAssetPath } from "@/lib/assets";

const roles = [
  "Cloud & DevOps Enthusiast",
  "MERN-Stack Developer",
  "Network Technologist",
];

const badges = [
  {
    image: "/certificates/harness-ci-certified-expert.png",
    alt: "Harness CI Certified Expert",
    name: "Harness CI"
  },
  {
    image: "/certificates/aws-educate-introduction-to-cloud-101-training-badg.png",
    alt: "AWS Cloud Computing 101",
    name: "AWS Cloud 101"
  },
  {
    image: "/certificates/aws-knowledge-cloud-essentials-training-badge.png",
    alt: "AWS Cloud Essentials",
    name: "AWS Essentials"
  },
  {
    image: "/certificates/aviatrix-ace-associate-badge.png",
    alt: "Aviatrix ACE",
    name: "Aviatrix ACE"
  },
  {
    image: "/certificates/aws-amazon-q-developer-fundamentals.png",
    alt: "Amazon Q Developer",
    name: "Amazon Q Dev"
  }
];

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
            {/* Left Side - Profile Image with Badge Slider */}
            <div className="flex flex-col items-center animate-fade-in-up gap-10 w-full">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto">
                {/* Main Profile Image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/30 hover:scale-105 transition-transform duration-500">
                  <img
                    src={getAssetPath("/pho.jpg")}
                    alt="Madupa Dilshan"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Animated Badge Slider - Larger */}
              <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card/40 backdrop-blur-md border border-primary/20 shadow-xl p-6">
                <div className="flex gap-6 animate-marquee">
                  {/* First set of badges */}
                  {badges.map((badge, index) => (
                    <div
                      key={`badge-1-${index}`}
                      className="flex-shrink-0 group relative"
                    >
                      <div className="w-20 h-20 bg-background/80 backdrop-blur-sm rounded-xl border-2 border-primary/30 p-2.5 shadow-lg hover:scale-110 hover:border-primary transition-all duration-300 cursor-pointer">
                        <img
                          src={getAssetPath(badge.image)}
                          alt={badge.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-card backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-primary/30 pointer-events-none z-10">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {badges.map((badge, index) => (
                    <div
                      key={`badge-2-${index}`}
                      className="flex-shrink-0 group relative"
                    >
                      <div className="w-20 h-20 bg-background/80 backdrop-blur-sm rounded-xl border-2 border-primary/30 p-2.5 shadow-lg hover:scale-110 hover:border-primary transition-all duration-300 cursor-pointer">
                        <img
                          src={getAssetPath(badge.image)}
                          alt={badge.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-card backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-primary/30 pointer-events-none z-10">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/40 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center md:text-left space-y-6 animate-fade-in-up">
              {/* Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-foreground">Madupa </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Dilshan
                </span>
              </h1>

              {/* Animated Role with Typewriter */}
              <div className="h-16 flex items-center md:justify-start justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  I'm a{" "}
                  <span className="inline-block">
                    <Typewriter
                      options={{
                        strings: roles,
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 80,
                      }}
                    />
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A developer with foundational skills in MERN Stack and Networking, currently
                advancing into DevOps, AWS, and Cybersecurity. Proven experience with CI/CD pipelines for MERN projects.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center pt-4">
                <a
                  href={getAssetPath("/Madupa_Dilshan_CV.pdf")}
                  download="Madupa_Dilshan_CV.pdf"
                  className="btn-hero-primary inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
                <button
                  onClick={handleContactClick}
                  className="btn-hero-secondary inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 md:justify-start justify-center items-center pt-4">
            <a
              href="https://github.com/madupadilshan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group shadow-md"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/madupa-dilshan-3226711b1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group shadow-md"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://twitter.com/MadupaDil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group shadow-md"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 shadow-md">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
