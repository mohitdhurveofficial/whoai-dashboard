"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  Database,
  Bot,
  FileSignature,
  AlertTriangle,
  ShieldCheck,
  BarChart2,
  Settings,
  Fingerprint,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Approval Center", href: "/approvals", icon: CheckSquare },
  { name: "Decision Registry", href: "/decisions", icon: Database },
  { name: "Agent Registry", href: "/agents", icon: Bot },
  { name: "Audit Trail", href: "/audit", icon: FileSignature },
  { name: "Risk Center", href: "/risk", icon: AlertTriangle },
  { name: "Compliance Center", href: "/compliance", icon: ShieldCheck },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-black/5 bg-white/60 backdrop-blur-xl">
      {/* Logo Area */}
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
          <Fingerprint className="h-6 w-6 text-indigo-600" />
          <span className="text-lg">WHOAI</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        <div className="mb-4 px-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Governance
        </div>
        {navigation.map((item) => {
        const isActive = pathname?.startsWith(item.href) ?? false;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-50/50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-900"
              }`}
            >
              <item.icon
                className={`h-4 w-4 shrink-0 ${
                  isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-black/5 p-4">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50/80 hover:text-slate-900"
          >
            <item.icon className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-600" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}