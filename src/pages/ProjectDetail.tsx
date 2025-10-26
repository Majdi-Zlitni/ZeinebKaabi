import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    { 
      id: 1, 
      image: project1, 
      title: "Abstract Expressions", 
      category: "Painting",
      description: "A bold exploration of color and form through abstract expressionism. This piece represents a journey into the subconscious, where emotions translate directly onto canvas through spontaneous brushstrokes and vibrant color choices.",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "48 x 36 inches",
      details: "This work is part of a series exploring the relationship between emotion and color. Each layer was applied intuitively, allowing the composition to evolve organically over several weeks of intensive studio work."
    },
    { 
      id: 2, 
      image: project2, 
      title: "Minimal Forms", 
      category: "Sculpture",
      description: "Clean lines and geometric shapes define this minimalist sculpture series. The work explores the essence of form by stripping away all unnecessary elements.",
      year: "2023",
      medium: "Bronze",
      dimensions: "24 x 12 x 8 inches",
      details: "Cast using the traditional lost-wax method, this sculpture went through multiple iterations before achieving the perfect balance between negative and positive space."
    },
    { 
      id: 3, 
      image: project3, 
      title: "Digital Dreams", 
      category: "Digital Art",
      description: "An immersive digital artwork exploring virtual landscapes and surreal imagery. This piece blurs the boundaries between reality and digital fantasy.",
      year: "2024",
      medium: "Digital Mixed Media",
      dimensions: "Variable (Digital)",
      details: "Created using advanced 3D rendering techniques combined with digital painting. The piece can be experienced in various formats, from prints to projection installations."
    },
    { 
      id: 4, 
      image: project4, 
      title: "Mixed Media", 
      category: "Contemporary",
      description: "Combining traditional and modern techniques in a contemporary composition. This work bridges the gap between classical art-making and modern innovation.",
      year: "2023",
      medium: "Mixed Media on Wood",
      dimensions: "36 x 36 inches",
      details: "Incorporating collage, paint, and digital prints on a wooden panel, this piece explores texture and layering as metaphors for memory and experience."
    },
    { 
      id: 5, 
      image: project5, 
      title: "Light & Shadow", 
      category: "Installation",
      description: "An interactive installation piece playing with natural and artificial light. Viewers become part of the artwork as their shadows interact with projected patterns.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
      details: "This immersive installation transforms gallery spaces through carefully choreographed lighting. The experience changes throughout the day as natural light filters in."
    },
    { 
      id: 6, 
      image: project6, 
      title: "Color Theory", 
      category: "Painting",
      description: "A vibrant study in color relationships and visual harmony. This piece demonstrates the emotional power of complementary colors working in dynamic tension.",
      year: "2023",
      medium: "Oil on Canvas",
      dimensions: "60 x 40 inches",
      details: "Inspired by Josef Albers' color studies, this painting explores how colors influence each other based on their spatial relationships and proportions."
    },
  ];

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2">{project.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Medium</span>
                  <span className="font-medium">{project.medium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimensions</span>
                  <span className="font-medium">{project.dimensions}</span>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-bold mb-4">About This Work</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
