"use client"

import React, { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// Temporary sample flashcards - will be replaced with proper data management
const sampleFlashcards = [
  {
    id: 1,
    question: "When did the Hungarian Revolution of 1848 begin?",
    answer: "March 15, 1848 - The revolution began in Pest with the reading of the 12 Points and the recitation of Petőfi's National Song.",
  },
  {
    id: 2,
    question: "Who was István Széchenyi?",
    answer: "Known as 'the Greatest Hungarian', he was a leading reformer of the Hungarian Reform Era, founding the Hungarian Academy of Sciences and supporting many modernization efforts.",
  },
  {
    id: 3,
    question: "What was the Compromise of 1867?",
    answer: "The Austro-Hungarian Compromise of 1867 established the dual monarchy of Austria-Hungary, creating two autonomous states under a common ruler.",
  },
]

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const currentCard = sampleFlashcards[currentIndex]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleFlashcards.length)
    setIsFlipped(false)
  }

  const previousCard = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? sampleFlashcards.length - 1 : prev - 1
    )
    setIsFlipped(false)
  }

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">History Flashcards</h1>
      
      <div className="w-full max-w-2xl">
        <div className="relative">
          {/* Progress indicator */}
          <div className="absolute -top-6 w-full text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {sampleFlashcards.length}
          </div>

          {/* Flashcard */}
          {/* Flashcard Container */}
          <div 
            className="aspect-[3/2] w-full cursor-pointer overflow-hidden"
            style={{ perspective: "1000px" }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Card */}
            <div
              className="relative w-full h-full transition-all duration-500"
              style={{ 
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : ""
              }}
            >
              {/* Front */}
              <div 
                className="absolute w-full h-full bg-card border rounded-xl p-6 flex items-center justify-center text-center shadow-md overflow-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-lg">{currentCard.question}</p>
              </div>

              {/* Back */}
              <div 
                className="absolute w-full h-full bg-card border rounded-xl p-6 flex items-center justify-center text-center shadow-md overflow-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-lg">{currentCard.answer}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={previousCard}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-accent"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={nextCard}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-accent"
            >
              Next
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
