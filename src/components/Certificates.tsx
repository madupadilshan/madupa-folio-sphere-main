import { Award, ExternalLink, Calendar } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

const certificates = [
  {
    date: "Oct 2025",
    title: "AWS Technical Essentials",
    provider: "AWS Training & Certification",
    description: "Fundamental technical knowledge of AWS cloud services.",
    image: getAssetPath("/certificates/aws-tech-essentials.jpg"),
    verifyUrl: "https://www.linkedin.com/in/madupa-dilshan-3226711b1/details/certifications/1759950011496/single-media-viewer/?type=DOCUMENT&profileId=ACoAADFl14oBIuQM9mB3sfNx3NhWGNBtfzLbDWE",
  },
  {
    date: "Jul 2025",
    title: "Docker for the Absolute Beginner",
    provider: "KodeKloud",
    description: "Hands-on experience with Docker containers, images, and architecture.",
    id: "7caf2302-de97-440f-b2b6-58edb98e8341",
    image: getAssetPath("/certificates/Docker Training Course for the Absolute Beginner_page-0001.jpg"),
    verifyUrl: "https://learn.kodekloud.com/certificate/7caf2302-de97-440f-b2b6-58edb98e8341",
  },
  {
    date: "Sep 2025",
    title: "Linux for beginners with Hands-on Labs",
    provider: "KodeKloud",
    description: "Fundamental Linux command-line skills with practical lab exercises.",
    id: "385961a8-1c62-4ef9-a834-1b651c88cbdb",
    image: getAssetPath("/certificates/Linux for beginners with Hands-on Labs_page-0001.jpg"),
    verifyUrl: "https://learn.kodekloud.com/certificate/385961a8-1c62-4ef9-a834-1b651c88cbdb",
  },
  {
    date: "May 2025",
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Training & Certification",
    description: "Foundational understanding of the AWS Cloud and its core services.",
    image: getAssetPath("/certificates/AWS Cloud PractitionerEssentials_page-0001.jpg"),
    verifyUrl: "https://www.linkedin.com/in/madupa-dilshan-3226711b1/details/certifications/1748155215715/single-media-viewer/?type=DOCUMENT&profileId=ACoAADFl14oBIuQM9mB3sfNx3NhWGNBtfzLbDWE",
  },
  {
    date: "May 2025",
    title: "Build Website With AI",
    provider: "Simplilearn SkillUP",
    description: "Leveraging AI tools and platforms for rapid website development.",
    image: getAssetPath("/certificates/Build Website With AI_page-0001.jpg"),
    verifyUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODcyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM4NzA2N182NjUyNTkxMTc0ODE3Mzk3NDcxOS5wbmciLCJ1c2VybmFtZSI6Ik1hZHVwYSBEaWxzaGFuIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
  },
  {
    date: "N/A",
    title: "Cloud Computing 101",
    provider: "AWS Educate",
    description: "Introduction to the basics of cloud computing technology.",
    type: "Digital Badge",
    image: getAssetPath("/certificates/aws-educate-introduction-to-cloud-101-training-badg.png"),
    verifyUrl: "https://www.credly.com/badges/023400c8-a46e-4c75-ad87-4912308d600c/public_url",
  },
  {
    date: "N/A",
    title: "AWS Cloud Essentials",
    provider: "AWS Educate",
    description: "Essential knowledge of cloud computing fundamentals.",
    type: "Digital Badge",
    image: getAssetPath("/certificates/aws-knowledge-cloud-essentials-training-badge.png"),
    verifyUrl: "https://www.credly.com/badges/413623d2-ce99-4f9e-b757-20211c26fa36/public_url",
  },
  {
    date: "Oct 2025",
    title: "Aviatrix Certified Engineer - Multicloud Network Associate",
    provider: "Aviatrix",
    description: "Industry's first multicloud networking certification covering AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure.",
    aceId: "2025-28708",
    validUntil: "Oct 17, 2028",
    image: getAssetPath("/certificates/aviatrix-ace-multicloud-network-associate.jpg"),
    verifyUrl: "https://www.credly.com/badges/b386ee6f-2b1f-4eb7-a5fb-3ddf683e5d72/public_url",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Certificates & Badges</h2>
        <p className="section-subtitle">My Professional Certifications</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="card-portfolio space-y-4 group overflow-hidden"
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="relative w-full h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  
                  {/* Badge Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between">
                {!cert.image && (
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                )}
                {cert.date && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium">{cert.provider}</p>
                
                {cert.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                )}
                
                {cert.id && (
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    ID: {cert.id}
                  </p>
                )}
                
                {cert.aceId && (
                  <p className="text-xs text-muted-foreground">
                    ACE ID: {cert.aceId}
                  </p>
                )}

                {cert.validUntil && (
                  <p className="text-xs text-green-500">
                    Valid until: {cert.validUntil}
                  </p>
                )}
                
                {cert.type && (
                  <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                    {cert.type}
                  </span>
                )}
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group-hover:gap-3"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
