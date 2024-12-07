import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:adrianaafandi@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                    adrianaafandi@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>+60199707071</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p>Kuala Lumpur, Malaysia</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

