import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Eye, Server, Download } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    color: string;
    embedded?: boolean;
    downloadLink?: boolean;
  };
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const getIcon = (project: any) => {
    if (project.downloadLink) return Download;
    if (project.title.includes("GitHub") || project.title.includes("Source")) return Github;
    if (project.title.includes("Server")) return Server;
    if (project.title.includes("Details") || project.title.includes("View")) return Eye;
    return ExternalLink;
  };

  const getLinkText = (project: any) => {
    if (project.downloadLink) return "Download Game";
    if (project.title.includes("KDE")) return "Source Code";
    if (project.title.includes("Portfolio")) return "GitHub Profile";
    if (project.title.includes("AI Home Lab")) return "View Details";
    return "View Details";
  };

  const IconComponent = getIcon(project);
  const linkText = getLinkText(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className={`bg-cyber-slate/30 border ${project.color}/30 rounded-lg overflow-hidden hover:${project.color} transition-all duration-300`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <CardContent className="p-6">
          <h3 className={`text-xl font-orbitron ${project.color === 'border-cyber-green' ? 'text-cyber-green' : 'text-cyber-blue'} mb-2`}>
            {project.title}
          </h3>
          <p className="text-cyber-muted mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className={`${
                  index % 2 === 0 ? 'bg-cyber-green/20 text-cyber-green' : 'bg-cyber-blue/20 text-cyber-blue'
                } px-2 py-1 rounded text-xs font-mono`}
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="link"
            className={`p-0 h-auto ${project.color === 'border-cyber-green' ? 'text-cyber-blue hover:text-cyber-green' : 'text-cyber-blue hover:text-cyber-green'} transition-colors duration-300`}
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" download={project.downloadLink}>
              <IconComponent className="mr-2 h-4 w-4" />
              {linkText}
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
