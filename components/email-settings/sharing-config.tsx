"use client";

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

export function SharingConfig() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Default sharing configuration</h2>
      <RadioGroup defaultValue="full" className="space-y-3">
        <Card className="flex items-center gap-4 p-4 cursor-pointer hover:bg-accent/50">
          <RadioGroupItem value="metadata" id="metadata" />
          <div className="flex-1">
            <label htmlFor="metadata" className="font-medium cursor-pointer">
              Metadata only
            </label>
            <p className="text-sm text-muted-foreground">
              Only subject lines will be visible to anyone on your workspace
            </p>
          </div>
        </Card>

        <Card className="flex items-center gap-4 p-4 cursor-pointer hover:bg-accent/50">
          <RadioGroupItem value="subject" id="subject" />
          <div className="flex-1">
            <label htmlFor="subject" className="font-medium cursor-pointer">
              Subject line and metadata
            </label>
            <p className="text-sm text-muted-foreground">
              We'll share the subject, participants and timestamp with anyone in your workspace
            </p>
          </div>
        </Card>

        <Card className="flex items-center gap-4 p-4 cursor-pointer hover:bg-accent/50 border-primary">
          <RadioGroupItem value="full" id="full" />
          <div className="flex-1">
            <label htmlFor="full" className="font-medium cursor-pointer flex items-center gap-2">
              Full access
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500">Plus</Badge>
            </label>
            <p className="text-sm text-muted-foreground">
              Everything is shared with your workspace members (including the body, subject line, attachments)
            </p>
          </div>
        </Card>
      </RadioGroup>
    </section>
  );
}