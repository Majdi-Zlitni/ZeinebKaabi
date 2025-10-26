import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  images: string[];
  title: string;
  category: string;
}

const ProjectCard = ({ id, images, title, category }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`}>
      <Card className="group relative overflow-hidden border-border bg-card transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img 
          src={images[0]} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm text-primary font-medium mb-2">{category}</p>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </div>
      </div>
    </Card>
    </Link>
  );
};

export default ProjectCard;
