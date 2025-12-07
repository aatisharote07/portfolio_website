import { Metadata } from "next"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaborations and opportunities",
}

export default function ContactPage() {
  return <Contact />
}
