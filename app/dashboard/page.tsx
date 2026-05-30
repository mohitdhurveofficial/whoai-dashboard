import {
  getOverview,
  getDoctor,
  getDecisions,
  getRecentActivity,
  getDecisionAnalytics,
  getRiskAnalytics,
} from "@/lib/api";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import KpiCard from "@/app/components/KpiCard";
import DecisionTable from "@/app/components/DecisionTable";

export default async function DashboardPage() {
  const overview = await getOverview();
  const doctor = await getDoctor();
  const decisions = await getDecisions();
  const activity = await getRecentActivity();
  const decisionAnalytics = await getDecisionAnalytics();
  const riskAnalytics = await getRiskAnalytics();

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f5ef]">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto texture relative">
          <main className="p-6 md:p-10 max-w-[1440px] mx-auto space-y-8 pb-20">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-black tracking-tight text-slate-900">
                WhoAI Governance Dashboard
              </h1>
              <p className="text-slate-500 font-medium mt-2 text-[15px]">
                High-level overview of enterprise AI policies and agent activity.
              </p>
            </div>

            {/* Core KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <KpiCard title="Agents" value={overview.agents} />
              <KpiCard title="Policies" value={overview.policies} />
              <KpiCard title="API Keys" value={overview.api_keys} />
              <KpiCard title="Risk Score" value={overview.risk_score} />
            </div>

            {/* Decision Analytics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <KpiCard
                title="Total Decisions"
                value={decisionAnalytics.total_decisions}
              />
              <KpiCard
                title="Approved"
                value={decisionAnalytics.approved}
              />
              <KpiCard
                title="Approval Required"
                value={decisionAnalytics.approval_required}
              />
              <KpiCard
                title="Approval Rate %"
                value={decisionAnalytics.approval_rate}
              />
            </div>

            {/* Risk Analytics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <KpiCard
                title="Low Risk"
                value={riskAnalytics.low_risk}
              />
              <KpiCard
                title="Medium Risk"
                value={riskAnalytics.medium_risk}
              />
              <KpiCard
                title="High Risk"
                value={riskAnalytics.high_risk}
              />
              <KpiCard
                title="Approval Required"
                value={riskAnalytics.approval_required}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* System Health */}
              <div className="premium-panel glass p-6 rounded-3xl mb-8">
                <h2 className="text-xl font-black tracking-tight text-slate-900 mb-6">
                  System Health
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/50 p-4 rounded-2xl ring-1 ring-black/5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Health Score</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{doctor.health_score}</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-2xl ring-1 ring-black/5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Security Score</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{doctor.security_score}</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-2xl ring-1 ring-black/5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Policy Coverage</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{doctor.policy_coverage}</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-2xl ring-1 ring-black/5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Readiness Score</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{doctor.readiness_score}</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="premium-panel glass p-6 rounded-3xl mb-8">
                <h2 className="text-xl font-black tracking-tight text-slate-900 mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-6 overflow-y-auto max-h-[300px] pr-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-700 mb-3 border-b border-black/5 pb-2">Decisions</h3>
                    {activity.recent_decisions?.map((item) => (
                      <div key={item.id} className="bg-white/60 rounded-xl p-4 mb-3 ring-1 ring-black/5 shadow-sm">
                        <p className="font-bold text-sm text-slate-900">{item.decision}</p>
                        <p className="text-[13px] text-slate-500 mt-1">{item.reason}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-700 mb-3 border-b border-black/5 pb-2">Approvals</h3>
                    {activity.recent_approvals?.map((item) => (
                      <div key={item.id} className="bg-white/60 rounded-xl p-3 mb-3 ring-1 ring-black/5 shadow-sm">
                        <p className="font-bold text-sm text-slate-900 capitalize">{item.status}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-700 mb-3 border-b border-black/5 pb-2">Agents</h3>
                    {activity.recent_agents?.map((item) => (
                      <div key={item.id} className="bg-white/60 rounded-xl p-4 mb-3 ring-1 ring-black/5 shadow-sm">
                        <p className="font-bold text-sm text-slate-900">{item.name}</p>
                        <p className="text-[13px] text-slate-500 mt-1 capitalize">{item.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Decisions */}
            <div className="premium-panel glass p-6 rounded-3xl">
              <h2 className="text-xl font-black tracking-tight text-slate-900 mb-6">
                Recent Decisions
              </h2>
              <div className="ring-1 ring-black/5 rounded-2xl overflow-hidden bg-white/50">
                <DecisionTable decisions={decisions} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
