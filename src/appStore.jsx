import {create} from "zustand";
import { persist } from "zustand/middleware";

let appstore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

appstore = persist(appstore, { name: "appstore" });
export const useAppStore = create(appstore);


