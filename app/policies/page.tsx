import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function PoliciesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f5ef]">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto texture relative">
          <main className="p-6 md:p-10 max-w-[1440px] mx-auto space-y-8 pb-20">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-black tracking-tight text-slate-900">
                Enterprise Policies
              </h1>
              <p className="text-slate-500 font-medium mt-2 text-[15px]">
                Define and enforce rules across your autonomous AI agents.
              </p>
            </div>

            <div className="premium-panel glass rounded-[32px] p-12 text-center shadow-sm ring-1 ring-black/5">
              <p className="text-slate-500 font-bold">Policy management interface coming soon.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}