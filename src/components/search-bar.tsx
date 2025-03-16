"use client"

import React, { useState } from "react"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

export function SearchBar() {
  const [isActive, setIsActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleClear = () => {
    setSearchQuery("")
    setIsActive(false)
  }

  return (
    <div className={`relative flex items-center transition-all duration-200 ${
      isActive ? "w-64" : "w-40"
    }`}>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => !searchQuery && setIsActive(false)}
        className={`w-full py-2 pl-9 pr-8 text-sm rounded-md border transition-all duration-200
          ${isActive 
            ? "border-primary ring-2 ring-primary/20 bg-background" 
            : "border-border bg-muted/30"
          } 
          placeholder:text-muted-foreground focus:outline-none`}
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <XMarkIcon className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </button>
      )}
    </div>
  )
}
