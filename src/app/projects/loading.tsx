import { ProjectsGridSkeleton } from "@/components/sections/projects-skeleton"
import { AnimatedSection } from "@/components/sections/animated-section"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <Skeleton className="h-12 w-48 mb-4" />
                    <Skeleton className="h-6 w-full max-w-2xl" />
                </div>

                <ProjectsGridSkeleton />
            </div>
        </div>
    )
}
