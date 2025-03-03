import { create } from "zustand";

interface UIState {
    categoryLabel: string;
    headerImageSrc: string;
    setCategoryLabel: (categoryLabel: string) => void;
    setHeaderImageSrc: (headerImageSrc: string) => void;
}

const useUIState = create<UIState>((set) => ({
    categoryLabel: "",
    headerImageSrc: "/img/ramen.jpg",
    setCategoryLabel: (categoryLabel: string) => set({ categoryLabel }),
    setHeaderImageSrc: (headerImageSrc: string) => set({ headerImageSrc }),
}));

export default useUIState;
