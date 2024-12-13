import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Dual Campus Integrated Booking System (Clinic Campus) - FYP (In development)",
    description: "This mobile application is designed specifically for UMP students and lecturers at Campus Pekan and Gambang. It streamlines the process of managing appointments by allowing users to book, reschedule, and cancel appointments effortlessly. ",
    image: "/fyp dual.jpg?height=200&width=300",
    tags: ["Dart", "Firebase"],
    githubLink: "https://github.com/warsena/appointmentpractice.git",
  },
  {
    title: "KAFA Management System",
    description: "The KAFA Management System is a streamlined platform designed to manage student results and interactions in KAFA institutions. It enables teachers to easily add and update student results while allowing parents to view their children's academic performance. Built using the Laravel framework, the system ensures efficient data management and user-friendly access to essential information.",
    image: "/kafa.png?height=200&width=300",
    tags: ["Laravel", "PHP", "Blade", "Laragon"],
    liveLink: "https://kafamanagementsystem.io/login",
    githubLink: "https://github.com/warsena/KAFA-Management-System.git",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

