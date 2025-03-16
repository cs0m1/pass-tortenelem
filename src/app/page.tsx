import Link from "next/link"
import { BookOpenIcon, AcademicCapIcon, LightBulbIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Your Path to History Exam Success
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive preparation for the Hungarian history érettségi exam through interactive learning, AI-powered summaries, and collaborative study tools.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <BookOpenIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Interactive Learning</h3>
          <p className="text-center text-muted-foreground">
            Study with flashcards, timelines, and practice questions to reinforce your knowledge.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <AcademicCapIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">AI-Powered Summaries</h3>
          <p className="text-center text-muted-foreground">
            Get concise summaries of complex topics with text-to-speech support.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <LightBulbIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Smart Practice</h3>
          <p className="text-center text-muted-foreground">
            Track your progress and focus on areas that need improvement.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Ready to Start Learning?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/topics"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Browse Topics
          </Link>
          <Link
            href="/topics/1?tab=flashcards"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Try Flashcards
          </Link>
        </div>
      </section>
    </div>
  )
}
