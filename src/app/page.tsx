import Link from "next/link"
import { BookOpenIcon, AcademicCapIcon, LightBulbIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Pass Your Hungarian History Érettségi
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to ace the középszint history exam — flashcards, smart summaries, practice questions, and more!
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <BookOpenIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Focused Study</h3>
          <p className="text-center text-muted-foreground">
            Learn key events, dates, and people with flashcards and detailed topic breakdowns.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <AcademicCapIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Quick Summaries</h3>
          <p className="text-center text-muted-foreground">
            Get easy-to-understand summaries, with text-to-speech for on-the-go listening.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
          <LightBulbIcon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Smart Revision</h3>
          <p className="text-center text-muted-foreground">
            Practice with exam-style questions, track your progress, and focus on weaker areas.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Ready to Crush Your History Exam?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/topics"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Start Studying
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
