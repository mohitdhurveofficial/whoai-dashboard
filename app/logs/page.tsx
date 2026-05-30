import { getLogs } from "@/lib/api";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default async function LogsPage() {
  const logs = await getLogs().catch(() => []);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f5ef]">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto texture relative">
          <main className="p-6 md:p-10 max-w-[1440px] mx-auto space-y-8 pb-20">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-black tracking-tight text-slate-900">
                Runtime Logs
              </h1>
              <p className="text-slate-500 font-medium mt-2 text-[15px]">
                Raw execution logs from AI agent actions and enterprise guardrails.
              </p>
            </div>

            <div className="premium-panel glass rounded-[32px] p-6 shadow-premium overflow-hidden">
              <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto shadow-inner ring-1 ring-slate-800">
                <pre className="text-[13px] text-emerald-400 font-mono leading-relaxed">
                  {JSON.stringify(logs, null, 2)}
                </pre>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}