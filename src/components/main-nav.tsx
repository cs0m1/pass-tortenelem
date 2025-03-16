"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { SearchBar } from "./search-bar"

export function MainNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center justify-between w-full px-4 py-4 border-b">
      <NavigationMenu.Root className="relative">
        <NavigationMenu.List className="flex gap-6">
          <NavigationMenu.Item>
            <Link
              href="/"
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === "/" ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              href="/topics/1?tab=flashcards"
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === "/topics/1" && pathname.includes("tab=flashcards") 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground"
              )}
            >
              Beugró
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              href="/topics"
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === "/topics" ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Topics
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              href="/practice"
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === "/practice" ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Practice
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      
      <div className="flex items-center gap-4">
        <SearchBar />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md hover:bg-accent"
        >
        {mounted ? (
          theme === "dark" ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )
        ) : (
          <div className="h-5 w-5" />
        )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </div>
  )
}
