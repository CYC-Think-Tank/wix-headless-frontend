"use client";

import { createContext, useContext, ReactNode } from "react";

export type RegistrationSettings = {
  registrationOpen: boolean;
  registrationClosedDate: string | null;
};

const RegistrationContext = createContext<RegistrationSettings | undefined>(undefined);

export function RegistrationProvider({ 
  children, 
  settings 
}: { 
  children: ReactNode; 
  settings: RegistrationSettings 
}) {
  return (
    <RegistrationContext.Provider value={settings}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return context;
}
