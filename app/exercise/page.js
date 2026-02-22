"use client";
import { useState } from "react";
import HandTracker from "../../components/exercise/handtracker";
import { saveExerciseSession } from "@/services/api";
import Link from "next/link";

export default function ExercisePage() {
  const [feedback, setFeedback] = useState("Align your hand");
  const [isSaving, setIsSaving] = useState(false);

  const handleFinish = async () => {
    setIsSaving(true);
    // Mock sending data
    await saveExerciseSession({
      exercise: "Finger Flex",
      duration: 120,
      result: "Good",
    });
    setIsSaving(false);
    alert("Session Saved! (Simulated)");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center p-6">
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Finger Flexion</h1>
        <Link
          href="/"
          className="px-4 py-2 text-slate-500 hover:bg-slate-200 rounded-lg"
        >
          Back Home
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left: AI Camera */}
        <div className="flex-1">
          <HandTracker onFeedbackUpdate={setFeedback} />
        </div>

        {/* Right: Controls */}
        <div className="w-full md:w-80 space-y-4">
          {/* Status Card */}
          <div
            className={`p-6 rounded-2xl border-l-8 shadow-sm transition-colors duration-300
            ${feedback.includes("Open") ? "bg-green-50 border-green-500" : "bg-blue-50 border-blue-500"}`}
          >
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Current Status
            </h2>
            <p className="text-3xl font-bold text-slate-800 mt-1">{feedback}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-700 mb-2">Instructions</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Raise your hand to the camera.</li>
              <li>Squeeze into a fist.</li>
              <li>Open your hand wide.</li>
            </ul>
          </div>

          <button
            onClick={handleFinish}
            disabled={isSaving}
            className={`w-full py-4 text-white rounded-xl text-xl font-semibold shadow-md transition-all
              ${isSaving ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"}`}
          >
            {isSaving ? "Saving..." : "Finish Exercise"}
          </button>
        </div>
      </div>
    </main>
  );
}
