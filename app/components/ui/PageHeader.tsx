import React from "react";
import { tokens } from "./tokens";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, description, actions }: PageHeaderProps) {
  return (
    <div className={`${tokens.layout.pageHeader} flex justify-between items-start`}>
      <div>
        <h1 className={tokens.layout.pageTitle}>{title}</h1>
        ${(subtitle || description) && <p className={tokens.layout.pageSubtitle}>{subtitle || description}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}
