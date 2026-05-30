export async function getAgents() {
  return [
    {
      id: "agent-1",
      name: "Compliance Agent",
      status: "ACTIVE",
      decisions: 142,
    },
  ];
}

export async function getMetrics() {
  return {
    totalDecisions: 1248,
    approvalRate: 96,
    riskEvents: 8,
    activeAgents: 12,
  };
}

export async function getLogs() {
  return [
    {
      id: "log-1",
      action: "Decision Approved",
      actor: "System",
      timestamp: new Date().toISOString(),
    },
  ];
}

export async function getOverview() {
  return {
    totalAgents: 12,
    totalDecisions: 1248,
    approvalRate: 96,
  };
}

export async function getApprovals() {
  return [];
}

export async function getDecisions() {
  return [];
}

export async function getPolicies() {
  return [];
}

export async function getDoctor() {
  return {
    score: 100,
    status: "Healthy",
  };
}