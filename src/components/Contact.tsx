import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import AnimatedCard from "./AnimatedCard";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "madupadilshan111@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Open the visitor's email app with the message pre-filled.
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      formData.subject || "New Contact Form Message"
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening your email app…",
      description: "Please send the pre-filled message to reach me directly.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow flex justify-center">Start a conversation</p>
        <h2 className="section-heading">Let’s build something reliable</h2>
        <p className="section-subtitle">Have a cloud, automation, or deployment challenge? Tell me what you’re building and where you need help.</p>

        <div className="grid md:grid-cols-[.85fr_1.15fr] gap-8 lg:gap-14 mt-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I’m open to engineering opportunities, freelance projects, and thoughtful collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:madupadilshan111@gmail.com"
                className="card-portfolio flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    madupadilshan111@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+94781396283"
                className="card-portfolio flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+94 78 139 6283</p>
                </div>
              </a>

              {/* Location */}
              <div className="card-portfolio flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/madupadilshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/madupa-dilshan-3226711b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/MadupaDil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-portfolio">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-portfolio"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-portfolio"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-portfolio"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="textarea-portfolio"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-hero-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
