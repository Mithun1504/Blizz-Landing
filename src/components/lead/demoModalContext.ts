import { createContext, useContext } from "react";

export type DemoModalContextValue = {
  openDemoModal: () => void;
};

export const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) throw new Error("useDemoModal must be used within ScheduleDemoProvider");
  return context;
}
