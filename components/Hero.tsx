import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hi, I'm Warsena Eh Chuoi</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
      A passionate web developer and mobile application developer creating impactful digital experiences
      </p>
      <Button size="lg" asChild>
        <a href="#projects">
        View My Work <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </section>
  )
}

