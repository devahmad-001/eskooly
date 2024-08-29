'use client'
import Allowcation from "./allowcation/Allowcation"
import ContactForm from "./contactForm/ContactForm"

export default function ContactUS() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-900 to-blue-700 p-8">
      <ContactForm />
      <Allowcation />
    </div>
  )
}
