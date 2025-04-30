"use client";

import type React from "react";

import { store } from "@/store/config";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}
