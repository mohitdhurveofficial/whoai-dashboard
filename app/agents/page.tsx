"use client";

import { useState } from "react";
import AppShell from "@/app/components/AppShell";
import { PageHeader } from "@/app/components/ui/PageHeader";
import { StatusBadge } from "@/app/components/ui/StatusBadge";
import { Plus, Lock, Zap } from "lucide-react";

type AIWorker = {
  id: string;
  name: string;
  role: string;
  department: string;
  owner: string;
  status: "ACTIVE" | "PAUSED" | "ARCHIVED";
  riskScore: number;
  permissions: number;
  decisionsToday: number;
};

const workers: AIWorker[] = [
  {
    id: "worker-1",
    name: "Payments Agent",
    role: "Financial Operations",
    department: "Finance",
    owner: "Sarah Anderson",
    status: "ACTIVE",
    riskScore: 45,
    permissions: 8,
    decisionsToday: 127,
  },
  {
    id: "worker-2",
    name: "Data Privacy Agent",
    role: "Compliance & Privacy",
    department: "Legal",
    owner: "Michael Chen",
    status: "ACTIVE",
    riskScore: 22,
    permissions: 5,
    decisionsToday: 42,
  },
  {
    id: "worker-3",
    name: "Analytics Engine",
    role: "Business Intelligence",
    department: "Analytics",
    owner: "Emma Rodriguez",
    status: "ACTIVE",
    riskScore: 18,
    permissions: 12,
    decisionsToday: 89,
  },
  {
    id: "worker-4",
    name: "Support Bot",
    role: "Customer Support",
    department: "Support",
    owner: "James Wilson",
    status: "ACTIVE",
    riskScore: 31,
    permissions: 6,
    decisionsToday: 204,
  },
];

const permissions = [
  { id: "perm-1", name: "Read CRM", resource: "CRM", action: "READ" },
  { id: "perm-2", name: "Send Emails", resource: "EMAIL", action: "WRITE" },
  { id: "perm-3", name: "Access Customer Data", resource: "CUSTOMER_DATA", action: "READ" },
  { id: "perm-4", name: "Execute Payments", resource: "PAYMENTS", action: "EXECUTE" },
  { id: "perm-5", name: "Modify Systems", resource: "PRODUCTION", action: "WRITE" },
  { id: "perm-6", name: "Access Logs", resource: "AUDIT_LOGS", action: "READ" },
];

export default function AIWorkforcePage() {
  const [selectedWorker, setSelectedWorker] = useState(workers[0]);
  const workerPermissions = permissions.slice(0, selectedWorker.permissions);

  return (
    <AppShell
      title="AI workforce management"
      description="Manage autonomous AI workers with identity, permissions, monitoring, and governance controls."
    >
      <PageHeader
        title="AI Workforce"
        description="Command center for deploying, monitoring, and controlling your organization's AI workers."
      />

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.85fr]">
        {/* Workers List */}
        <section className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Workforce</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">Active AI workers</h2>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">
              <Plus className="h-4 w-4" />
              Deploy worker
            </button>
          </div>

          <div className="space-y-3">
            {workers.map((worker) => (
              <button
                key={worker.id}
                onClick={() => setSelectedWorker(worker)}
                className={`w-full rounded-3xl border p-4 text-left transition ${
                  worker.id === selectedWorker.id
                    ? "border-sky-500 bg-sky-50"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-950">{worker.name}</p>
                    <p className="text-sm text-slate-600">{worker.role}</p>
                  </div>
                  <StatusBadge label="Active" variant="approved" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-2xl bg-slate-100 px-2 py-1">
                    <p className="text-slate-600">Risk: {worker.riskScore}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 px-2 py-1">
                    <p className="text-slate-600">Perms: {worker.permissions}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 px-2 py-1">
                    <p className="text-slate-600">Today: {worker.decisionsToday}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Worker Details */}
        <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Worker ID</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">{selectedWorker.name}</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Department</p>
              <p className="mt-2 font-semibold text-slate-950">{selectedWorker.department}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Owner</p>
              <p className="mt-2 font-semibold text-slate-950">{selectedWorker.owner}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Risk Score</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-sky-500"
                    style={{ width: `${selectedWorker.riskScore}%` }}
                  ></div>
                </div>
                <span className="font-semibold text-slate-950">{selectedWorker.riskScore}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                <Lock className="h-4 w-4" />
                Manage identity
              </button>
              <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                <Zap className="h-4 w-4" />
                View permissions
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Permissions Matrix */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Permissions</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{selectedWorker.name} access controls</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Permission</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Resource</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Action</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {workerPermissions.map((perm, idx) => (
                <tr key={perm.id} className={idx !== workerPermissions.length - 1 ? "border-b border-slate-100" : ""}>
                  <td className="px-4 py-3 text-sm font-medium text-slate-950">{perm.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{perm.resource}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{perm.action}</td>
                  <td className="px-4 py-3">
                    <StatusBadge label="Granted" variant="approved" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
