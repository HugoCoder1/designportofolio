import Transition from "@/components/Transition";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <Transition>{children}</Transition>;
}
