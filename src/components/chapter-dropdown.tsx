"use client"

import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

interface Topic {
  id: number
  title: string
}

interface ChapterDropdownProps {
  chapter: string
  topics: Topic[]
  selectedTopic: number | null
  isExpanded: boolean
  onToggle: () => void
  onSelectTopic: (id: number) => void
  highlighted?: boolean
}

export function ChapterDropdown({
  chapter,
  topics,
  selectedTopic,
  isExpanded,
  onToggle,
  onSelectTopic,
  highlighted = false,
}: ChapterDropdownProps) {
  return (
    <div className={cn(
      "border-l-2 border-transparent",
      highlighted && "border-l-2 border-primary"
    )}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold hover:bg-accent/50 rounded-md group"
      >
        <span className={cn(
          "text-muted-foreground",
          highlighted && "text-primary"
        )}>
          {chapter}
        </span>
        <ChevronRightIcon 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isExpanded && "transform rotate-90",
            highlighted && "text-primary"
          )} 
        />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        isExpanded ? "max-h-96" : "max-h-0"
      )}>
        <ul className="space-y-1 pl-4 pr-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                className={cn(
                  "w-full px-3 py-2 text-sm rounded-md text-left transition-colors",
                  selectedTopic === topic.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50 text-muted-foreground"
                )}
                onClick={() => onSelectTopic(topic.id)}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
