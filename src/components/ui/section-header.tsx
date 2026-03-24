import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12",
        centered ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-primary max-w-3xl text-balance">
        {title}
      </h2>
      <div className={cn("h-1.5 w-20 bg-linear-to-r from-primary to-secondary rounded-full mt-6", centered ? "mx-auto" : "")} />
    </div>
  );
}
