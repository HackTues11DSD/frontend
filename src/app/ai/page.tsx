"use client";

import * as React from "react";
import Component from "@/components/navigation_bar";

export default function Page() {
  return (
    <div>
      <Component />
      <div style={{ width: "100%", height: "90vh" }}>
        <iframe
          src="http://localhost:8030"
          title="Chat Interface"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}
