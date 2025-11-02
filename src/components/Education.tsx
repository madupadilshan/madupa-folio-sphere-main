import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Education</h2>

        <div className="card-portfolio max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                Bachelor of Information and Communication Technology
              </h3>
              
              <p className="text-lg text-primary font-medium">
                University of Sri Jayewardenepura, Sri Lanka
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>2023 - Present | Expected Graduation: 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
