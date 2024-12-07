import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 lg:px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Adriana Afandi</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#projects"><Button variant="ghost">Projects</Button></Link></li>
          <li><Link href="#contact"><Button variant="ghost">Contact</Button></Link></li>
        </ul>
      </nav>
    </header>
  )
}

