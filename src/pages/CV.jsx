import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { cvData } from "../cvData";

// 🔑 IMAGE IMPORTS
import zeineb1 from "@/assets/Zouba/ZEINEB1.jpg";
import zeineb2 from "@/assets/Zouba/ZEINEB2.jpg";
import zeineb3 from "@/assets/Zouba/ZEINEB3.jpg";
import zeineb4 from "@/assets/Zouba/ZEINEB4.jpg";

// MODIFIED: Removed all vertical spacing (pb-X) between items
const CVItem = ({ item, isLast }) => (
  <div
    className="flex flex-col pt-2" // Only retains small padding at the top
  >
    {/* Combined Year and Description/Title in a single BOLD line */}
    <div className="mb-1">
      <p className="text-lg font-bold text-foreground">
        <span className="text-primary font-semibold mr-2">{item.year}</span> 
        &ndash; {item.description}
      </p>
    </div>

    {/* Details (location, etc.) remain below and unbolded */}
    {item.details && (
      <p className="text-sm text-muted-foreground mt-0.5">
        {item.details}
      </p>
    )}
  </div>
);

// MODIFIED: Removed 'space-y-4' to eliminate vertical gaps between CVItem elements
const CVSection = ({ section, isLast }) => (
  <div className={`py-6 ${!isLast ? "border-b border-border" : ""}`}>
    <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/50">
      {section.title}
    </h2>
    <div className=""> {/* space-y-4 removed here */}
      {section.items.map((item, itemIndex) => (
        <CVItem
          key={itemIndex}
          item={item}
          isLast={itemIndex === section.items.length - 1}
        />
      ))}
    </div>
  </div>
);

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { name, email, location, sections } = cvData;
  const cvImages = [zeineb1, zeineb2, zeineb3, zeineb4];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="mb-12 border-b border-border pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-1 text-foreground">
                  {name}
                </h1>
                <p className="text-lg md:text-xl text-primary font-medium mb-1">
                  {location}
                </p>
                <p className="text-md text-muted-foreground">{email}</p>
              </div>

              {/* Right: Images (Bigger and Square) */}
              <div className="flex gap-4">
                {cvImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 overflow-hidden rounded-md shadow-lg bg-muted border border-border/50 transition-transform hover:scale-[1.05]"
                  >
                    <img
                      src={src}
                      alt={`CV Visual ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Sections */}
          <div className="space-y-0">
            {sections.map((section, sectionIndex) => (
              <CVSection
                key={sectionIndex}
                section={section}
                isLast={sectionIndex === sections.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;