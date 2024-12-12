"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UserList() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Individual inbox sharing</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-accent/50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-blue-500">
              <span>JE</span>
            </Avatar>
            <span>Jeremy Enderson</span>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="full">
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full access</SelectItem>
                <SelectItem value="metadata">Metadata only</SelectItem>
                <SelectItem value="subject">Subject line</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">Share access</Button>
          </div>
        </div>

        <div className="px-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-3">
            <span>User</span>
            <span>Access</span>
          </div>
          <div className="space-y-3">
            <UserRow 
              name="Nick Sharp"
              email="nick@attio.com"
              initials="NS"
              avatarColor="bg-purple-500"
              defaultAccess="full"
            />
            <UserRow 
              name="Alex Christie"
              email="alex@attio.com"
              initials="AC"
              avatarColor="bg-amber-500"
              defaultAccess="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UserRow({ name, email, initials, avatarColor, defaultAccess }: {
  name: string;
  email: string;
  initials: string;
  avatarColor: string;
  defaultAccess: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className={`h-8 w-8 ${avatarColor}`}>
          <span>{initials}</span>
        </Avatar>
        <div>
          <div>{name}</div>
          <div className="text-sm text-muted-foreground">{email}</div>
        </div>
      </div>
      <Select defaultValue={defaultAccess}>
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full">Full access</SelectItem>
          <SelectItem value="metadata">Metadata only</SelectItem>
          <SelectItem value="subject">Subject line</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}