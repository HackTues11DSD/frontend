"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function Calendar({
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return <DayPicker showOutsideDays={showOutsideDays} fixedWeeks {...props} />;
}

export { Calendar };
