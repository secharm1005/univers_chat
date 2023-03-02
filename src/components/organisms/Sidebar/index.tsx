/// <reference types="styled-components/cssprop" />
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

import SidebarView from "./SidebarView";

const menuList = [
  {
    path: "category1",
    name: "Category 1",
    icon: <span>🙂</span>,
    children: [
      {
        path: "menu1",
        name: "Menu 1",
        depth: 1,
        parent: "category1",
      },
    ],
  },
  {
    path: "category2",
    name: "Category 2",
    icon: <span>😀</span>,
    children: [
      {
        path: "menu2",
        name: "Menu 2",
        depth: 1,
        parent: "category2",
      },
    ],
  },
  {
    path: "category3",
    name: "Category 3",
    icon: <span>😆</span>,
    children: [
      {
        path: "sample",
        name: "Sample",
        depth: 1,
        parent: "category3",
      },
      {
        path: "menu4",
        name: "Menu 4",
        depth: 1,
        parent: "category3",
      },
    ],
  },
];

const Sidebar = () => {
  const { push, replace } = useRouter();

  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [openedCategories, setOpenedCategories] = useState<Set<string>>(
    new Set()
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const onClickCategory = useCallback(
    (path: string) => () => {
      setOpenedCategories((categories) => {
        const openedCategories = new Set(categories);
        if (openedCategories.has(path)) openedCategories.delete(path);
        else openedCategories.add(path);
        return openedCategories;
      });
    },
    []
  );

  const onClickMenu = useCallback(
    ({ path, parent }: { path: string; parent: string }) =>
      () => {
        if (selectedMenu === path) return;

        setSelectedCategory(parent);
        setSelectedMenu(path);

        if (path === "sample") {
          push(`/${path}`);
        } else {
          replace("/");
        }
      },
    [push, replace, selectedMenu]
  );

  const onClickCollapseSidebar = useCallback(() => {
    setSidebarCollapsed(!sidebarCollapsed);
  }, [sidebarCollapsed]);

  const props = {
    menuList,

    sidebarCollapsed,

    isRootMenuActive: (path: string) =>
      sidebarCollapsed && selectedCategory === path,
    isOpenedCategory: (path: string) => openedCategories.has(path),
    isSelectedCategory: (path: string) => selectedCategory === path,
    isOpenedMenuList: (path: string) =>
      !sidebarCollapsed && openedCategories.has(path),
    isSelectedMenu: (path: string) => selectedMenu === path,

    onClickCategory,
    onClickMenu,
    onClickCollapseSidebar,
  };

  return <SidebarView {...props} />;
};

export default Sidebar;
