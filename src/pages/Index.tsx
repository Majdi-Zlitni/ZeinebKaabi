import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import { ArrowRight, Mail, Instagram, Linkedin, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

// 🔑 NEW: Import the biography image
import zoubaKaabiImage from "@/assets/Zouba/ZoubaKaabi.jpg";

// --- Project Image Imports (Keeping them here for completeness) ---
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

//Al-Hit
import myImage1 from "@/assets/Al-Hit/Image1.jpg";
import myImage2 from "@/assets/Al-Hit/Image2.jpg";
import myImage3 from "@/assets/Al-Hit/Image3.jpg";
import myImage4 from "@/assets/Al-Hit/Image4.jpg";
import myImage5 from "@/assets/Al-Hit/Image5.jpg";

// Blurry Downtown (project 2)
import myImage6 from "@/assets/Blurry-Downtown/Image6.jpg";
import myImage7 from "@/assets/Blurry-Downtown/Image7.jpg";
import myImage8 from "@/assets/Blurry-Downtown/Image8.jpg";
import myImage9 from "@/assets/Blurry-Downtown/Image9.jpg";

// Dead Zone (project 3)
import myImage10 from "@/assets/Dead-Zone/Image10.jpg";
import myImage11 from "@/assets/Dead-Zone/Image11.jpg";
import myImage13 from "@/assets/Dead-Zone/Image13.jpg";
import myImage14 from "@/assets/Dead-Zone/Image14.jpg";

// Energy in Time (project 4)
import myImage15 from "@/assets/Energy-in-Time/Image15.jpg";
import myImage16 from "@/assets/Energy-in-Time/Image16.jpg";
import myImage17 from "@/assets/Energy-in-Time/Image17.jpg";
import myImage18 from "@/assets/Energy-in-Time/Image18.jpg";
import myImage19 from "@/assets/Energy-in-Time/Image19.jpg";

// Between Two Silences (project 5)
import myImage20 from "@/assets/Entre-Deux-Silences/myImage20.jpg";
import myImage22 from "@/assets/Entre-Deux-Silences/myImage22.jpg";
import myImage23 from "@/assets/Entre-Deux-Silences/myImage23.jpg";
import myImage24 from "@/assets/Entre-Deux-Silences/myImage24.jpg";

// Fondok el Ghala (project 6) - Placeholder images
import myImage25 from "@/assets/Fondok-el-Ghala/myImage25.jpg";
import myImage26 from "@/assets/Fondok-el-Ghala/myImage26.jpg";

// Gabes Documented (project 7) - Placeholder images
import myImage27 from "@/assets/Gabes-Documented/myImage27.jpg";
import myImage28 from "@/assets/Gabes-Documented/myImage28.jpg";
import myImage29 from "@/assets/Gabes-Documented/myImage29.jpg";
import myImage30 from "@/assets/Gabes-Documented/myImage30.jpg";

// Kitab Lab Projects (project 8) - Placeholder images
import myImage31 from "@/assets/Kitab-Lab-Projects/myImage31.jpg";
import myImage32 from "@/assets/Kitab-Lab-Projects/myImage32.jpg";
import myImage33 from "@/assets/Kitab-Lab-Projects/myImage33.jpg";
import myImage34 from "@/assets/Kitab-Lab-Projects/myImage34.jpg";
import myImage35 from "@/assets/Kitab-Lab-Projects/myImage35.jpg";
import myImage36 from "@/assets/Kitab-Lab-Projects/myImage36.jpg";

// Long Lost History (project 9) - Placeholder images
import myImage37 from "@/assets/Long-Lost-History/myImage37.jpg";
import myImage38 from "@/assets/Long-Lost-History/myImage38.jpg";
import myImage39 from "@/assets/Long-Lost-History/myImage39.jpg";
import myImage40 from "@/assets/Long-Lost-History/myImage40.jpg";
import myImage41 from "@/assets/Long-Lost-History/myImage41.jpg";

// Memories Retrouvees (project 10) - Corrected image imports
import myImage42 from "@/assets/Memories-Retrouvees/myImage42.jpg";
import myImage43 from "@/assets/Memories-Retrouvees/myImage43.jpg";
import myImage44 from "@/assets/Memories-Retrouvees/myImage44.jpg";
import myImage45 from "@/assets/Memories-Retrouvees/myImage45.jpg";
import myImage47 from "@/assets/Memories-Retrouvees/myImage47.jpg";
import myImage48 from "@/assets/Memories-Retrouvees/myImage48.jpg";
import myImage50 from "@/assets/Memories-Retrouvees/myImage50.jpg";
import myImage51 from "@/assets/Memories-Retrouvees/myImage51.jpg";
import myImage52 from "@/assets/Memories-Retrouvees/myImage52.jpg";
import myImage53 from "@/assets/Memories-Retrouvees/myImage53.jpg";
import myImage54 from "@/assets/Memories-Retrouvees/myImage54.jpg";

// Noon (project 11) - Corrected image imports
import myImage55 from "@/assets/Noon/myImage55.jpg";
import myImage56 from "@/assets/Noon/myImage56.jpg";
import myImage57 from "@/assets/Noon/myImage57.jpg";

// Water.dat (project 12) - Placeholder images
import myImage60 from "@/assets/Water-dat/myImage60.jpg";
import myImage61 from "@/assets/Water-dat/myImage61.jpg";
import myImage62 from "@/assets/Water-dat/myImage62.jpg";
import myImage63 from "@/assets/Water-dat/myImage63.jpg";
import myImage64 from "@/assets/Water-dat/myImage64.jpg";
import myImage65 from "@/assets/Water-dat/myImage65.jpg";
import myImage66 from "@/assets/Water-dat/myImage66.jpg";
import myImage67 from "@/assets/Water-dat/myImage67.jpg";
import myImage68 from "@/assets/Water-dat/myImage68.jpg";
import myImage69 from "@/assets/Water-dat/myImage69.jpg";
import myImage70 from "@/assets/Water-dat/myImage70.jpg";
import myImage71 from "@/assets/Water-dat/myImage71.jpg";

const INITIAL_DISPLAY_COUNT = 6;
const PROJECTS_TO_LOAD = 6; // Load 6 projects at a time

const Index = () => {
  // State to manage the number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_DISPLAY_COUNT);

  const projects = [
    {
      id: 1,
      images: [myImage1, myImage2, myImage3, myImage4, myImage5],
      title: "Al Hit and Other Types of Relationships",
      category: "Site-specific light installation",
      description:
        "A bold exploration of color and form through abstract expressionism.",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "48 x 36 inches",
    },
    {
      id: 2,
      images: [myImage6, myImage7, myImage8, myImage9],
      title: "Blurry Downtown",
      category: "Photography",
      description:
        "Clean lines and geometric shapes define this minimalist sculpture series.",
      year: "2023",
      medium: "Bronze",
      dimensions: "24 x 12 x 8 inches",
    },
    {
      id: 3,
      images: [myImage10, myImage11, myImage13, myImage14],
      title: "Dead Zone",
      category: "Experimental Video Projection",
      description:
        "An immersive digital artwork exploring virtual landscapes and surreal imagery.",
      year: "2024",
      medium: "Digital Mixed Media",
      dimensions: "Variable (Digital)",
    },
    {
      id: 4,
      images: [myImage15, myImage16, myImage17, myImage18, myImage19],
      title: "Energy in Time",
      category: "Video Installation",
      description:
        "Combining traditional and modern techniques in a contemporary composition.",
      year: "2023",
      medium: "Mixed Media on Wood",
      dimensions: "36 x 36 inches",
    },
    {
      id: 5,
      images: [myImage20, myImage22, myImage23, myImage24],
      title: "Between Two Silences",
      category: "Installation & Mixed Media",
      description:
        "An interactive installation piece playing with natural and artificial light.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 6,
      images: [myImage25],
      title: "Fondok el Ghala",
      category: "Digital Illustration",
      description:
        "An interactive installation piece playing with natural and artificial light.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 7,
      images: [myImage27, myImage28, myImage29, myImage30],
      title: "Gabes Documented",
      category: "Experimental Video Projection",
      description:
        "An interactive installation piece playing with natural and artificial light.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 8,
      images: [
        myImage31,
        myImage32,
        myImage33,
        myImage34,
        myImage35,
        myImage36,
      ],
      title: "Kitab Lab Projects",
      category: "Interactive Light Installations",
      description:
        "An interactive installation piece playing with natural and artificial light.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 9,
      images: [myImage37, myImage38, myImage39, myImage40, myImage41],
      title: "Long Lost History",
      category: "Light Art Installation",
      description:
        "An interactive installation piece playing with natural and artificial light.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 10,
      images: [
        myImage42,
        myImage43,
        myImage44,
        myImage45,
        myImage47,
        myImage48,
        myImage50,
        myImage51,
        myImage52,
        myImage53,
        myImage54,
      ],
      title: "MÉMOIRES OUBLIÉES... MÉMOIRES RETROUVÉES",
      category: "Light Art Installation",
      description: "Group Public exhibition.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 11,
      images: [myImage57, myImage56, myImage55],
      title: "Noon",
      category: "Experimental Video accompanying a Live Performance",
      description: "Group Public exhibition.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
    {
      id: 12,
      images: [
        myImage61,
        myImage62,
        myImage63,
        myImage64,
        myImage65,
        myImage66,
        myImage67,
        myImage68,
        myImage69,
        myImage70,
        myImage71,
      ],
      title: "Water.dat",
      category: "Generative Visual Data Projection",
      description: "Group Public exhibition.",
      year: "2024",
      medium: "Installation Art",
      dimensions: "Site-specific",
    },
  ];

  // Array of projects currently visible
  const projectsToShow = projects.slice(0, visibleProjects);

  // Boolean to check if there are more projects to load
  const hasMoreProjects = visibleProjects < projects.length;

  // Function to handle loading more projects
  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + PROJECTS_TO_LOAD);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-up">
            Zeineb <span className="text-primary">Kaabi</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Visual artist based in Tunisia.
          </p>

          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              A curated collection of my recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                images={project.images}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>

          {hasMoreProjects && (
            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={handleLoadMore}
              >
                Load More Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section - MODIFIED */}
      <section id="about" className="py-24 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Biography Text */}
          <div className="md:order-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">BIOGRAPHY</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Zeineb Kaabi is a visual artist based in Tunisia. She is in fact
              self-taught with an education in social and cultural anthropology
              as well as graphic design. In her artistic practice, Zeineb draws
              on a combination of research and visual experimentation across a
              spectrum of different media, including light art, experimental
              video art, experimental photography and data visualization.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In her compositions, Zeineb uses elements of both analog
              materials, such as print, overhead projectors , analog films,
              glass , along with digital techniques. Zeineb's artistic practice
              takes a research-based approach through data visualization and the
              use of sound as an alternative medium. Often, her data
              visualization projects transform complex information sets into
              visually engaging narratives, thus opening the way for viewers to
              grasp complex information through artistic display.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition, she experiments with sound, which she uses to add an
              auditory dimension to her installations, improving the immersive
              experience. In her paintings and photographs , Zeineb explores
              surrealism, using layering techniques to create depth and
              complexity, merging traditional and modern methods to produce
              multi-faceted works of art. These layers often interweave
              different themes and narratives. Through her art, Zeineb reflects
              on her social and cultural identity, addressing issues of
              resistance and resilience.
            </p>
          </div>

          {/* Right Column: Biography Image */}
          <div className="md:order-2 flex justify-center items-center">
            <img
              src={zoubaKaabiImage}
              alt="Zeineb Kaabi Biography"
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-md md:max-w-none"
              style={{ maxHeight: "600px" }} // Optional: Limit height on larger screens
            />
          </div>
        </div>
      </section>

      {/* Contact Section (Unchanged) */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating or learning more about my work ? Let’s
            connect.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:Zeinebkaabi12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </a>

            <a
              href="https://www.instagram.com/zeineb_kaabi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Visual Artist Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
