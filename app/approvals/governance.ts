export type RiskLevel = "Low" | "Medium" | "High" | "Critical";
export type ApprovalStatus = "Pending" | "Approved" | "Rejected" | "Escalated";
export type AgentStatus = "Active" | "Inactive" | "Quarantined";

export interface Agent {
  id: string;
  name: string;
  owner: string;
  purpose: string;
  status: AgentStatus;
  riskLevel: RiskLevel;
  lastActivity: string; // ISO Date string
  complianceScore: number;
}

export interface Decision {
  id: string;
  agentId: string;
  timestamp: string; // ISO Date string
  action: string;
  description: string;
  riskScore: number; // 0-100
  confidenceScore: number; // 0-100
  policyImpact: string[];
  approvalStatus: ApprovalStatus;
}

export interface Approval {
  id: string;
  decisionId: string;
  requestedAt: string; // ISO Date string
  reviewedAt?: string; // ISO Date string
  reviewedBy?: string;
  status: ApprovalStatus;
  justification?: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  actor: "System" | "User" | "Agent";
  actorId: string;
  actionCategory: "Decision" | "Approval" | "PolicyChange" | "SystemEvent";
  description: string;
  metadata: Record<string, unknown>;
}

export interface RiskEvent {
  id: string;
  timestamp: string;
  agentId: string;
  severity: RiskLevel;
  type: "PolicyViolation" | "ComplianceBreach" | "SuspiciousBehavior" | "Escalation";
  description: string;
  resolved: boolean;
}