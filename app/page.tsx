"use client";

import { Header } from "@/components/email-settings/header";
import { Navigation } from "@/components/email-settings/navigation";
import { SharingConfig } from "@/components/email-settings/sharing-config";
import { UserList } from "@/components/email-settings/user-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[900px] mx-auto p-6">
        <Header />
        <Navigation />
        <div className="space-y-8">
          <SharingConfig />
          <UserList />
        </div>
      </div>
    </div>
  );
}