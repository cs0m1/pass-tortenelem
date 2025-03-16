"use client"

import React, { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ChapterDropdown } from "@/components/chapter-dropdown"
import { TopicHeader, TabType } from "@/components/topic-header"
import { TopicFeatures } from "@/components/topic-header"
import { BasicConceptsFlashcards } from "@/components/basic-concepts-flashcards"
import { BasicConceptsContent } from "@/components/basic-concepts-content"
import { BasicConceptsPractice } from "@/components/basic-concepts-practice"

interface TopicDetail {
  path: string
  description: string
  features: TopicFeatures
}

// Example topic details - will be expanded with more content
const topicDetails: Record<number, TopicDetail> = {
  1: {
    path: "Topics / General Historical Concepts / Basic Historical Concepts",
    description: "Introduction to fundamental historical concepts and methodologies used in studying history.",
    features: {
      content: true,
      flashcards: true,
      practice: true
    }
  },
  34: {
    path: "Topics / Hungary 18-19th Century / Revolution of 1848",
    description: "The Hungarian Revolution of 1848 was one of the many European Revolutions of 1848 and closely linked to other revolutions of 1848 in the Habsburg areas. The revolution in the Kingdom of Hungary grew into a war for independence from the Austrian Empire, ruled by the Habsburg dynasty.",
    features: {
      content: true,
      timeline: true,
      practice: true,
      video: true
    }
  },
}

// Topics organized by sections from the teacher's outline
const historicalEras = [
  {
    id: 1,
    chapter: "General Historical Concepts",
    topics: [{ id: 1, title: "Basic Historical Concepts" }],
  },
  {
    id: 2,
    chapter: "Ancient Times",
    topics: [
      { id: 2, title: "Athenian Democracy" },
      { id: 3, title: "Greek and Roman Architecture" },
      { id: 4, title: "Jewish Monotheism" },
      { id: 5, title: "Rise of Christianity" },
      { id: 6, title: "Islam and Arab Expansion" },
    ],
  },
  {
    id: 3,
    chapter: "Middle Ages",
    topics: [
      { id: 7, title: "Manor System and Feudal Society" },
      { id: 8, title: "Medieval Towns and Trade" },
      { id: 9, title: "Church Hierarchy and Monasticism" },
      { id: 11, title: "Romanesque, Gothic, and Renaissance Architecture" },
    ],
  },
  {
    id: 4,
    chapter: "Medieval Hungary",
    topics: [
      { id: 12, title: "Hungarian Conquest and Raids" },
      { id: 13, title: "State Formation under Géza and St. Stephen" },
      { id: 14, title: "Mongol Invasion and Reconstruction" },
      { id: 15, title: "The Golden Bull" },
      { id: 16, title: "Charles I and the Visegrád Congress" },
      { id: 17, title: "Anti-Ottoman Campaigns" },
      { id: 18, title: "Matthias Corvinus's Reign" },
    ],
  },
  {
    id: 5,
    chapter: "Early Modern Age",
    topics: [
      { id: 19, title: "Age of Discovery and Early Capitalism" },
      { id: 20, title: "Reformation in Europe and Hungary" },
      { id: 21, title: "Counter-Reformation and Baroque" },
      { id: 22, title: "Battle of Mohács" },
      { id: 23, title: "Ottoman Hungary" },
      { id: 24, title: "Transylvania's Unique Position" },
      { id: 25, title: "Rákóczi's War of Independence" },
      { id: 26, title: "Resettlement of Hungary" },
    ],
  },
  {
    id: 6,
    chapter: "18-19th Century",
    topics: [
      { id: 27, title: "British and American Political Systems" },
      { id: 28, title: "Enlightenment Political Theory" },
      { id: 29, title: "Maria Theresa and Joseph II's Reforms" },
      { id: 30, title: "New Ideologies: Liberalism, Nationalism, Conservatism" },
      { id: 31, title: "First Industrial Revolution" },
      { id: 37, title: "Second Industrial Revolution" },
      { id: 39, title: "Socialist Ideology" },
    ],
  },
  {
    id: 7,
    chapter: "Hungary 18-19th Century",
    topics: [
      { id: 32, title: "Key Issues of the Reform Era" },
      { id: 33, title: "Széchenyi and Kossuth's Programs" },
      { id: 34, title: "Revolution of 1848 and April Laws" },
      { id: 35, title: "War of Independence" },
      { id: 36, title: "Spring Campaign and Defeat" },
    ],
  },
  {
    id: 8,
    chapter: "From 1848 to 1918",
    topics: [
      { id: 38, title: "Economic Compromise and State Policy" },
      { id: 40, title: "Modern Nation States" },
      { id: 41, title: "Modern Hungarian State" },
      { id: 42, title: "The Compromise of 1867" },
      { id: 43, title: "Ethnic Relations in the Dual Monarchy" },
      { id: 44, title: "World War I and Hungary" },
    ],
  },
  {
    id: 9,
    chapter: "Interwar Period",
    topics: [
      { id: 45, title: "Revolutionary Period 1918-1920" },
      { id: 46, title: "Treaty of Trianon" },
      { id: 47, title: "Nazi Germany" },
      { id: 48, title: "Soviet Union" },
      { id: 49, title: "Consolidation in 1920s Hungary" },
      { id: 50, title: "Education and Cultural Policy" },
    ],
  },
  {
    id: 10,
    chapter: "From 1939 to Today",
    topics: [
      { id: 51, title: "World War II Overview" },
      { id: 52, title: "Territorial Revision and War Entry" },
      { id: 53, title: "Holocaust in Europe and Hungary" },
      { id: 54, title: "German Occupation and Arrow Cross Rule" },
      { id: 55, title: "Cold War and Two Germanys" },
      { id: 56, title: "German Reunification" },
      { id: 57, title: "Fall of Communism" },
      { id: 62, title: "European Union Institutions" },
    ],
  },
  {
    id: 11,
    chapter: "Hungary after WWII",
    topics: [
      { id: 58, title: "Rákosi Era" },
      { id: 59, title: "Revolution of 1956" },
      { id: 60, title: "Kádár Era" },
      { id: 61, title: "Transition to Democracy" },
      { id: 63, title: "Demographic Changes (1945-Present)" },
      { id: 64, title: "Constitutional System" },
      { id: 65, title: "Hungarians Beyond Borders" },
      { id: 66, title: "Minorities and Roma in Hungary" },
    ],
  },
]

// Sample timeline events
const timelineEvents = [
  {
    id: 1,
    date: "896",
    title: "Hungarian Conquest",
    description: "Arrival of Hungarian tribes in the Carpathian Basin under Árpád",
  },
  {
    id: 2,
    date: "1000",
    title: "Foundation of the Kingdom",
    description: "Coronation of Saint Stephen I, establishment of Christian Hungarian state",
  },
  {
    id: 3,
    date: "1222",
    title: "Golden Bull",
    description: "Issuance of the Golden Bull by Andrew II, limiting royal power",
  },
  {
    id: 4,
    date: "1241-42",
    title: "Mongol Invasion",
    description: "Devastating Mongol invasion leads to significant rebuilding under Béla IV",
  },
  {
    id: 5,
    date: "1458-90",
    title: "Matthias Corvinus",
    description: "Golden age of medieval Hungary under King Matthias",
  },
  {
    id: 6,
    date: "1526",
    title: "Battle of Mohács",
    description: "Decisive Ottoman victory leading to the partition of Hungary",
  },
  {
    id: 7,
    date: "1703-11",
    title: "Rákóczi's War of Independence",
    description: "Last major anti-Habsburg uprising led by Francis II Rákóczi",
  },
  {
    id: 8,
    date: "1848-49",
    title: "Revolution and War of Independence",
    description: "Hungarian Revolution against Habsburg rule",
  },
  {
    id: 9,
    date: "1867",
    title: "Austro-Hungarian Compromise",
    description: "Creation of the dual monarchy Austria-Hungary",
  },
  {
    id: 10,
    date: "1920",
    title: "Treaty of Trianon",
    description: "Post-WWI treaty resulting in significant territorial losses",
  },
  {
    id: 11,
    date: "1956",
    title: "Hungarian Revolution",
    description: "Anti-Soviet uprising and its subsequent suppression",
  },
  {
    id: 12,
    date: "1989",
    title: "End of Communist Rule",
    description: "Peaceful transition to democracy and market economy",
  }
]

export default function TopicsPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState<TabType>('content')

  React.useEffect(() => {
    // Check URL parameters for direct navigation
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get('tab')
    if (tab === 'flashcards') {
      setSelectedTab('flashcards')
      setSelectedTopic(1)  // Basic Historical Concepts
    }
  }, [])

  const toggleChapter = React.useCallback((chapterId: number) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }, [])

  // Auto-expand chapters that have search matches and collapse when search is cleared
  React.useEffect(() => {
    if (searchQuery) {
      const chaptersWithMatches = historicalEras
        .filter(chapter => 
          chapter.topics.some(topic =>
            topic.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .map(chapter => chapter.id)
      setExpandedChapters(chaptersWithMatches)
    } else {
      setExpandedChapters([])
    }
  }, [searchQuery])

  const filteredTopics = React.useMemo(() => 
    historicalEras.map(chapter => ({
      ...chapter,
      topics: chapter.topics.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(chapter => chapter.topics.length > 0)
  , [searchQuery])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="w-80 border-r bg-muted/30 overflow-y-auto">
        <div className="p-4 border-b">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search topics..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-md bg-background border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <nav className="p-2 space-y-1">
          {filteredTopics.map((chapter) => (
            <ChapterDropdown
              key={chapter.id}
              chapter={chapter.chapter}
              topics={chapter.topics}
              selectedTopic={selectedTopic}
              isExpanded={expandedChapters.includes(chapter.id)}
              onToggle={() => toggleChapter(chapter.id)}
              onSelectTopic={setSelectedTopic}
              highlighted={searchQuery !== "" && chapter.topics.length > 0}
            />
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        {selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            {/* Topic header with navigation */}
            <div className="mb-8">
              <TopicHeader
                topicPath={topicDetails[selectedTopic]?.path || `Topics / ${
                  historicalEras
                    .find(era => 
                      era.topics.some(t => t.id === selectedTopic)
                    )?.chapter
                } / ${
                  historicalEras
                    .flatMap(c => c.topics)
                    .find(t => t.id === selectedTopic)?.title
                }`}
                title={historicalEras
                  .flatMap(c => c.topics)
                  .find(t => t.id === selectedTopic)?.title || ""}
                features={topicDetails[selectedTopic]?.features || { content: true }}
                description={topicDetails[selectedTopic]?.description || 
                  "Detailed description for this topic will be available soon."}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
              />
            </div>

            {/* Tab content */}
            <div className="p-4 border rounded-lg bg-muted/30">
              {selectedTopic === 1 ? (
                <>
                  {selectedTab === 'content' && <BasicConceptsContent />}
                  {selectedTab === 'flashcards' && <BasicConceptsFlashcards />}
                  {selectedTab === 'practice' && <BasicConceptsPractice />}
                </>
              ) : (
                <p className="text-center text-muted-foreground">
                  {selectedTab === 'content' && "Content will be available soon."}
                  {selectedTab === 'flashcards' && "Flashcards will be available soon."}
                  {selectedTab === 'timeline' && "Timeline will be available soon."}
                  {selectedTab === 'practice' && "Practice questions will be available soon."}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to Topics</h1>
            <p className="text-muted-foreground">
              Select a topic from the sidebar to get started with your learning journey.
            </p>
          </div>
        )}
        </main>
      </div>
    </div>
  )
}
