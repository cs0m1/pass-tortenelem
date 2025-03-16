"use client"

import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

interface TimelineEvent {
  id: number
  date: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
  title?: string
}

export function Timeline({ events, title }: TimelineProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {title && (
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
      )}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row gap-4 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Date column */}
              <div className="flex-1 md:text-right">
                <div className={`md:pr-8 ${
                  index % 2 === 0 ? "md:pl-8 md:pr-0" : ""
                }`}>
                  <span className="text-sm font-medium text-muted-foreground">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              {/* Content column */}
              <div className="flex-1">
                <div className={`pl-8 md:pl-8 ${
                  index % 2 === 0 ? "md:pl-0 md:pr-8" : ""
                }`}>
                  <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <ChevronRightIcon className="w-4 h-4" />
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
