import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { motion, useReducedMotion } from "framer-motion";

const tools = ["AWS", "Docker", "Terraform", "GitHub Actions", "Jenkins", "Linux"];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const goToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="surface-grid absolute inset-0 opacity-70 pointer-events-none" />
      <div className="absolute top-40 -left-36 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="section-container relative z-10 w-full !pt-14 !pb-20">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-20 items-center">
          <motion.div {...reveal()} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-7">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Available for opportunities
            </div>
            <h1 className="text-[clamp(3.2rem,8vw,7.4rem)] leading-[.91] font-extrabold tracking-[-.065em] text-foreground">
              I engineer<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-accent)" }}>reliable cloud.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I’m Madupa, a Cloud &amp; DevOps Engineer turning complex infrastructure into secure, automated systems that teams can ship with confidence.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button onClick={goToContact} className="btn-hero-primary inline-flex items-center justify-center gap-2">Let’s work together <ArrowUpRight className="w-4 h-4" /></button>
              <a href={getAssetPath("/Madupa_Dilshan_CV.pdf")} download="Madupa_Dilshan_CV.pdf" className="btn-hero-secondary inline-flex items-center justify-center gap-2"><Download className="w-4 h-4" /> Download résumé</a>
            </div>
            <div className="mt-10 pt-7 border-t border-border/70 flex flex-wrap gap-x-8 gap-y-4 items-center justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Colombo, Sri Lanka</span>
              <a href="https://github.com/madupadilshan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Github className="w-4 h-4" /> GitHub</a>
              <a href="https://www.linkedin.com/in/madupa-dilshan-3226711b1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)} className="relative max-w-lg mx-auto lg:mr-0 w-full">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/5 blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-card shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={getAssetPath("/pho.jpg")} alt="Madupa Dilshan" className="w-full h-full object-cover object-center grayscale-[12%] contrast-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute left-5 right-5 bottom-5 p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-xs uppercase tracking-[.18em] text-primary font-bold">Current focus</p><h2 className="text-xl font-bold mt-1">Cloud automation at scale</h2></div>
                  <Sparkles className="w-5 h-5 text-primary shrink-0" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">{tools.slice(0, 4).map(tool => <span key={tool} className="text-xs px-2.5 py-1.5 rounded-lg bg-secondary/80 text-muted-foreground">{tool}</span>)}</div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -left-12 top-12 px-4 py-3 rounded-xl bg-card/90 backdrop-blur border border-border shadow-xl items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><ArrowDownRight className="w-4 h-4" /></div>
              <div><p className="text-xs text-muted-foreground">Specialized in</p><p className="text-sm font-bold">CI/CD &amp; IaC</p></div>
            </div>
          </motion.div>
        </div>

        <motion.div {...reveal(0.18)} className="mt-20 pt-8 border-t border-border/70">
          <p className="text-center text-xs uppercase tracking-[.2em] text-muted-foreground font-bold mb-6">Technology I build with</p>
          <div className="flex flex-wrap justify-center gap-x-9 gap-y-4">{tools.map(tool => <span key={tool} className="text-sm md:text-base font-bold text-foreground/55 hover:text-primary transition-colors">{tool}</span>)}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
