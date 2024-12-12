"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <>
      <nav className="mb-8">
        <ul className="flex gap-4 text-sm text-muted-foreground">
          <li>Account</li>
          <li><span className="text-foreground">Emails & Calendar</span></li>
          <li>julian@attio.com</li>
        </ul>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <Avatar className="h-8 w-8">
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=JA" alt="User" />
        </Avatar>
        <h1 className="text-xl font-semibold">julian@attio.com</h1>
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500">
          In Sync
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        Update your inbox permissions and settings.{" "}
        <a href="#" className="text-primary hover:underline">Learn more</a>
      </p>
    </>
  );
}