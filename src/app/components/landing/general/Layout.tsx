"use client";

import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { Toaster } from "../../ui/toaster";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
      <Sonner />
      <Toaster />
    </div>
  );
}
