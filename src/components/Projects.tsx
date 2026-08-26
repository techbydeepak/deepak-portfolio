import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import portfolioImg from "@/assets/dodge.png";
import cookingImg from "@/assets/smart-search.png";
import weatherImg from "@/assets/git-profile.png";
import e_com from "@/assets/e-com.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dodge Service – Muscle Garage",
      description:
        "A modern muscle-car themed automotive service website built with React.js, Node.js, Express.js, and MongoDB. Features dynamic content, gallery, hero slider, service showcase, and contact form.",
      image: portfolioImg,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/techbydeepak/dedge_service",
      live: "https://dedge-service.onrender.com/",
    },
    {
      id: 2,
      title: "AI Video Ads Generator",
      description:
        "An AI-powered platform to generate engaging video ads quickly with a smooth interface and automation-driven workflow. Helps create high-quality ad creatives faster.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "React.js", "Tailwind CSS", "AI"],
      github: "https://github.com/techbydeepak/ai-video-ads-generator",
      live: "https://ai-video-ads-generator-delta.vercel.app/",
    },
    {
      id: 3,
      title: "Work Manager App",
      description:
        "A productivity-focused work management app to organize tasks, manage workflow, and track progress efficiently with a clean UI and modern UX.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "React.js", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/techbydeepak/work-manager",
      live: "https://work-manager-ashy-five.vercel.app/",
    },
    {
      id: 4,
      title: "GitHub Profile Analyzer",
      description:
        "A GitHub profile analyzer that retrieves and displays user profiles, repositories, followers, and other GitHub data using REST API integration. Includes keyword-based profile scoring and debouncing.",
      image: weatherImg,
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "REST APIs"],
      github: "https://github.com/techbydeepak/GitHub-Analyzer",
      live: "https://git-hub-analyzer-one.vercel.app/",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce application featuring product listings, cart functionality, and dynamic UI updates using reusable React components. Implemented Context API for global cart state management.",
      image:
        e_com,
      tech: ["React.js", "Context API", "Tailwind CSS", "State Management"],
      github: "https://github.com/techbydeepak/e-com-2-0",
      live: "https://e-com-2-0-rho.vercel.app/",
    },
    {
      id: 6,
      title: "Smart Search Application",
      description:
        "A dynamic search application with REST API integration, filtering, and real-time result rendering. Includes asynchronous API handling, loading and error states, light/dark theme management, and responsive design.",
      image: cookingImg,
      tech: ["React.js", "JavaScript", "REST APIs", "Search & Filtering"],
      github: "https://github.com/techbydeepak/smart-search",
      live: "https://smart-search-theta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack
            development and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="portfolio-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    {/* ✅ Live Demo Link */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="secondary" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>

                    {/* ✅ GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
