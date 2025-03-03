import { create } from "zustand";

interface UIState {
    category: string;
    headerImageSrc: string;
    setCategory: (category: string) => void;
    setHeaderImageSrc: (headerImageSrc: string) => void;
}

const useUIState = create<UIState>((set) => ({
    category: "",
    headerImageSrc: "/img/ramen.jpg",
    setCategory: (category: string) => set({ category }),
    setHeaderImageSrc: (headerImageSrc: string) => set({ headerImageSrc }),
}));

export default useUIState;
