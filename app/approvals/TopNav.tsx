"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-black/5 bg-white/60 px-6 backdrop-blur-xl">
      {/* Global Search */}
      <div className="flex flex-1 items-center">
        <div className="w-full max-w-md">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search agents, decisions, or audit logs..."
              className="h-9 w-full rounded-md border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Organization Switcher */}
        <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-hover hover:bg-slate-50">
          <div className="h-5 w-5 rounded bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center">
            AC
          </div>
          <span>Acme Corp</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>

        {/* Notifications */}
        <button className="relative rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-500">
          <span className="sr-only">View notifications</span>
          <Bell className="h-5 w-5" />
          {/* Notification Badge */}
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white"></span>
        </button>

        {/* User Menu */}
        <div className="h-8 w-8 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=chief-ai-officer&backgroundColor=f8fafc"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}