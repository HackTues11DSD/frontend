"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
      <Link href="/home">
        <Button>Return to Main Page</Button>
      </Link>
    </div>
  );
}
