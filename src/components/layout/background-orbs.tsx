"use client"

import { useEffect, useState } from "react"

export function BackgroundOrbs() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">
            {/* Orb 1: Top Right - Blue/Purple */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"
                style={{ animationDelay: "0s" }}
            />

            {/* Orb 2: Bottom Left - Purple/Pink */}
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"
                style={{ animationDelay: "2s" }}
            />

            {/* Orb 3: Center/Top-Left - Cyan/Blue */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"
                style={{ animationDelay: "4s" }}
            />
        </div>
    )
}
