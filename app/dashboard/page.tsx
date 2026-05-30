import { metrics } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-zinc-400">
          AI Governance Dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border rounded-xl p-4">
          <div className="text-sm text-zinc-500">
            Pending Reviews
          </div>
          <div className="text-3xl font-bold">
            {metrics.pending}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-sm text-zinc-500">
            Approved Today
          </div>
          <div className="text-3xl font-bold">
            {metrics.approvedToday}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-sm text-zinc-500">
            Rejected Today
          </div>
          <div className="text-3xl font-bold">
            {metrics.rejectedToday}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-sm text-zinc-500">
            Avg Review Time
          </div>
          <div className="text-3xl font-bold">
            {metrics.averageReviewTime}
          </div>
        </div>
      </div>
    </div>
  );
}