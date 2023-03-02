import { atom, selector } from "recoil";

export const selectedMenu = atom<string>({
  key: "selectedMenuState",
  default: "menu1",
});

export const selectedCategory = atom<string>({
  key: "selectedCategoryState",
  default: "category1",
});

export const currentTabInfo = selector<string>({
  key: "currentTabInfoState",
  get: ({ get }) => {
    const currentCategoryPath = get(selectedCategory);
    const currentMenuPath = get(selectedMenu);

    return `${currentCategoryPath}/${currentMenuPath}`;
  },
});
