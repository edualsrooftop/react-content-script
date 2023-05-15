import React from "react";
import { create } from "zustand";

export interface App {
  page: { title: string };
  tooltip: React.ReactDOM | string | null;
  drawer: boolean;
  modal: {
    id: string;
    title?: string;
    description?: string;
    content: React.ReactNode | string;
    isOpen: boolean;
    form?: string;
  } | null;
  closeModal: () => void;
  closeDrawer: () => void;
}

export const useAppStore = create<App>((set, get) => ({
  page: {
    title: "Home",
  },
  tooltip: "",
  modal: null,
  drawer: false,
  closeModal: () => {
    const currentModal = get().modal;
    if (currentModal) {
      set({
        modal: {
          ...currentModal,
          isOpen: false,
        },
      });
      // remove content from DOM but only after transition finished
      setTimeout(() => {
        set({
          modal: null,
        });
      }, 300);
    }
  },
  closeDrawer: () => {
    const drawer = get().drawer;
    set({
      drawer: false,
    });
  },
}));
