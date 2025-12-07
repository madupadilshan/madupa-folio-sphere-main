import TestimonialCarousel from "./TestimonialCarousel";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    company: "Tech Solutions Ltd",
    content: "Madupa delivered an exceptional web application for our company. His attention to detail and commitment to quality exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "Working with Madupa was a fantastic experience. He understood our requirements perfectly and delivered a modern, responsive website that our customers love.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "IT Director",
    company: "Global Systems Inc",
    content: "Professional, skilled, and reliable. Madupa's expertise in MERN stack development helped us build a robust application that scales well with our growing needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Williams",
    role: "Marketing Manager",
    company: "Creative Agency",
    content: "The portfolio website Madupa created for our agency showcases our work beautifully. His creative approach and technical skills are impressive!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">What Clients Say</h2>
        <p className="section-subtitle">
          Feedback from clients I've had the pleasure to work with
        </p>

        <TestimonialCarousel
          testimonials={testimonials}
          autoPlay={true}
          autoPlayInterval={5000}
        />
      </div>
    </section>
  );
};

export default Testimonials;
