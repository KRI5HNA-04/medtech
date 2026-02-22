import Link from "next/link";
import {
  Activity,
  Brain,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. NAVBAR */}
      <nav className="w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-mint-500 rounded-full flex items-center justify-center text-white">
            <Activity size={24} />
          </div>
          <span className="text-xl font-bold text-navy-900 tracking-tight">
            RehabAI
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <Link href="#" className="hover:text-mint-500 transition">
            Home
          </Link>
          <Link href="#" className="hover:text-mint-500 transition">
            About
          </Link>
          <Link href="#" className="hover:text-mint-500 transition">
            Doctors
          </Link>
          <Link href="#" className="hover:text-mint-500 transition">
            Contact
          </Link>
        </div>

        <button className="bg-navy-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition">
          Log In
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto bg-mint-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-[1.1]">
                Empowering <br /> Recovery Through <br /> AI Technology
              </h1>
              <p className="text-slate-500 text-lg max-w-md">
                Navigating recovery together. Your trusted home rehabilitation
                resource using advanced computer vision.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/exercise"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200 flex items-center gap-2"
                >
                  Start Recovery <ArrowRight size={20} />
                </Link>
                <button className="bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition shadow-sm border border-slate-200 flex items-center gap-2">
                  <div className="w-8 h-8 bg-mint-100 rounded-full flex items-center justify-center text-mint-500">
                    <Play size={14} fill="currentColor" />
                  </div>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Image Placeholder (Simulating the Doctor Illustration) */}
            <div className="relative h-[400px] w-full bg-mint-100 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex items-end justify-center">
              {/* This simulates the illustration in your image */}
              <div className="absolute inset-0 flex items-center justify-center text-mint-300">
                <Users size={120} opacity={0.5} />
              </div>
              <div className="bg-white/90 backdrop-blur p-4 mb-6 rounded-2xl shadow-lg flex items-center gap-3 z-20 mx-auto">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">
                    Daily Goal
                  </p>
                  <p className="text-sm font-bold text-navy-900">
                    Finger Flex Completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
        </div>
      </section>

      {/* 3. STATS & INFO ROW */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Text */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              Your Bridge to Better Health
            </h3>
            <p className="text-slate-500">
              Start your journey today with AI-guided exercises.
            </p>
            <Link
              href="/login"
              className="text-teal-600 font-bold mt-4 inline-flex items-center gap-1"
            >
              Join Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Clients (Happy Patients) */}
          <div className="bg-slate-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:bg-slate-200 transition cursor-pointer">
            <div className="flex -space-x-4 mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-slate-300 border-4 border-white flex items-center justify-center text-xs font-bold text-slate-500"
                >
                  User
                </div>
              ))}
            </div>
            <h4 className="text-3xl font-bold text-mint-500">12K+</h4>
            <p className="text-navy-900 font-medium">Happy Patients</p>
          </div>

          {/* Card 3: Success Rate */}
          <div className="bg-mint-50 rounded-[2rem] p-8 flex items-center justify-between hover:bg-mint-100 transition cursor-pointer">
            <div>
              <div className="text-3xl font-bold text-navy-900">84%</div>
              <div className="text-slate-600">Recovery Success</div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-teal-500 border-t-transparent flex items-center justify-center rotate-45">
              <Activity className="text-teal-600 -rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (EXERCISES) SECTION */}
      <section className="px-4 md:px-8 py-16 text-center max-w-7xl mx-auto">
        <p className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2">
          Our Exercises
        </p>
        <h2 className="text-4xl font-bold text-navy-900 mb-12">
          Comprehensive Recovery Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Exercise 1 */}
          <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="w-14 h-14 bg-mint-50 rounded-2xl flex items-center justify-center text-mint-500 mb-6 group-hover:bg-mint-500 group-hover:text-white transition">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Hand Therapy
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Camera-based tracking for finger flexion, extension, and grip
              strength exercises.
            </p>
            <Link
              href="/exercise"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-navy-900 hover:text-white transition"
            >
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Exercise 2 */}
          <div className="bg-mint-500 p-8 rounded-[2rem] text-left shadow-lg transform md:-translate-y-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Speech Rehab</h3>
            <p className="text-mint-100 mb-6 leading-relaxed">
              Voice analysis tools to help improve pronunciation, volume, and
              clarity.
            </p>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-mint-500">
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Exercise 3 */}
          <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition">
              <Brain size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Cognitive Drill
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Interactive puzzles and memory games designed to stimulate brain
              recovery.
            </p>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-navy-900 hover:text-white transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
