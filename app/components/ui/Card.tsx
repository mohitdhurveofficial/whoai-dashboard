import React from "react";
import { tokens } from "./tokens";

export function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`${tokens.layout.card} ${className}`}>
      {children}
    </div>
  );
}