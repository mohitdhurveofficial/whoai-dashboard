import {
  getOverview,
  getDoctor,
  getDecisions,
  getRecentActivity,
  getDecisionAnalytics,
} from "@/lib/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KpiCard from "../components/KpiCard";
import DecisionTable from "../components/DecisionTable";

export default async function DashboardPage() {
  const overview = await getOverview();
  const doctor = await getDoctor();
  const decisions = await getDecisions();
  const activity = await getRecentActivity();
  const decisionAnalytics = await getDecisionAnalytics();

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-50 min-h-screen">
        <Navbar />

        <main className="p-8">
          <h1 className="text-4xl font-bold mb-8">
            WhoAI Governance Dashboard
          </h1>

          {/* Core KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <KpiCard title="Agents" value={overview.agents} />
            <KpiCard title="Policies" value={overview.policies} />
            <KpiCard title="API Keys" value={overview.api_keys} />
            <KpiCard title="Risk Score" value={overview.risk_score} />
          </div>

          {/* Decision Analytics KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

          {/* System Health */}
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              System Health
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <p>Health Score: {doctor.health_score}</p>
              <p>Security Score: {doctor.security_score}</p>
              <p>Policy Coverage: {doctor.policy_coverage}</p>
              <p>Readiness Score: {doctor.readiness_score}</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">
                  Decisions
                </h3>

                {activity.recent_decisions?.map((item: any) => (
                  <div
                    key={item.id}
                    className="border rounded p-3 mb-2"
                  >
                    <p>{item.decision}</p>

                    <p className="text-sm text-gray-500">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  Approvals
                </h3>

                {activity.recent_approvals?.map((item: any) => (
                  <div
                    key={item.id}
                    className="border rounded p-3 mb-2"
                  >
                    <p>{item.status}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  Agents
                </h3>

                {activity.recent_agents?.map((item: any) => (
                  <div
                    key={item.id}
                    className="border rounded p-3 mb-2"
                  >
                    <p>{item.name}</p>

                    <p className="text-sm text-gray-500">
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Decisions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Decisions
            </h2>

            <DecisionTable decisions={decisions} />
          </div>
        </main>
      </div>
    </div>
  );
}