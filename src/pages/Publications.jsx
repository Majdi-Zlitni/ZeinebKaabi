import Navbar from "@/components/Navbar";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react'; // Import React to use Fragment

// --- Publication Data (Use the same data structure) ---
const publicationsData = [
  {
    id: 1,
    title: "Zeineb Kaabi: Energy in Time",
    source: "Lichtrouten Festival, Lüdenscheid",
    date: "March 2025",
    snippet: "An insightful interview and project presentation for the Lichtrouten Light Art Festival, discussing the installation 'Energy in Time' and the role of archival footage in contemporary media art.",
    link: "http://lichtrouten.de/zeineb-kaabi/",
  },
  {
    id: 2,
    title: "Water.dat: When Data Becomes Art",
    source: "InTunis Light Festival Review",
    date: "December 2023",
    snippet: "A critical review of 'Water.dat', highlighting its use of generative visuals derived from real-time water quality data to create an immersive, poetic experience.",
    link: "https://example.com/intunis-water-dat", 
  },
  {
    id: 3,
    title: "Between Two Silences: A Confrontation with Memory",
    source: "Culture.tn Magazine",
    date: "July 2024",
    snippet: "Detailed analysis of the collaborative installation 'Between Two Silences', focusing on its sensitive handling of generational silence and trauma through mixed media and sculpture.",
    link: "https://example.com/culture-silences",
  },
  {
    id: 4,
    title: "The Medina of Tunis as a Stage for Light",
    source: "INTERFERENCE Magazine",
    date: "April 2021",
    snippet: "Report on the 'Al Hit and Other Types of Relationships' installation, examining its site-specific engagement with the historical architecture of the Tunis Medina.",
    link: "https://example.com/interference-alhit",
  },
];
// --- End Data ---

const Publications = () => {
  // Function to handle external redirect
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Main Content Area: Simplified Padding */}
      <div className={`pt-24 pb-16 px-4`}>
        {/* Max width set for readability and centering */}
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-12 border-b border-border pb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">Publications</h1>
            <p className="text-xl text-muted-foreground">Articles and features about the artist's work.</p>
          </header>
          
          {/* Removed space-y-8 here, as spacing is now explicitly controlled in the map */}
          <div> 
            {publicationsData.map((pub, index) => (
              <React.Fragment key={pub.id}>
                <Card 
                  className="cursor-pointer hover:shadow-xl hover:border-primary transition-all duration-300"
                  onClick={() => handleRedirect(pub.link)}
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      {pub.title}
                      <ExternalLink className="w-5 h-5 text-primary shrink-0 ml-4 opacity-75" />
                    </CardTitle>
                    <CardDescription className="text-sm">
                      **{pub.source}** &bull; {pub.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Preview/Snippet */}
                    <p className="text-base text-foreground/80">{pub.snippet}</p>
                  </CardContent>
                </Card>
                
                {/* 🔑 Explicit Spacer/Empty Line Element */}
                {index < publicationsData.length - 1 && (
                  // This div creates a guaranteed vertical space (h-8) between cards
                  <div className="h-8 w-full"></div> 
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Publications;