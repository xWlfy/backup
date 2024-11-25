import { create } from 'zustand';
import { Star } from '../types/star';

type StarStore = {
  selectedStar: Star | null;
  recentStars: Star[];
  setSelectedStar: (star: Star) => void;
  addRecentStar: (star: Star) => void;
};

export const useStarStore = create<StarStore>((set) => ({
  selectedStar: null,
  recentStars: [],
  setSelectedStar: (star) => set({ selectedStar: star }),
  addRecentStar: (star) =>
    set((state) => ({
      recentStars: [star, ...state.recentStars].slice(0, 5),
    })),
}));