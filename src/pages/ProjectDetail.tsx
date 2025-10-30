import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowLeft, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// START: IMAGE IMPORTS - CHANGE PICTURE PATHS HERE
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import myImage1 from "@/assets/Al-Hit/Image1.jpg";
import myImage2 from "@/assets/Al-Hit/Image2.jpg";
import myImage3 from "@/assets/Al-Hit/Image3.jpg";
import myImage4 from "@/assets/Al-Hit/Image4.jpg";
import myImage5 from "@/assets/Al-Hit/Image5.jpg";
import myImage5a from "@/assets/Al-Hit/myImage5a.jpg";
import Image6a from "@/assets/Al-Hit/Image6a.jpg";
import Image7a from "@/assets/Al-Hit/Image7a.jpg";
import Image8a from "@/assets/Al-Hit/Image8a.jpg";

import myImage6 from "@/assets/Blurry-Downtown/Image6.jpg";
import myImage7 from "@/assets/Blurry-Downtown/Image7.jpg";
import myImage8 from "@/assets/Blurry-Downtown/Image7.jpg";
import myImage9 from "@/assets/Blurry-Downtown/Image9.jpg";
import myImage10 from "@/assets/Dead-Zone/Image10.jpg";
import myImage11 from "@/assets/Dead-Zone/Image11.jpg";
import myImage13 from "@/assets/Dead-Zone/Image13.jpg";
import myImage14 from "@/assets/Dead-Zone/Image14.jpg";
import myImage15 from "@/assets/Energy-in-Time/Image15.jpg";
import myImage16 from "@/assets/Energy-in-Time/Image16.jpg";
import myImage17 from "@/assets/Energy-in-Time/Image17.jpg";
import myImage18 from "@/assets/Energy-in-Time/Image18.jpg";
import myImage19 from "@/assets/Energy-in-Time/Image19.jpg";
import myImage20 from "@/assets/Entre-Deux-Silences/myImage20.jpg";
import myImage22 from "@/assets/Entre-Deux-Silences/myImage22.jpg";
import myImage23 from "@/assets/Entre-Deux-Silences/myImage23.jpg";
import myImage24 from "@/assets/Entre-Deux-Silences/myImage24.jpg";
import myImage25 from "@/assets/Fondok-el-Ghala/myImage25.jpg";
import myImage26 from "@/assets/Fondok-el-Ghala/myImage26.jpg";
import myImage27 from "@/assets/Gabes-Documented/myImage27.jpg";
import myImage28 from "@/assets/Gabes-Documented/myImage28.jpg";
import myImage29 from "@/assets/Gabes-Documented/myImage29.jpg";
import myImage30 from "@/assets/Gabes-Documented/myImage30.jpg";
import myImage31 from "@/assets/Kitab-Lab-Projects/myImage31.jpg";
import myImage32 from "@/assets/Kitab-Lab-Projects/myImage32.jpg";
import myImage33 from "@/assets/Kitab-Lab-Projects/myImage33.jpg";
import myImage34 from "@/assets/Kitab-Lab-Projects/myImage34.jpg";
import myImage35 from "@/assets/Kitab-Lab-Projects/myImage35.jpg";
import myImage36 from "@/assets/Kitab-Lab-Projects/myImage36.jpg";
import myImage37 from "@/assets/Long-Lost-History/myImage37.jpg";
import myImage38 from "@/assets/Long-Lost-History/myImage38.jpg";
import myImage39 from "@/assets/Long-Lost-History/myImage39.jpg";
import myImage40 from "@/assets/Long-Lost-History/myImage40.jpg";
import myImage41 from "@/assets/Long-Lost-History/myImage41.jpg";
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
import myImage55 from "@/assets/Noon/myImage55.jpg";
import myImage56 from "@/assets/Noon/myImage56.jpg";
import myImage57 from "@/assets/Noon/myImage57.jpg";
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
// END: IMAGE IMPORTS


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      categoryGroup: "Exhibitions", 
      images: [myImage1, myImage2, myImage3, myImage4, myImage5],
      title: "Al Hit and Other Types of Relationships",
      category: "Site-specific Light Installation",
      description: "Group Public exhibition.",
      year: "March 19–20, 2021",
      medium: "Mixed media",
      dimensions: "Site-specific",
      details:
        "In the depths of an underground space in the Medina of Tunis, Al Hit and Other Types of Relationships unfolds as a site-specific light installation composed of three interconnected scenes — Laughing Family, Rotating Mirrors, and Bubbles.",
      exhibition: "INTERFERENCE Light Art Festival — Young Master Program",
      curatedBy: "Aymen Gharbi & Bettina Pelz",
      conclusion:
        "Together, these three scenes explore the fragility and transformation of relational bonds — how they refract, fragment, and reappear like light itself — inviting visitors into a play of distance and intimacy, surface and depth.",
      location: "Medina of Tunis, Tunisia",
      scenes: [
        {
          title: "Part 1 — Laughing Family",
          summary:
            "Hand-drawn imagery is projected through an overhead projector onto layers of twisted metal wires. The wires create a delicate superposition of shadows and contours, merging with the drawing on the acetate sheet to form a suspended family portrait that oscillates between materiality and illusion.",
          sceneImages: [myImage1], // Easily assign images here
        },
        {
          title: "Part 2 — Rotating Mirrors",
          summary:
            "A composition of burned acetate and transparent materials is projected onto the wall while two continuously rotating mirrors scatter and animate the image across the space, immersing viewers in a shifting field of reflections.",
          sceneImages: [myImage5a,myImage4,myImage2, myImage5], // Easily assign images here
        },
        {
          title: "Part 3 — Bubbles",
          summary:
            "An acetate drawing overlapped with bubble wrap becomes the source of a fragile projection, accompanied by a sound collage of quotations recorded in the streets of Tunisia. By adjusting the focus of the overhead projector, the projected image continuously mutates, echoing the instability of human connection and memory.",
          sceneImages: [myImage3,Image8a,Image6a,Image7a], // Easily assign images here
        },
      ],
      links: [],
    },
    {
      id: 2,
      categoryGroup: "Exhibitions", 
      images: [myImage6, myImage7, myImage8, myImage9],
      title: "Blurry Downtown",
      category: "Photography",
      description: "Group Public exhibition.",
      year: "2023",
      medium: "Digital Photography",
      dimensions: "Variable (Digital)",
      details:
        "Developed as part of the Jaou Photography Festival in Tunis, Blurry Downtown captures the pulse of the city center — a familiar landscape that remains perpetually new. “I continue to walk these streets — Habib Bourguiba, the Medina, Place Barcelona — breathing the same air, crossing the same crowds. Faces blur into one another; strangers become echoes of my own memory. I have been walking since childhood, and yet each step feels like the first.”",
      exhibition: "Jaou Photography Festival, Tunis, 2023",
      curatedBy: "Simon Njami",
      location: "Downtown Tunis, Tunisia",
      conclusion: `Photographed during a rainy, uncertain day, the series reflects the tension between chaos and beauty in downtown Tunis. With the city’s infrastructure overwhelmed by runoff water and congestion, movement becomes both a necessity and an impossibility. Using only a smartphone, Zeineb Kaabi transforms the limitations of the device into an aesthetic language. The resulting images — grainy, ghostly, and drenched in motion — portray a city suspended between the real and the imagined, where the everyday becomes a blurred dreamscape of light, rain, and passage.
— Zeineb Kaabi, Tunis, August 2022`,
      links: [],
    },
    {
      id: 3,
      categoryGroup: "Exhibitions", 
      images: [myImage10, myImage11, myImage13, myImage14],
      title: "Dead Zone",
      category: "Experimental Video Projection",
      description: "Group Public Exhibition.",
      year: "Sept 6–8, 2024 ",
      medium: "Experimental Video Projection",
      dimensions: "Site-specific / Variable",
      location: "Djerba, Tunisia & Cologne, Germany",
      details:
        "Dead Zone originates from an investigation into the salinization of marine and coastal ecosystems caused by desalination plants. These facilities, while producing drinking water, discharge concentrated brine back into the sea, creating a cycle that gradually amplifies salt levels. The work visualizes this invisible process — the slow transit of a living ecosystem into a crystallized, inert landscape.",
      exhibition: "SEE Djerba Light Art Festival",
      curatedBy: "Bettina Pelz & Aymen Gharbi",
      conclusion:
        "Blending scientific observation with aesthetic speculation, the piece explores the fragile balance between necessity and collapse. It focuses on a specific Tunisian ecosystem, resisting generalized narratives of climate change to foreground the localized and tangible consequences of environmental degradation. By projecting a speculative future derived from current data, Dead Zone situates itself within the emerging field of climate fiction (cli-fi) in visual art — where imagination becomes a method of environmental witnessing, and vision a space for both warning and renewal.",
      links: [],
    },
    {
      id: 4,
      categoryGroup: "Exhibitions", 
      images: [myImage15, myImage16, myImage17, myImage18, myImage19],
      title: "Energy in Time",
      category: "Video Installation",
      description: "Group Public Exhibition.",
      year: "March 20–29, 2025",
      medium: "Video Installation",
      dimensions: "Site-specific / Variable",
      location: "Musikschule, Lüdenscheid, Germany",
      exhibition: "Lichtrouten Light Art Festival",
      curatedBy: "Bettina Pelz",
      details:
        "Energy in Time contemplates humanity’s complex relationship with energy through a kaleidoscope of archival footage and historical advertisements. Like Prometheus stealing fire from the gods, humankind’s relentless drive to harness power has defined civilization — but at a profound environmental and spiritual cost.",
      conclusion:
        "Through an essai of montage, the work traces the evolution of industrial society, from the optimism of mechanization to the disillusionment of overconsumption. Vintage promotional films that once glorified progress resurface as haunting reminders of the ecological devastation that followed. The installation visualizes Heidegger’s warning: the industrial machine has turned nature from a source of wonder into a 'standing reserve' — a resource to be endlessly extracted. Composed through generative image-making processes, Energy in Time transforms data and archives into a visual meditation on the fragile choreography between progress and decay. It examines how the rhythms of light, energy, and history converge in a cycle of creation, exploitation, and exhaustion — questioning the sustainability of the world humanity continues to build.",
      links: [
        {
          label: "Interview with Artist",
          url: "https://lichtrouten.de/kaabi-interview/",
        },
        {
          label: "Festival Website",
          url: "http://lichtrouten.de/zeineb-kaabi/",
        },
      ],
    },
    {
      id: 6,
      categoryGroup: "Exhibitions", 
      images: [myImage25],
      title: "Fondok el Ghala",
      category: "Digital Illustration",
      description: "Group public exhibition.",
      year: "March 2023",
      medium: "Prints",
      dimensions: "Variable (Print)",
      location: "Institut Français de Tunis | Downtown Tunis",
      exhibition: "Imprim’Ness — Festival of Printing and Illustration Arts",
      curatedBy: "ArtforNess Magazine",
      details:
        "Presented as part of Imprim’Ness, the first festival of printing and illustration arts in Tunisia, Fondok el Ghala explores the intersection of language, food culture, and imagination. The festival highlights creative practices from the MENA region while fostering dialogue with European illustration scenes. Under the theme “Ala Tawla” (On the Table), the series reinterprets Tunisian gastronomy through a visual and linguistic lens. Drawing inspiration from the etymology and absurd poetry of traditional dish names, the work imagines how these recipes would appear if illustrated literally — as surreal objects, mythological forms, or improbable situations.",
      conclusion:
        "Through humor, wordplay, and visual exaggeration, Fondok el Ghala becomes a playful investigation into how collective memory, storytelling, and culinary heritage intertwine in Tunisian culture.",
      links: [
        {
          label: "Online Exhibition – ArtforNess",
          url: "https://www.artforness.com/achat-oeuvre-d-art/print/fondak-el-ghala/",
        },
      ],
    },
    {
      id: 5,
      categoryGroup: "Collaboratif projects", 
      images: [myImage20, myImage22, myImage23, myImage24],
      title: "Between Two Silences",
      category: "Installation & Mixed Media",
      description: "Collaborative exhibition.",
      year: "2024",
      medium: "Photography, object composition, sound installation",
      dimensions: "Site-specific",
      location: " ",
      exhibition: " ",
      curatedBy: "Nermine Chine",
      artisticDirection: "Zeineb Kaabi",
      details:
        "Five phases. Five states. Five worlds. From five to thirty-five years old, this immersive exhibition traces the fragmented contours of a life shaped by what remains unsaid. These are not characters, nor heroic figures — but fragments of one and the same person, divided by age, by shame, by silence transmitted from one generation to the next. Between Two Silences explores the insidious mechanics of generational silence, particularly in the context of sexual abuse within family and social structures. It is a fictional story — but is it truly fiction? What we believe to be invented is often what we have refused to hear.",
      conclusion:
        "Each figure — sculpted from raw clay, deliberately imperfect and vulnerable — embodies a specific stage: 5, 12, 18, 25, and 35 years old. Around them unfolds an intimate universe composed of sensitive collages — objects, photographs, textures, and sounds — reassembling fragments of memory, sensation, and oppressive silence. A voice without a mouth. A presence without identity. Through this installation, the artists do not seek to illustrate trauma but to give it space, breath, and attention. The figures portrayed do not ask to be saved — they ask to be heard. As the visitor moves through the spaces, they are invited to slow down, to sense, to listen. The experience is as physical as it is psychological. This is not an exhibition to be observed; it is a silence to inhabit, an inheritance to confront. The curatorial work of Nermine Chine, in dialogue with the artistic direction of Zeineb Kaabi, brings the evocative power of intimacy into tension with the collective mechanisms of denial. Combining testimony collection, fiction, and material composition, the project unearths a buried memory — that of fractured bodies, stifled voices, and unspoken truths. How can silence be both a refuge and a prison? This exhibition is, perhaps, an attempt to begin answering that question.",
      links: [],
    },
    {
      id: 7,
      categoryGroup: "Exhibitions", 
      images: [myImage27, myImage28, myImage29, myImage30],
      title: "Gabes Documented",
      category: "Experimental Video Projection",
      description: "Group Public exhibition.",
      year: "2023–2024",
      medium: "Experimental Video Projection",
      dimensions: "Site-specific / Variable",
      location: "Gabes, Tunisia",
      exhibition: "Water Matter Program Exhibition ",
      curatedBy: "Aymen Gharbi & Danseurs Citoyens Sud",
      details:
        "Gabes Documented emerged from the Art for Climate Justice bootcamp organized by Danseurs Citoyens Sud. The work reflects on the long-standing ecological crisis in Gabes — a coastal and industrial region of southern Tunisia where the coexistence between industry and environment has become increasingly unsustainable. The video installation combines archival data, journalistic sources, and local testimonies to portray the scale and persistence of pollution in the region. Layers of text, sound, and motion form a visual investigation — a montage of newspaper excerpts, research findings, and voices from residents confronting environmental degradation.",
      conclusion:
        "Despite decades of studies and more than 197,000 references documenting the crisis, little concrete action has been taken to preserve Gabes’ ecosystem. The work transforms this accumulation of neglected evidence into a visual echo — a poetic yet critical portrait of environmental paralysis, revealing how data, bureaucracy, and silence coexist in the face of urgency.",
      links: [],
    },
    {
      id: 8,
      categoryGroup: "Exhibitions", 
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
      description: "Group Public exhibition.",
      year: "October 30 – November 13, 2021",
      medium: "Mixed media",
      dimensions: "Site-specific",
      location: "Institut Français de Tunis, Tunisia",
      exhibition: "Kitab Lab Project",
      curatedBy: "Aymen Gharbi",
      details:
        "This entry covers two interactive light installations—Metamorphosis of the Archives and Soupe des Mots—created for the Kitab Lab Project. Curated by Aymen Gharbi and presented in the Médiathèque of the Institut Français de Tunis, the exhibition invited artists to reinterprete the theme of the book and archives through diverse contemporary visual practices.",
      conclusion:
        "Together, these two projects transform the reading and archiving processes into sensory, fluid, and participatory experiences. They explore the instability of knowledge and memory—how text and archives are constantly being reconfigured by light, movement, and collective participation—revealing the poetic potential of dissolution and transformation.",
      scenes: [
        {
          title: "Project 1: Metamorphosis of the Archives",
          summary:
            "This interactive light installation transforms the act of reading into an ephemeral experience. Visitors select a book cover, print it on acetate, and place it on an overhead projector. The ink reacts to the projector’s heat and light, gradually mutating into new visual forms, revealing the living and unstable nature of archives.",
        },
        {
          title: "Project 2: Soupe des Mots (Soup of Words)",
          summary:
            "In this interactive light installation, language becomes tactile and fluid. Visitors immerse acetate sheets printed with isolated words into a bowl of ink and water. As the words dissolve, overlap, and drift, they form accidental phrases and visual constellations—a living 'soup' of language that reflects on the fragility of meaning and the erosion of text.",
        },
      ],
      links: [],
    },
    {
      id: 9,
      categoryGroup: "Residencies", 
      images: [myImage37, myImage38, myImage39, myImage40, myImage41],
      title: "Long Lost History",
      category: "Light Art Installation",
      description: "Group Public Exhibition.",
      year: "2024",
      medium: "Light | Prints | Ink",
      dimensions: "Site-specific",
      location: "Amman, Jordan",
      exhibition: "Residency presentation — Abbara Project",
      curatedBy: "Aymen Gharbi",
      details:
        "Developed during an art residency in Jordan within the framework of The Cultural Resource’s Abbara Project, in partnership with Interference Light Art Project and Medearts, Long Lost History explores the fragile relationship between memory, image, and disappearance.",
      conclusion:
        "The installation uses archival photographs from Jordan printed on transparent acetate sheets, where ink interacts with light and time to gradually alter the images. Through this process of transformation and erosion, the work becomes a poetic reflection on the loss of collective memory — a metaphor for histories that fade, distort, or dissolve under the weight of forgetting.",
      links: [],
    },
    {
      id: 10,
      categoryGroup: "Exhibitions", 
      images: [
        myImage42, myImage43, myImage44, myImage45, myImage47, myImage48, 
        myImage50, myImage51, myImage52, myImage53, myImage54,
      ],
      title: "MÉMOIRES OUBLIÉES... MÉMOIRES RETROUVÉES",
      category: "Light Art Installation",
      description: "Group Public exhibition.",
      year: "2022 | 2024 ",
      medium: "Light | Glass | Sound",
      dimensions: "Site-specific / Variable",
      location: "Kef, Tunisia | Leeuwarden, Netherlands",
      exhibition: "Kif El Festival | LUNA Young Masters Exhibition",
      curatedBy: "Aymen Gharbi, Bettina Pelz  & Jan Herman de Boer",
      details:
        "Mémoires Oubliées... Mémoires Retrouvées is a light installation that examines the tension between disappearance and remembrance through the transformation of local materials, sound, and ritual gestures. The work was first conceived as a site-specific installation in a botanical park in Kef, projected on the wall of Lella Laaej, a sacred site. It was later presented in 2024 within LUNA Young Masters in the Netherlands, evolving into a dialogue between geographies.",
      conclusion:
        "The experimental artistic process composed of various elements, which included two overhead projectors, background music, and a Kanoun (the traditional smell of bkhour). The piece utilizes ritual gestures and media art to create a multisensory experience, evoking the cyclical nature of loss and rediscovery.",
      scenes: [
        {
          title: "Part 1 — Context and Setup (Kef, 2022)",
          summary:
            "A site-specific installation project developed in the Kef governorate, Tunisia, in partnership with the Interference Young Masters Program and Museum lab. The work was displayed in several monuments and sites in Kef as part of the Kif El festival. The primary location was a botanical park, with the work projected on the wall of Lella Laaej (a local sacred site).",
        },
        {
          title: "Part 2 — First Overhead Projector (Left Side)",
          summary:
            "Having researched the area, broken glasses, broken beer bottles, and plants were gathered. These materials were crafted into a collage onto the surface of the first overhead projector (left side of the building's surface), creating a luminous texture of fragments and reflections.",
        },
        {
          title: "Part 3 — Second Overhead Projector (Right Side) & Multisensory Experience",
          summary:
            "In reference to the ritual and cultural practice in Lella Laaej, a composition of Couscous and Ghorbel (a filter material for Couscous seeds) with a reflecting paper in the middle was developed through experimentation. The sound and the olfactory experience completed the piece: the music consisted of shattered fragments combined with music and noise, and a traditional bkhour odor was displayed in the center of the garden.",
        },
      ],
      links: [],
    },
    {
      id: 11,
      categoryGroup: "Collaboratif projects", 
      images: [myImage55, myImage56, myImage57],
      title: "Noon",
      category: "Experimental Video accompanying a Live Performance",
      description: "Collaborative project - performance.",
      year: "November 25, 2023",
      medium: "Media Art",
      dimensions: "Variable (Live Performance + Projection)",
      location: "The Art On Site Studio, New York City",
      exhibition: "WADE into ACTIVISM Festival",
      curatedBy: "Danseurs Citoyens Sud",
      details:
        "Noon is a collaborative performance and video project developed within the framework of 'Misahat Noon,' an artistic initiative by Danseurs Citoyens Sud (DCS) dedicated to raising awareness about violence against women. The piece was presented at the WADE into ACTIVISM Festival in New York — a 16-day event using performing arts to call for action against gender-based violence and discrimination. Directed and performed by Ahmed Guerfel, Executive Director of DCS, Noon merges dance, sound, and experimental visuals to portray the complex realities faced by Tunisian women. The work moves beyond representation, acting as both testimony and critique — questioning the gaps between policy and lived experience, between legal frameworks and social justice.",
      conclusion:
        "The visual component, created collaboratively as a media art projection, expands the choreography into an immersive narrative space. Through abstraction, rhythm, and light, the piece exposes cycles of silence, resilience, and renewal. Following the performance, public discussions invited audiences to share reflections and imagine collective strategies for change, reinforcing the project’s mission to transform awareness into action.",
      links: [
        {
          label: "WADE – Noon Performance Link",
          url: "https://o-dcs.org/noon-performance-by-ahmed-guerfel/",
        },
      ],
    },
    {
      id: 12,
      categoryGroup: "Exhibitions", 
      images: [
        myImage60, myImage61, myImage62, myImage63, myImage64, myImage65,
        myImage66, myImage67, myImage68, myImage69, myImage70, myImage71,
      ],
      title: "Water.dat",
      category: "Generative Visual Data Projection",
      description: "Group Public exhibition.",
      year: "2023–2024", 
      medium: "Media Art",
      dimensions: "Site-specific / Variable",
      location: "Multiple Locations (Tunis, Djerba, Gelsenkirchen)",
      exhibition: "Goldstücke Light Festival | Flow | Water Matter Program ",
      curatedBy: "Aymen Gharbi & Bettina Pelz",
      details:
        "Water.dat is a generative media installation that transforms scientific measurements of water quality into moving visual landscapes. The project uses real data on the pH levels of drinking water as both material and metaphor, exploring how environmental information can become a form of visual poetry. The work draws from scientific documentation of pH fluctuations — an indicator of chemical and ecological balance in water systems. These data points, combined with found water footage, are algorithmically converted into dynamic visual compositions projected in situ.",
      conclusion:
        "By translating raw data into immersive motion, Water.dat invites viewers to sense the fragile equilibrium of water — a substance at once vital, vulnerable, and deeply human.",
      scenes: [
        {
          title: "Part 1: Water Matter Program Exhibition",
          summary:
            "31 AUG – 2 SEPT 2023. The first iteration of Water.dat was presented as part of the Interference Light Art Festival's Water Matter Program in the Medina of Tunis. The installation unfolded against the historic walls of the Palais Kheireddine, where the generative visuals, driven by pH data, merged with the ancient architecture.",
        },
        {
          title: "Part 2: Flow Festival",
          summary:
            "8 — 9 SEP 2023 | Houmt Souk (tn). The piece was subsequently adapted for the Flow Festival in Djerba. This site-specific installation focused on merging the data-driven visuals with the island’s maritime horizon and unique coastal environment, reflecting the local water narrative.",
        },
      ],
      links: [
        {
          label: "Project Page – Goldstücke Festival (2024)",
          url: "https://2024.goldstuecke.net/de/zeineb-kaabi/",
        },
        {
          label: "Project Page – InTunis Festival (2023)",
          url: "https://2023.intunis.net/zeineb-kaabi/",
        },
      ],
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  const CATEGORY_ORDER = ["Collaboratif projects", "Exhibitions", "Residencies"];

  const groupedProjects = projects.reduce((acc, p) => {
    const group = p.categoryGroup;
    if (group) {
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(p);
    }
    return acc;
  }, {} as Record<string, typeof projects>);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };


  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
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

  const hasScenes = project.scenes && project.scenes.length > 0;
  const contentPaddingRight = "pr-4 sm:pr-8 lg:pr-72"; 

  // Logic to determine which images to show in the Project Gallery
  let galleryImages = project.images; 

  if (hasScenes && project.scenes) {
    const allSceneImages = project.scenes.reduce((acc, scene) => {
        // Explicitly check for 'sceneImages' property on the scene object
        const sceneImages = (scene as { sceneImages?: string[] }).sceneImages || [];
        acc.push(...sceneImages);
        return acc;
    }, [] as string[]);
    
    // Remove duplicates using a Set to get all unique images from all parts
    galleryImages = Array.from(new Set(allSceneImages));
  }


  const galleryClasses = [
    "col-span-1 aspect-square",
    "col-span-2 row-span-1 aspect-[2/1]",
    "col-span-1 row-span-2 aspect-[1/2]",
    "col-span-1 aspect-[4/3]",
    "col-span-1 aspect-[3/4]",
    "col-span-2 row-span-2 aspect-square",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar /> 

      <div className={`pt-24 pb-16 px-4 ${contentPaddingRight}`}>
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group text-lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>

          <header className="mb-12 border-b border-border pb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">{project.title}</h1>
            <p className="text-xl text-primary font-medium">{project.category}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            <div className="lg:col-span-1">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl bg-muted">
                        <img
                          src={src}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            <div className="lg:col-span-1 space-y-6">
              
              <div className="space-y-2 text-md">
                
                <h3 className="text-xl font-semibold mb-3 border-b border-border pb-1">Details</h3>
                
                {Object.entries({
                  Year: project.year,
                  Medium: project.medium,
                  Dimensions: project.dimensions,
                  Location: project.location,
                  Exhibition: project.exhibition,
                  CuratedBy: project.curatedBy,
                  ArtisticDirection: project.artisticDirection,
                }).map(([label, value]) =>
                  value ? (
                    <div key={label} className="flex justify-between py-1 border-b border-border/50">
                      <span className="font-medium text-muted-foreground">{label}</span>
                      <span className="text-right font-normal">{value}</span>
                    </div>
                  ) : null
                )}
                
              </div>
              
              {project.links && project.links.length > 0 && (
                <div className="pt-4 space-y-2">
                  <h3 className="text-xl font-semibold mb-3 border-b border-border pb-1">Related Links</h3>
                  {project.links.map((link, index) => (
                    <Button key={index} asChild variant="outline" className="w-full justify-start">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-10 mt-16"> 
            
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Concept & Narrative</h2>
              <p className="text-lg whitespace-pre-line leading-relaxed">{project.details}</p>
            </div>

            {hasScenes && (
              <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Installation Breakdown</h2>
                <div className="space-y-10">
                  {project.scenes.map((scene, index) => {
                    
                    const currentId = Number(id);
                    const useStackedLayout = [1, 10, 12].includes(currentId);
                    let imagesForPart: string[] = [];

                    if (currentId === 1) {
                        imagesForPart = (scene as {sceneImages?: string[]}).sceneImages || []; 
                    } else if (currentId === 12) {
                        if (index === 0) { 
                            imagesForPart = project.images.slice(0, 6);
                        } 
                        else if (index === 1) { 
                            imagesForPart = project.images.slice(6, 12);
                        }
                    } else if (currentId === 10) {
                        if (index === 0) { 
                            imagesForPart = project.images.slice(0, 3);
                        } 
                        else if (index === 1) { 
                            imagesForPart = project.images.slice(3, 7);
                        } else if (index === 2) { 
                            imagesForPart = project.images.slice(7, 11);
                        }
                    }
                    
                    return (
                      <div key={index}>
                        {useStackedLayout ? (
                          <div className="space-y-4"> 
                            <div>
                              <h3 className="text-xl font-semibold text-primary mb-1">{scene.title}</h3>
                              <p className="text-md leading-relaxed">{scene.summary}</p>
                            </div>
                            
                            {/* NEW CAROUSEL IMPLEMENTATION for Scene Images */}
                            {imagesForPart.length > 0 && // FIXED: Removed '(' to resolve syntax error
                              <Carousel 
                                // INCREASED PADDING from px-10 to px-16 for more space
                                className="w-full relative px-16"
                            >
                                <CarouselContent className="-ml-4">
                                  {imagesForPart.map((imageSrc, imgIndex) => (
                                    <CarouselItem 
                                      key={imgIndex} 
                                      // Responsive sizing: Show 1 image on small screens, 2 on medium, 3 on large
                                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                      <div 
                                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md bg-muted" 
                                      >
                                        <img
                                          src={imageSrc}
                                          alt={`${project.title} - ${scene.title} Image ${imgIndex + 1}`}
                                          className="w-full h-full object-cover cursor-pointer"
                                          onClick={() => handleImageClick(imageSrc)}
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                {/* Logic: Only show arrows if there are more than 3 pictures, and apply visible color and smaller size */}
                                {imagesForPart.length > 3 && (
                                    <>
                                        <CarouselPrevious 
                                            // Moved position from left-2 to left-4 to increase spacing
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                                        />
                                        <CarouselNext 
                                            // Moved position from right-2 to right-4 to increase spacing
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                                        />
                                    </>
                                )}
                              </Carousel>
                            } 
                            {/* END CAROUSEL */}
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-1">{scene.title}</h3>
                            <p className="text-md leading-relaxed">{scene.summary}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {project.conclusion && (
              <div>
                <p className="text-lg whitespace-pre-line leading-relaxed italic">{project.conclusion}</p>
              </div>
            )}
          </div>
          
          {/* USE galleryImages HERE, which contains either all scene images or project.images */}
          {galleryImages.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Project Gallery</h2>
              <div 
                className="grid gap-4"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gridAutoRows: 'minmax(150px, auto)',
                  gridAutoFlow: 'dense',
                }}
              >
                {galleryImages.map((src, index) => {
                  
                  const isLarge = index % 5 === 0;
                  const isWide = index % 5 === 2;
                  const spanClasses = isLarge ? "md:col-span-2 md:row-span-2 aspect-square" : 
                                      isWide ? "md:col-span-2 aspect-[2/1]" : 
                                      "col-span-1 aspect-square";

                  return (
                    <div 
                      key={index} 
                      onClick={() => handleImageClick(src)}
                      className={`relative overflow-hidden rounded-lg shadow-md bg-muted transition-transform duration-300 hover:scale-[1.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${spanClasses}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`View Image ${index + 1} of ${project.title} in full screen`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} - Gallery Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>

      <div 
        className="fixed top-16 right-0 w-64 h-full bg-card/95 backdrop-blur-sm 
                   border-l border-border shadow-2xl p-6 overflow-y-auto z-40 
                   hidden lg:block" 
      >
        <h3 className="text-xl font-bold mb-4">All Projects</h3>
        
        <div className="space-y-6">
          {CATEGORY_ORDER.map(groupName => {
            const groupProjects = groupedProjects[groupName];
            if (!groupProjects || groupProjects.length === 0) return null;

            return (
              <div key={groupName}>
                <h4 className="text-lg font-semibold text-muted-foreground mb-1 border-b border-border pb-1 pt-4">
                  {groupName}
                </h4>
                <ul className="space-y-2 mt-2">
                  {groupProjects.map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => navigate(`/project/${p.id}`)}
                        className={`w-full text-left transition-colors duration-150 ${
                          Number(id) === p.id
                            ? "font-bold text-primary border-r-2 border-primary"
                            : "font-normal text-foreground hover:text-primary/80"
                        } pr-2`}
                      >
                        {p.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-[101] p-2"
            aria-label="Close full-screen image viewer"
          >
            <X className="h-8 w-8" />
          </button>

          <div 
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage} 
              alt="Full-screen project image"
              className="object-contain max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;