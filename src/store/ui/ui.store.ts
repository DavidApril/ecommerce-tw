

import { create } from 'zustand'

interface State {
    isSideMenuOpen: boolean;
    isMobileFiltersOpen: boolean;

    openSideMenu: () => void
    closeSideMenu: () => void
    
    openMobileFilters: () => void
    closeMobileFilters: () => void
}

export const useUIStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    isMobileFiltersOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false}),

    openMobileFilters: () => set({ isMobileFiltersOpen: true }),
    closeMobileFilters: () => set({ isMobileFiltersOpen: false })

}))