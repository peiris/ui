"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/grid-templates"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/grid-templates")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Grid Templates
        </Link>
        <Link
          href="/elements"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/elements")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Elements
        </Link>

        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
      </nav>
    </div>
  )
}
