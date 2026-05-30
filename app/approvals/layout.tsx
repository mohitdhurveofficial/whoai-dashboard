import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-[#fbfbfd] text-slate-900 font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden relative">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}