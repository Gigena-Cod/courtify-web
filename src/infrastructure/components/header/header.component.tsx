"use client";

import { Link } from "@/infrastructure/libs/i18n/navigation";
import { HeaderProps } from "./types";

export default function Header(headerProps: HeaderProps) {
  const { active } = headerProps;

  const itemBase =
    "flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium";

  const itemActive =
    "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary shadow-[0_0_15px_rgba(19,91,236,0.3)] text-white text-sm font-medium transition-all group";

  return (
    <nav className="shrink-0 z-50 w-full bg-surface-dark border-b border-white/5 px-6 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-xl">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: 28 }}
          >
            sports_tennis
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight leading-none">
            ProClub<span className="text-primary">.</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-medium tracking-wide">
            PREMIUM BOOKING
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5">
        <Link
          className={active === "dashboard" ? itemActive : itemBase}
          href="/dashboard"
        >
          <span className="material-symbols-outlined text-[20px]">
            dashboard
          </span>
          <span>Dashboard</span>
        </Link>

        <Link
          className={active === "schedule" ? itemActive : itemBase}
          href="/schedule"
        >
          <span className="material-symbols-outlined text-[20px]">
            calendar_month
          </span>
          <span>Schedule</span>
        </Link>

        <Link
          className={active === "contacts" ? itemActive : itemBase}
          href="/contacts"
        >
          <span className="material-symbols-outlined text-[20px]">groups</span>
          <span>Contacts</span>
        </Link>

        <Link
          className={active === "financy" ? itemActive : itemBase}
          href="/financy"
        >
          <span className="material-symbols-outlined text-[20px]">
            credit_card
          </span>
          <span>Financy</span>
        </Link>

        <Link
          className={active === "users" ? itemActive : itemBase}
          href="/users"
        >
          <span className="material-symbols-outlined text-[20px]">
            manage_accounts
          </span>
          <span>Users</span>
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer group">
          <button className="flex items-center justify-center size-10 rounded-full bg-background-dark border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all text-slate-300 group-hover:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-surface-dark shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
        </div>
        <div className="h-8 w-px bg-white/10"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-1.5 pr-4 rounded-full transition-colors border border-transparent hover:border-white/5">
          <div className="relative">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-white/10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBba4uFNmmUDkemYFciINagEJkqHRtNjeyT3ClmqXkyHagJJl3O4NnCfSqH63rG6gjLmkMcfsfpJmq5nUNvxYQ1BJW5mXyiNnoy4rxqcDtB1IyE5ymjZz-sGzh3g2t9L9PVNW-24y1mSEwVJ9nhINhWTxsPzqL4z96EVt4PqiofwE8biJ_BXyezgIUURHZ0SXbD0FSO92uFHaxvqHk7G0DVAt2YpLiEVyk2hPPbVlTfL64T_lm4BZo5VBb9HzDtkQmWPnFthbXS6A')",
              }}
            ></div>
            <div className="absolute bottom-0 right-0 size-2.5 bg-[#0bda5e] rounded-full border-2 border-surface-dark"></div>
          </div>
          <div className="hidden md:flex flex-col">
            <p className="text-white text-sm font-bold leading-none">
              Alex Morgan
            </p>
            <p className="text-slate-400 text-[10px] mt-1 leading-none uppercase tracking-wide">
              Pro Member
            </p>
          </div>
          <span className="material-symbols-outlined text-slate-500 text-sm">
            expand_more
          </span>
        </div>
      </div>
    </nav>
  );
}
