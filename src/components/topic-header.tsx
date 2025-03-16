"use client"

import React from "react"
import { BookOpenIcon, ClockIcon, CheckCircleIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

import { PlayIcon } from "@heroicons/react/24/outline"

export type TabType = 'content' | 'flashcards' | 'timeline' | 'practice' | 'video'

export interface TopicFeatures {
  content: boolean
  timeline?: boolean
  practice?: boolean
  video?: boolean
  flashcards?: boolean
}

interface TopicHeaderProps {
  topicPath: string
  title: string
  description: string
  selectedTab: TabType
  features: TopicFeatures
  onTabChange: (tab: TabType) => void
}

const TabButton = ({ 
  icon, 
  label, 
  isSelected, 
  onClick 
}: { 
  icon: React.ReactNode
  label: string
  isSelected: boolean
  onClick: () => void 
}) => (
  <button
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
      isSelected 
        ? "bg-background text-foreground" 
        : "text-muted-foreground hover:text-foreground"
    )}
    onClick={onClick}
  >
    <div className={isSelected ? "text-foreground" : "text-muted-foreground"}>
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </button>
)

export function TopicHeader({
  topicPath,
  title,
  description,
  selectedTab,
  features,
  onTabChange,
}: TopicHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Path and title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {topicPath.split('/').map((part, i, arr) => (
            <React.Fragment key={i}>
              <span className="hover:text-foreground cursor-pointer">
                {part.trim()}
              </span>
              {i < arr.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>

      {/* Description */}
      <p className="text-muted-foreground max-w-3xl">
        {description}
      </p>

      {/* Tabs */}
      <div className="flex bg-muted rounded-lg p-1 w-fit">
        {/* Always show content tab */}
        <TabButton
          icon={<BookOpenIcon className="w-5 h-5" />}
          label="Content"
          isSelected={selectedTab === 'content'}
          onClick={() => onTabChange('content')}
        />
        
        {/* Optional feature tabs */}
        {features.flashcards && (
          <TabButton
            icon={<Square3Stack3DIcon className="w-5 h-5" />}
            label="Flashcards"
            isSelected={selectedTab === 'flashcards'}
            onClick={() => onTabChange('flashcards')}
          />
        )}
        {features.timeline && (
          <TabButton
            icon={<ClockIcon className="w-5 h-5" />}
            label="Timeline"
            isSelected={selectedTab === 'timeline'}
            onClick={() => onTabChange('timeline')}
          />
        )}
        {features.practice && (
          <TabButton
            icon={<CheckCircleIcon className="w-5 h-5" />}
            label="Practice"
            isSelected={selectedTab === 'practice'}
            onClick={() => onTabChange('practice')}
          />
        )}
        {features.video && (
          <TabButton
            icon={<PlayIcon className="w-5 h-5" />}
            label="Video"
            isSelected={selectedTab === 'video'}
            onClick={() => onTabChange('video')}
          />
        )}
      </div>
    </div>
  )
}
