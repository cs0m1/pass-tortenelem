"use client"

import React, { useState } from "react"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

// Create practice questions from the basic concepts
const questions = [
  {
    id: 1,
    question: "What form of government has power held by the people and their elected representatives?",
    options: [
      "Republic",
      "Dictatorship",
      "Direct democracy",
      "Constitutional monarchy"
    ],
    correctAnswer: 0,
    explanation: "A Republic is a form of government where power is held by the people and their elected representatives."
  },
  {
    id: 2,
    question: "Which system of government allows citizens to participate in decision-making directly, without representatives?",
    options: [
      "Representative democracy",
      "Direct democracy",
      "Constitutional monarchy",
      "Republic"
    ],
    correctAnswer: 1,
    explanation: "Direct democracy is a system where eligible citizens participate in decision-making directly, without representatives."
  },
  {
    id: 3,
    question: "What do you call a form of monarchy where the monarch's power is restricted by laws or a constitution?",
    options: [
      "Absolute monarchy",
      "Republic",
      "Constitutional monarchy",
      "Authoritarian regime"
    ],
    correctAnswer: 2,
    explanation: "Constitutional monarchy is a form where the monarch's power is restricted by laws or a constitution, and decision-making is mostly carried out by an elected government."
  },
  {
    id: 4,
    question: "Which branch of government is responsible for interpreting laws and serving justice?",
    options: [
      "Executive power",
      "Legislative power",
      "Judiciary power",
      "Law enforcement"
    ],
    correctAnswer: 2,
    explanation: "The Judiciary power is the branch of government responsible for interpreting laws and serving justice, courts and judges belong to this branch."
  },
  {
    id: 5,
    question: "What type of warfare involves small independent forces harassing the activity of a usually bigger army?",
    options: [
      "Regular warfare",
      "Conventional warfare",
      "Civil warfare",
      "Guerrilla warfare"
    ],
    correctAnswer: 3,
    explanation: "Guerrilla warfare is a form of irregular warfare where small independent forces harass the activity of a usually bigger army."
  }
]

export function BasicConceptsPractice() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (optionIndex: number) => {
    if (isAnswered) return
    setSelectedAnswer(optionIndex)
    setIsAnswered(true)
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
  }

  const currentQuizQuestion = questions[currentQuestion]

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <div className="text-sm text-muted-foreground">
          Score: {score}/{questions.length}
        </div>
      </div>

      <div className="space-y-6">
        {/* Question */}
        <div className="p-6 border rounded-lg bg-card">
          <p className="text-lg mb-4">
            {currentQuizQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuizQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-md border transition-colors ${
                  isAnswered
                    ? index === currentQuizQuestion.correctAnswer
                      ? "bg-green-500/10 border-green-500"
                      : index === selectedAnswer
                      ? "bg-red-500/10 border-red-500"
                      : "bg-muted"
                    : "hover:bg-accent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && index === currentQuizQuestion.correctAnswer && (
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  )}
                  {isAnswered && index === selectedAnswer && index !== currentQuizQuestion.correctAnswer && (
                    <XCircleIcon className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm">{currentQuizQuestion.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-4">
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
            >
              Next Question
            </button>
          ) : isAnswered ? (
            <button
              onClick={resetQuiz}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Restart Quiz
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
