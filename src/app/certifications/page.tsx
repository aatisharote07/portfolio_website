import { Metadata } from "next"
import { Certificates } from "@/components/sections/certificates"

export const metadata: Metadata = {
    title: "Certifications",
    description: "My professional certifications and achievements",
}

export default function CertificationsPage() {
    return (
        <div className="container mx-auto px-4">
            <Certificates />
        </div>
    )
}
