import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import { ArrowRight, Mail, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const Index = () => {
  const projects = [
    { id: 1, image: project1, title: "Abstract Expressions", category: "Painting" },
    { id: 2, image: project2, title: "Minimal Forms", category: "Sculpture" },
    { id: 3, image: project3, title: "Digital Dreams", category: "Digital Art" },
    { id: 4, image: project4, title: "Mixed Media", category: "Contemporary" },
    { id: 5, image: project5, title: "Light & Shadow", category: "Installation" },
    { id: 6, image: project6, title: "Color Theory", category: "Painting" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-up">
            Visual <span className="text-primary">Artist</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Creating extraordinary experiences through art & design
          </p>
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-up" 
            style={{ animationDelay: "0.2s" }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-xl text-muted-foreground">A curated collection of my recent projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a visual artist passionate about exploring the intersection of traditional and contemporary art forms. 
            My work spans painting, sculpture, and digital media, always seeking to push creative boundaries and evoke 
            emotional responses through visual storytelling.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over a decade of experience, my pieces have been featured in galleries worldwide, 
            and I continue to experiment with new techniques and mediums to express unique artistic visions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating or purchasing artwork? Let's connect.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Visual Artist Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
