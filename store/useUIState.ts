import { create } from "zustand";
import { getImageUrl } from "@/api/storage";
interface UIState {
    categoryLabel: string;
    headerImageSrc: string;
    setCategoryLabel: (categoryLabel: string) => void;
    setHeaderImageSrc: (headerImageSrc: string) => void;
}

const useUIState = create<UIState>((set) => ({
    categoryLabel: "",
    headerImageSrc: "/img/main.jpg",
    setCategoryLabel: (categoryLabel: string) => set({ categoryLabel }),
    setHeaderImageSrc: (headerImageSrc: string) => set({ headerImageSrc }),
}));

export default useUIState;
