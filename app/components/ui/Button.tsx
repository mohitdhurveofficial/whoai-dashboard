import React from "react";
import { tokens } from "./tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: React.ElementType;
}

export function Button({ variant = "primary", icon: Icon, children, className = "", ...props }: ButtonProps) {
  const baseClass = "flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  const variantClass = {
    primary: tokens.colors.primaryBg,
    secondary: tokens.colors.secondaryBg,
    danger: "bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 shadow-sm",
    ghost: "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  return (
    <button className={`${baseClass} ${variantClass[variant]} ${className}`} {...props}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}