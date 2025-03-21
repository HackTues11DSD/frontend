"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FirstAidTopic {
  title: string;
  description: string;
  steps: string[];
}

export default function Emergency() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const firstAidTopics: FirstAidTopic[] = [
    {
      title: "Mouth-to-Mouth Resuscitation",
      description: "Used when a person is not breathing. Helps provide oxygen to the lungs.",
      steps: [
        "Lay the person on their back and tilt their head back.",
        "Pinch their nose shut and cover their mouth with yours.",
        "Give two slow breaths, watching their chest rise.",
        "Continue until they start breathing or help arrives.",
      ],
    },
    {
      title: "CPR (Cardiopulmonary Resuscitation)",
      description: "Combines chest compressions and breaths to restore blood circulation.",
      steps: [
        "Place the person on a firm surface and kneel beside them.",
        "Put your hands in the center of their chest, one over the other.",
        "Press down hard and fast (100-120 compressions per minute).",
        "After every 30 compressions, give 2 rescue breaths.",
      ],
    },
    {
      title: "Bleeding Control",
      description: "Helps stop excessive blood loss in an emergency.",
      steps: [
        "Apply direct pressure with a clean cloth or bandage.",
        "Elevate the injured area if possible.",
        "Apply more bandages if bleeding doesn’t stop.",
        "Seek medical help immediately if the bleeding is severe.",
      ],
    },
    {
      title: "Choking First Aid",
      description: "Used to clear a blocked airway when a person is choking.",
      steps: [
        "Stand behind the person and wrap your arms around their waist.",
        "Make a fist and place it above their belly button.",
        "Give quick, inward, and upward thrusts until the object is expelled.",
        "If the person is unconscious, start CPR immediately.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Hero Section */}
      <div className="text-center bg-green-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-green-700">Emergency First Aid Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Learn how to respond to medical emergencies with essential first aid techniques.
        </p>
      </div>

      {/* First Aid Topics */}
      <div className="space-y-6">
        {firstAidTopics.map((topic, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader onClick={() => setExpanded(expanded === index ? null : index)} className="cursor-pointer">
              <CardTitle className="text-green-700 text-xl flex justify-between">
                {topic.title}
                <span>{expanded === index ? "−" : "+"}</span>
              </CardTitle>
            </CardHeader>
            {expanded === index && (
              <CardContent className="text-gray-600 space-y-2">
                <p>{topic.description}</p>
                <ul className="list-disc ml-6">
                  {topic.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

       {/* Emergency Info Message Instead of Button */}
       <div className="text-center mt-6 p-4 bg-green-100 rounded-lg">
        <p className="text-green-700 font-semibold">
          If you don’t find the necessary help, please call <a href="tel:112" className="font-bold">112</a> immediately.
        </p>
      </div>
    </div>
  );
}
