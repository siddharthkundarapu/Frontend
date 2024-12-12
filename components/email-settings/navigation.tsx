"use client";

import { Settings, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  return (
    <div className="flex gap-6 mb-8 border-b border-border">
      <button className="flex items-center gap-2 pb-2 border-b-2 border-primary">
        <Settings className="w-4 h-4" />
        <span>General</span>
      </button>
      <button className="flex items-center gap-2 pb-2 text-muted-foreground">
        <Users className="w-4 h-4" />
        <span>Blocklist</span>
        <Badge variant="secondary" className="ml-1">12</Badge>
      </button>
    </div>
  );
}