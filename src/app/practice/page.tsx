"use client"

import React, { useState } from "react"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

// Temporary sample questions - will be replaced with proper data management
const sampleQuestions = [
  {
    id: 1,
    question: "Who was the first king of Hungary?",
    options: [
      "Saint Stephen I",
      "Prince Árpád",
      "Béla IV",
      "Matthias Corvinus"
    ],
    correctAnswer: 0,
    explanation: "Saint Stephen I (originally Vajk) was crowned as the first King of Hungary in 1000/1001, marking the foundation of the Christian Hungarian state."
  },
  {
    id: 2,
    question: "Which treaty ended World War I for Hungary?",
    options: [
      "Treaty of Versailles",
      "Treaty of Trianon",
      "Treaty of Saint-Germain",
      "Treaty of Neuilly"
    ],
    correctAnswer: 1,
    explanation: "The Treaty of Trianon (1920) formally ended World War I between most of the Allies and the Kingdom of Hungary, resulting in significant territorial losses for Hungary."
  },
  {
    id: 3,
    question: "During which period did the Hungarian Reform Era take place?",
    options: [
      "1825-1848",
      "1867-1890",
      "1800-1820",
      "1849-1867"
    ],
    correctAnswer: 0,
    explanation: "The Hungarian Reform Era (1825-1848) was a period of modernization led by Count István Széchenyi and other reformers, ending with the Revolution of 1848."
  }
]

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (optionIndex: number) => {
    if (isAnswered) return
    setSelectedAnswer(optionIndex)
    setIsAnswered(true)
    if (optionIndex === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
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

  const currentQuizQuestion = sampleQuestions[currentQuestion]

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-4xl mx-auto space-y-8">
      <div className="w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Practice Questions</h1>
          <div className="text-sm text-muted-foreground">
            Score: {score}/{sampleQuestions.length}
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
            {currentQuestion < sampleQuestions.length - 1 ? (
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
    </div>
  )
}
