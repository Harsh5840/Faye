import React from "react";
import FeatureCard from "./FeatureCard";

const featureList = [
  {
    icon: "🎙️",
    title: "AI Transcription & Summarization",
    description: "Automatically transcribe your meetings in real-time and generate topic-based summaries powered by GPT."
  },
  {
    icon: "📄",
    title: "Document Upload for Context",
    description: "Upload meeting documents or agendas so the AI assistant can reference them while summarizing or answering questions."
  },
  {
    icon: "🤖",
    title: "Chat with AI During Meeting",
    description: "Ask the AI assistant questions during the meeting for clarifications, note-taking, or quick summaries."
  },
  {
    icon: "⏱️",
    title: "Built-in Pomodoro Timer",
    description: "Use Pomodoro-based timeboxing to stay focused and structure your meetings efficiently."
  },
  {
    icon: "🎥",
    title: "Real-Time Video Meetings",
    description: "Join video calls with WebRTC-based peer-to-peer streaming and familiar controls like mute and video toggle."
  },
  {
    icon: "💬",
    title: "Live Meeting Chat",
    description: "Communicate with other participants via real-time messaging alongside the AI assistant."
  }
];

const Features = () => {
  return (
    <div className="min-h-screen px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">What I Can Do</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {featureList.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
