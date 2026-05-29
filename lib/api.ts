const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://whoai-api.onrender.com";

export type Agent = {
  id: number;
  name: string;
  owner_email: string;
  environment: string;
  agent_token: string;
  status: "active" | "disabled";
  created_at: string;
};

export type Approval = {
  id: number;
  agent_id: number;
  action_type: string;
  resource_json: string;
  context_json: string;
  policy_id: number | null;
  status: "pending" | "approved" | "rejected";
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
};

export type Decision = {
  id: number;
  agent_id: number;
  action_type: string;
  resource_json: string;
  context_json: string;
  decision: string;
  reason: string;
  policy_id: number | null;
  created_at: string;
};

export type DashboardOverview = {
  agents: number;
  policies: number;
  api_keys: number;
  risk_score: number;
};

export type DoctorReport = {
  health_score: number;
  security_score: number;
  policy_coverage: number;
  readiness_score: number;
};

export type RecentActivity = {
  recent_decisions?: Decision[];
  recent_approvals?: Approval[];
  recent_agents?: Agent[];
};

export type DecisionAnalytics = {
  total_decisions: number;
  approved: number;
  approval_required: number;
  approval_rate: number;
};

export type RiskAnalytics = {
  low_risk: number;
  medium_risk: number;
  high_risk: number;
  approval_required: number;
};

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getOverview() {
  return fetchJson<DashboardOverview>("/api/v1/dashboard/overview");
}

export async function getDoctor() {
  return fetchJson<DoctorReport>("/api/v1/doctor/report");
}

export async function getAgents() {
  return fetchJson<Agent[]>("/api/v1/agents");
}

export async function getPolicies() {
  return fetchJson("/api/v1/policies");
}

export async function getApprovals() {
  return fetchJson<Approval[]>("/api/v1/approvals");
}

export async function getDecisions() {
  return fetchJson<Decision[]>("/api/v1/decisions");
}

export async function getMetrics() {
  return fetchJson("/api/v1/metrics");
}

export async function getLogs() {
  return fetchJson("/api/v1/logs");
}

export async function getRecentActivity() {
  return fetchJson<RecentActivity>("/api/v1/dashboard/recent-activity");
}

export async function getSystemHealth() {
  return fetchJson("/api/v1/system/health");
}

export async function getSystemReadiness() {
  return fetchJson("/api/v1/system/readiness");
}

export async function getSystemDiagnostics() {
  return fetchJson("/api/v1/system/diagnostics");
}

export async function getDecisionAnalytics() {
  return fetchJson<DecisionAnalytics>("/api/v1/analytics/decisions");
}

export async function getRiskAnalytics() {
  return fetchJson<RiskAnalytics>("/api/v1/analytics/risk");
}
export async function updateApproval(
  approvalId: number,
  status: Approval["status"]
) {
  const response = await fetch(
    `${API_URL}/api/v1/approvals/${approvalId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        approved_by: "mohit",
      }),
    }
  );

  return response.json() as Promise<Approval>;
}
