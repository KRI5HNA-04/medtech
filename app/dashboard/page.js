"use client";
import Link from "next/link";
import {
  Play,
  Activity,
  Calendar,
  FileText,
  TrendingUp,
  User,
  LogOut,
  Home,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. TOP NAVIGATION */}
      <nav className="bg-white px-8 py-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
        {/* ADDED: Link wrapping the Logo to go back to Landing Page */}
        <Link
          href="/"
          className="flex items-center gap-2 text-teal-700 font-bold text-xl hover:opacity-80 transition cursor-pointer"
        >
          <Activity className="text-mint-500" />
          <span>RehabAI</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-navy-900">Krishna</p>
            <p className="text-xs text-slate-500">Patient Profile</p>
          </div>
          <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center text-mint-600 border border-mint-200">
            <User size={20} />
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* 2. WELCOME SECTION */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">
              Good Morning, Krishna
            </h1>
            <p className="text-slate-500">
              Ready for your daily recovery session?
            </p>
          </div>
          {/* Optional: Simple "Back Home" text link if the logo isn't obvious enough */}
          <Link
            href="/"
            className="text-slate-400 hover:text-teal-600 text-sm font-medium md:hidden flex items-center gap-1"
          >
            <Home size={14} /> Home
          </Link>
        </div>

        {/* 3. CORE METRICS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card A: Daily Goal */}
          <div className="col-span-2 bg-gradient-to-br from-teal-600 to-teal-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-lg shadow-teal-100">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Calendar size={14} /> Today's Goal
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Finger Flex & Extension
              </h2>
              <p className="text-teal-100 mb-8 max-w-md">
                10 minutes • Focus on smooth motion
              </p>

              <Link
                href="/exercise"
                className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:bg-mint-50 transition shadow-md"
              >
                <Play fill="currentColor" size={18} /> Start Session
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <Activity size={300} />
            </div>
          </div>

          {/* Card B: Weekly Progress Ring */}
          <div className="bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center shadow-sm border border-slate-100 text-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-slate-100"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray="351"
                  strokeDashoffset="70"
                  className="text-mint-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-navy-900">80%</span>
              </div>
            </div>
            <p className="font-bold text-navy-900">Weekly Completion</p>
            <p className="text-sm text-slate-400">4 of 5 sessions done</p>
          </div>
        </div>

        {/* 4. QUICK ACTIONS GRID */}
        <h3 className="text-xl font-bold text-navy-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition text-left group">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <TrendingUp size={24} />
            </div>
            <span className="font-bold text-slate-700 block">
              View Progress
            </span>
          </button>

          <button className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition text-left group">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FileText size={24} />
            </div>
            <span className="font-bold text-slate-700 block">Doctor Notes</span>
          </button>

          <button className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition text-left group">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Activity size={24} />
            </div>
            <span className="font-bold text-slate-700 block">
              Past Exercises
            </span>
          </button>

          {/* LOG OUT BUTTON (Already links to "/", but good to double check) */}
          <Link
            href="/"
            className="bg-slate-100 p-6 rounded-3xl border border-slate-200 shadow-sm hover:bg-slate-200 transition text-left group"
          >
            <div className="w-12 h-12 bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <LogOut size={24} />
            </div>
            <span className="font-bold text-slate-600 block">Log Out</span>
          </Link>
        </div>

        {/* 5. DOCTOR NOTES / RECS */}
        <div className="mt-10 bg-mint-50 border border-mint-100 rounded-3xl p-8 flex gap-6 items-start">
          <div className="bg-white p-3 rounded-full text-mint-600 shadow-sm hidden md:block">
            <FileText size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-navy-900 mb-2">
              Latest Recommendation from Dr. Sarah
            </h4>
            <p className="text-slate-600 leading-relaxed">
              "Your finger extension is improving nicely! I've increased the
              duration of your morning set. Try to keep your hand steady during
              the 'Open Palm' hold."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
