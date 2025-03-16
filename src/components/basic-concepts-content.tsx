"use client"

import React from "react"
import { flashcards } from "./basic-concepts-flashcards"

export function BasicConceptsContent() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {flashcards.map(({ id, answer, question }) => (
        <div key={id} className="space-y-1">
          <h3 className="font-semibold">{answer}</h3>
          <p className="text-muted-foreground">{question}</p>
        </div>
      ))}

      <div className="pt-8 border-t">
        <a 
          href="https://quizlet.com/hu/998773812/alapfogalmak-flash-cards/?funnelUUID=2c93906e-43a0-4f62-bf73-9e23076c4bca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          Study these concepts on Quizlet
          <span className="text-xs">↗</span>
        </a>
      </div>
    </div>
  )
}
