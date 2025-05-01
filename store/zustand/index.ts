import { create } from 'zustand';

interface SelectedFilters {
  environment: string[];
  comfort: string[];
  entertainment: string[];
  typesOfHouses: string[];
  typePlacement: string[];
  priceRange: [number, number];
}

interface CatalogItemType {
  id: string;
  environment: string[];
  comfort: string[];
  entertainment: string[];
  type: string[];
  description: string[];
  price: string;
  [key: string]: any;
}

interface HousesStore {
  originalHouses: CatalogItemType[];
  displayedHouses: CatalogItemType[];
  selectedFilters: SelectedFilters;
  isLoading: boolean;
  error: boolean;
  setInitialData: (data: CatalogItemType[]) => void;
  toggleFilter: (category: keyof SelectedFilters, value: string) => void;
  selectSingleType: (value: string) => void;
  setPriceRange: (value: [number, number]) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

const useHousesStore = create<HousesStore>((set, get) => ({
  originalHouses: [],
  displayedHouses: [],
  selectedFilters: {
    environment: [],
    comfort: [],
    entertainment: [],
    typesOfHouses: [],
    typePlacement: [],
    priceRange: [1000, 50000],
  },
  isLoading: false,
  error: false,

  setInitialData: (data) => set({
    originalHouses: data,
    displayedHouses: data,
    isLoading: false,
    error: false
  }),

  toggleFilter: (category, value) => {
    const state = get();
    const filters = { ...state.selectedFilters };
    const index = filters[category].indexOf(value);
    
    if (index === -1) {
      filters[category].push(value);
    } else {
      filters[category].splice(index, 1);
    }
    
    set({ selectedFilters: filters });
    get().applyFilters();
  },

  selectSingleType: (value) => {
    const state = get();
    const filters = { ...state.selectedFilters, typesOfHouses: [value] };
    set({ selectedFilters: filters });
    get().applyFilters();
  },

  setPriceRange: (value) => {
    const state = get();
    const filters = { ...state.selectedFilters, priceRange: value };
    set({ selectedFilters: filters });
    get().applyFilters();
  },

  resetFilters: () => {
    const state = get();
    const filters = {
      environment: [],
      comfort: [],
      entertainment: [],
      typesOfHouses: [],
      typePlacement: [],
      priceRange: [1000, 50000],
    };
    set({ 
      selectedFilters: filters,
      displayedHouses: state.originalHouses 
    });
  },

  applyFilters: () => {
    const state = get();
    let filteredHouses = [...state.originalHouses];
    const { selectedFilters } = state;

    // Применяем фильтры
    if (selectedFilters.environment.length > 0) {
      filteredHouses = filteredHouses.filter(house =>
        selectedFilters.environment.every(filter => 
          house.environment.includes(filter)
        )
      );
    }

    if (selectedFilters.comfort.length > 0) {
      filteredHouses = filteredHouses.filter(house =>
        selectedFilters.comfort.every(filter => 
          house.comfort.includes(filter)
        )
      );
    }

    // Аналогично для остальных фильтров...

    if (selectedFilters.typesOfHouses.length > 0) {
      filteredHouses = filteredHouses.filter(house =>
        selectedFilters.typesOfHouses.every(filter => 
          house.type.includes(filter)
        )
      );
    }

    // Фильтрация по цене
    const [minPrice, maxPrice] = selectedFilters.priceRange;
    filteredHouses = filteredHouses.filter(house => {
      const priceNumber = parseInt(house.price.replace(/\s+/g, '').replace('₽', ''));
      return priceNumber >= minPrice && priceNumber <= maxPrice;
    });

    set({ displayedHouses: filteredHouses });
  }
}));

// Для серверного доступа
export const housesStore = {
  getState: useHousesStore.getState,
  setState: useHousesStore.setState,
};

// Для клиентских компонентов
export default useHousesStore;

// import request from "@/utils/request";
// import create, { StateSelector } from "zustand";
// import shallow from "zustand/shallow";

// type HouseType = {
//     houses: [],
//     error: boolean,
//     isLoading: boolean,
// }

// const initialState: HouseType = {
//     isLoading: false,
//     error: false,
//     houses: [],
//     selectedFilters: {
//         environment: [],
//         comfort: [],
//         entertainment: [],
//         typesOfHouses: [],
//         typePlacement: [],
//         priceRange: [1000, 50000],
//       },
// };

// const store = create<HouseType>((set) => ({
//   ...initialState,

//   setIsLoading: () =>
//     set((state) => ({ isLoading: !state.isLoading })),

//   setIsError: (error) => set({ error }),

//   selectSingleType: (payload) => set((state) => {
//     state.selectedFilters.typesOfHouses = [payload];
//     // housesSlice.caseReducers.applyAllFilters(state);
//     // this.applyAllFilters()
//   }),

//   setPriceRange: (payload) => set((state) => {
//     state.selectedFilters.priceRange = payload;
//     // this.applyAllFilters()
//     // housesSlice.caseReducers.applyAllFilters(state);
//   }),

//   applyFilters() {

//   },


//   async getHouses() {
//     const data = await request('/url');
//   }
// }));

// const useHouseStore: <T>(
//   selector: StateSelector<HouseType, T>
// ) => T = (selector) => store(selector, shallow);

// export default useHouseStore;
