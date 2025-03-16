"use client"

import React, { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

interface Flashcard {
  id: number
  question: string
  answer: string
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "Form of government, power is held by the people and their elected representative",
    answer: "Republic"
  },
  {
    id: 2,
    question: "Form of government, one person or a small group holds absolute power",
    answer: "Dictatorship"
  },
  {
    id: 3,
    question: "System of government, eligible citizens participate in decision-making directly, without representatives",
    answer: "Direct democracy"
  },
  {
    id: 4,
    question: "System of government, decision-making is carried out by elected representatives on behalf of the citizens",
    answer: "Representative democracy"
  },
  {
    id: 5,
    question: "Form of monarchy, the monarch holds supreme power that is not restricted by laws or a constitution",
    answer: "Absolute monarchy / absolutism"
  },
  {
    id: 6,
    question: "Form of monarchy, monarch's power is restricted by laws or a constitution and decision-making is mostly carried out by an elected government",
    answer: "Constitutional monarchy"
  },
  {
    id: 7,
    question: "Form of government, strong central power, limited political freedom, restricted or eliminated opposition and little to no democracy",
    answer: "Authoritarian regime"
  },
  {
    id: 8,
    question: "Government of a group or community by its own people, (colonies, region, towns) right is granted by a charter",
    answer: "Self-government"
  },
  {
    id: 9,
    question: "The translation of politics into reality that citizens see every day (gov/regional offices)",
    answer: "Public administration"
  },
  {
    id: 10,
    question: "System of rules created and enforced by a government or other institution to legally regulate the behaviour of a society",
    answer: "Law"
  },
  {
    id: 11,
    question: "Specific piece of legislation that has been passed by a legislative body, becomes a law when approved",
    answer: "Act"
  },
  {
    id: 12,
    question: "Fundamental legal document that establish the structure and powers of a government and the rights of the citizens",
    answer: "Constitution"
  },
  {
    id: 13,
    question: "Official order that has the force of law (executive branch issues it, implement laws, carries out gov operations, manage emergencies)",
    answer: "Decree"
  },
  {
    id: 14,
    question: "To formally approve a piece of legislation",
    answer: "Pass a law"
  },
  {
    id: 15,
    question: "To formally implement a law by an executive authority",
    answer: "Issue a law"
  },
  {
    id: 16,
    question: "Branch of government responsible for making laws, such as a parliament",
    answer: "Legislative power"
  },
  {
    id: 17,
    question: "Branch of government responsible for making sure that laws are carried out and implemented, the government usually headed by a president, prime minister or monarch",
    answer: "Executive power"
  },
  {
    id: 18,
    question: "Branch of government responsible for interpreting laws and serving justice, courts and judges belong to this branch",
    answer: "Judiciary power"
  },
  {
    id: 19,
    question: "Agencies and officers responsible for ensuring that laws are obeyed (police forces)",
    answer: "Law enforcement"
  },
  {
    id: 20,
    question: "The highest-ranking representative of a country (king, monarch)",
    answer: "Head of state"
  },
  {
    id: 21,
    question: "To become a monarch, following the death/abdication of the previous one",
    answer: "Ascend to the throne"
  },
  {
    id: 22,
    question: "To follow the previous ruler in a position of authority in a monarchy",
    answer: "Succeed somebody on the throne"
  },
  {
    id: 23,
    question: "Hold royal office/rule",
    answer: "Reign (verb)"
  },
  {
    id: 24,
    question: "The period during which the monarch rules the country",
    answer: "Reign (noun)"
  },
  {
    id: 25,
    question: "Monarch formally and voluntarily giving up their throne and power (age, political pressure)",
    answer: "Abdicate"
  },
  {
    id: 26,
    question: "Forceful removal of a monarch from their position of authority",
    answer: "Dethronement"
  },
  {
    id: 27,
    question: "A sudden, violent seizure of power/overthrowing someone",
    answer: "Coup d'etat"
  },
  {
    id: 28,
    question: "Process when someone/group gains political authority",
    answer: "Rise to power"
  },
  {
    id: 29,
    question: "Armed forces of a country (army, navy, air force)",
    answer: "Military"
  },
  {
    id: 30,
    question: "Branch of military (land-based)",
    answer: "Army"
  },
  {
    id: 31,
    question: "Branch of military (sea-based)",
    answer: "Navy"
  },
  {
    id: 32,
    question: "Branch of military, operating heavy weaponry (cannons, large-calibre guns, rocket launchers)",
    answer: "Artillery"
  },
  {
    id: 33,
    question: "Branch of military (fight on foot)",
    answer: "Infantry"
  },
  {
    id: 34,
    question: "Branch of military (fight on horseback)",
    answer: "Cavalry"
  },
  {
    id: 35,
    question: "Large military unit (10,000-20,000)",
    answer: "Division"
  },
  {
    id: 36,
    question: "General term referring to any kind of military personnel, soldiers",
    answer: "Troops"
  },
  {
    id: 37,
    question: "Series of coordinated military operations",
    answer: "Campaign"
  },
  {
    id: 38,
    question: "Compulsory enlistment of individuals into the army",
    answer: "Conscription"
  },
  {
    id: 39,
    question: "Group of soldiers who fight in return to money",
    answer: "Mercenary army"
  },
  {
    id: 40,
    question: "Permanent army maintained during peace and war (always ready)",
    answer: "Professional standing army"
  },
  {
    id: 41,
    question: "Soldiers who are part of an official, organised military force (under government control)",
    answer: "Regular troops"
  },
  {
    id: 42,
    question: "Fighters who are not part of a formal army (often not trained, less controlled)",
    answer: "Irregular troops"
  },
  {
    id: 43,
    question: "Form of irregular warfare, small independent forces, purpose of harassing the activity of a usually bigger army",
    answer: "Guerrilla warfare"
  },
  {
    id: 44,
    question: "Soldiers taking valuables after a war or battle from those they have captured/defeated (civilians)",
    answer: "Looting"
  },
  {
    id: 45,
    question: "Armed groups that are organised similarly to professional military but usually controlled by political groups (aggressive manner)",
    answer: "Paramilitary troops"
  },
  {
    id: 46,
    question: "Large group of people who live together in a structured community (common institutions, laws, customs, values)",
    answer: "Society"
  },
  {
    id: 47,
    question: "Collection of people whose status, position, living standards and values are similar to each other (based on wealth, education occupation or social status) lower, middle, upper class",
    answer: "Social group/class/layer"
  },
  {
    id: 48,
    question: "System based on which people are ranked above one another, according to status or authority",
    answer: "Hierarchy"
  },
  {
    id: 49,
    question: "Legally recognised member of a state/nation with rights (obeying laws, paying taxes)",
    answer: "Citizen"
  },
  {
    id: 50,
    question: "All inhabitants of a particular area",
    answer: "Population"
  },
  {
    id: 51,
    question: "Structure, distribution and trends of a society (birth/death rates, migration)",
    answer: "Demography"
  },
  {
    id: 52,
    question: "Movement of people from one place to another, either within a country or across countries",
    answer: "Migration"
  },
  {
    id: 53,
    question: "Large group of people with a shared identity based on language, territory, culture, language and/or religion",
    answer: "Nation"
  },
  {
    id: 54,
    question: "Social and cultural characteristics, backgrounds or experiences shared by a group of people in a society",
    answer: "Ethnicity"
  },
  {
    id: 55,
    question: "Group within society (smaller number, less power than the dominant group)",
    answer: "Minority"
  },
  {
    id: 56,
    question: "Ethnic group with the same language, culture and history who form part of a political nation",
    answer: "Nationality"
  },
  {
    id: 57,
    question: "Branch of economy (concerned with farming)",
    answer: "Agriculture"
  },
  {
    id: 58,
    question: "Branch of economy (producing goods, providing services)",
    answer: "Industry"
  },
  {
    id: 59,
    question: "Exchange of goods and services (between individuals, countries, businesses)",
    answer: "Trade"
  },
  {
    id: 60,
    question: "Compulsory contribution to state revenue",
    answer: "Tax"
  },
  {
    id: 61,
    question: "Economic policy, community aims to be self-reliant by producing as much as possible of the goods and services it needs",
    answer: "Self-sufficiency/autarky"
  },
  {
    id: 62,
    question: "System of beliefs, practices, rituals, and moral codes that a group of people follow, usually centred around the worshipping of one or more deities",
    answer: "Religion"
  },
  {
    id: 63,
    question: "Strong belief or trust in a particular religion or deity",
    answer: "Faith"
  },
  {
    id: 64,
    question: "Christian organisation with its own clergy, buildings and beliefs",
    answer: "Church"
  },
  {
    id: 65,
    question: "Christian temple of worship",
    answer: "church"
  },
  {
    id: 66,
    question: "Distinct religious group within a larger faith, particularly within Christianity (own unique beliefs, practices, organisational structure)",
    answer: "Denomination"
  },
  {
    id: 67,
    question: "Principle or belief that is held to be true by a particular religion",
    answer: "Tenet"
  },
  {
    id: 68,
    question: "Structured beliefs, teachings and values of a religious/political movement or group",
    answer: "Ideology"
  }
]

export function BasicConceptsFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const currentCard = flashcards[currentIndex]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length)
    setIsFlipped(false)
  }

  const previousCard = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? flashcards.length - 1 : prev - 1
    )
    setIsFlipped(false)
  }

  return (
    <div className="flex flex-col items-center w-full space-y-8">      
      <div className="w-full max-w-2xl">
        <div className="relative">
          {/* Progress indicator */}
          <div className="absolute -top-6 w-full text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {flashcards.length}
          </div>

          {/* Flashcard */}
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
              {/* Front (Definition) */}
              <div 
                className="absolute w-full h-full bg-card border rounded-xl p-6 flex items-center justify-center text-center shadow-md overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-lg">{currentCard.question}</p>
              </div>

              {/* Back (Term) */}
              <div 
                className="absolute w-full h-full bg-card border rounded-xl p-6 flex items-center justify-center text-center shadow-md overflow-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-lg font-semibold">{currentCard.answer}</p>
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
