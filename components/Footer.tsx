import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Warsena Eh Chuoi. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/warsena" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="www.linkedin.com/in/warsena-a-p-eh-chuoi-0a0344296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          {/* <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a> */}
        </div>
      </div>
    </footer>
  )
}

