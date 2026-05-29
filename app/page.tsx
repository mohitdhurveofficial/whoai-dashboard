import Link from "next/link";
import {
  Shield,
  CheckCircle,
  Brain,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="texture min-h-screen bg-[#F7F3EE]">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-full px-6 md:px-8 py-4 shadow-lg flex items-center justify-between">

            <h1 className="font-black text-2xl">
              WhoAI
            </h1>

            <div className="hidden md:flex gap-8 font-medium">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>

            <Link
              href="/dashboard"
              className="
                bg-black
                text-white
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition-all
              "
            >
              Dashboard
            </Link>

          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-40 overflow-hidden">

        {/* Background Artwork */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-20 right-[-120px] w-[600px] h-[600px] rounded-full border border-black/10" />

          <div className="absolute top-40 right-[60px] w-[420px] h-[420px] rounded-full border border-black/10" />

          <div className="absolute top-[120px] right-[180px] w-[250px] h-[250px] rounded-full bg-black/5 backdrop-blur-3xl" />

        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex px-5 py-2 bg-white rounded-full shadow mb-8">
              Runtime Governance Platform
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              Govern
              <br />
              Autonomous
              <br />
              AI
            </h1>

            <p className="text-xl text-gray-600 mt-8 max-w-xl">
              Enterprise runtime governance platform
              for AI agents, approvals, policies,
              audits and risk management.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/dashboard"
                className="
                  bg-black
                  text-white
                  px-8
                  py-4
                  rounded-full
                  hover:scale-105
                  transition-all
                  shadow-xl
                "
              >
                Launch Dashboard
              </Link>

              <button
                className="
                  bg-white
                  px-8
                  py-4
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  transition-all
                "
              >
                Book Demo
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[600px] hidden lg:block">

            <div className="absolute right-0 top-0 w-[520px] h-[520px] rounded-full border border-black/10" />

            <div className="absolute right-[70px] top-[70px] w-[380px] h-[380px] rounded-full border border-black/10" />

            <div className="absolute right-[140px] top-[140px] w-[240px] h-[240px] rounded-full bg-black opacity-5" />

            <div className="absolute left-0 top-20 bg-white rounded-3xl shadow-2xl p-6 w-64">

              <p className="text-sm text-gray-500">
                Risk Analysis
              </p>

              <h3 className="text-6xl font-black mt-2">
                97
              </h3>

              <p className="text-green-600 mt-2">
                +12% this week
              </p>

            </div>

            <div className="absolute right-0 bottom-24 bg-white rounded-3xl shadow-2xl p-6 w-72">

              <p className="font-semibold">
                Refund Request
              </p>

              <p className="text-orange-500 mt-2">
                Approval Required
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GOVERNANCE FLOW */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <div className="bg-white rounded-[40px] shadow-xl p-12">

          <h2 className="text-4xl font-bold text-center mb-16">
            Governance Flow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            <div className="bg-slate-50 p-6 rounded-2xl">
              <Brain size={40} />
              <h3 className="font-bold mt-4">AI Agent</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <Shield size={40} />
              <h3 className="font-bold mt-4">Policy Engine</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <Lock size={40} />
              <h3 className="font-bold mt-4">Risk Detection</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <CheckCircle size={40} />
              <h3 className="font-bold mt-4">Human Approval</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <ArrowRight size={40} />
              <h3 className="font-bold mt-4">Execute</h3>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 md:px-8 mb-32"
      >
        <h2 className="text-5xl font-bold text-center mb-16">
          Enterprise AI Governance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Runtime Policies
            </h3>

            <p>
              Define governance rules for autonomous AI agents.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Human-in-the-Loop
            </h3>

            <p>
              Require approval for high-risk decisions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Audit Trails
            </h3>

            <p>
              Track every decision with full traceability.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 md:px-8 mb-32"
      >
        <div className="bg-white rounded-[40px] shadow-xl p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's Talk AI Governance
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Deploy governance, approvals,
            audit trails and runtime security
            for autonomous AI agents.
          </p>

          <a
            href="mailto:hello@whoai.ai"
            className="
              inline-block
              bg-black
              text-white
              px-8
              py-4
              rounded-full
            "
          >
            Contact Sales
          </a>

        </div>
      </section>

      {/* CTA */}

      <section className="pb-32 px-6 md:px-8">

        <div className="max-w-5xl mx-auto bg-black text-white rounded-[40px] p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Govern AI Before AI Governs You
          </h2>

          <Link
            href="/dashboard"
            className="
              inline-block
              mt-6
              bg-white
              text-black
              px-8
              py-4
              rounded-full
            "
          >
            Start Now
          </Link>

        </div>

      </section>

    </div>
  );
}