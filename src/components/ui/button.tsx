"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<{ x: number, y: number, id: number }[]>([])

    // Handlers
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      setRipples((prev) => [...prev, { x, y, id }])
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)

      // Call standard onClick if passed
      props.onClick?.(e as any)
    }

    const RippleElements = ripples.map((r) => (
      <span
        key={r.id}
        className="absolute bg-primary/20 rounded-full animate-ripple pointer-events-none"
        style={{
          left: r.x,
          top: r.y,
          width: "50px", // Base size, scaled by animation
          height: "50px",
          transform: "translate(-50%, -50%)",
        }}
      />
    ))

    if (asChild) {
      const child = React.Children.only(props.children) as React.ReactElement<any>

      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
          ref={ref}
          {...props}
          onClick={handleClick as any}
        >
          {React.cloneElement(child, {
            children: (
              <>
                {child.props.children}
                {RippleElements}
              </>
            ),
          })}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
        ref={ref}
        {...props}
        onClick={handleClick as any}
      >
        {props.children}
        {RippleElements}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
