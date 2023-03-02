import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
`;

const MenuArea = styled.div`
  height: ${({ theme: { menuItem } }) => `${menuItem.height}px`};
  width: inherit;
  display: flex;
  align-items: center;

  padding-right: 16px;
  margin: ${({ theme: { menuItem } }) => `${menuItem.verticalMargin}px 0`};

  &:hover {
    background-color: #ffe1bf;
  }
`;

const ActiveBar = styled.div<{ isActive?: boolean }>`
  height: inherit;
  width: 5px;
  min-width: 5px;
  display: flex;
  background-color: ${({ isActive = false }) => isActive && "#ff9a26"};
  transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const RootIconArea = styled.div`
  height: inherit;
  width: ${({ theme: { menuItem } }) => `${menuItem.rootIconSize}px`};
  min-width: ${({ theme: { menuItem } }) => `${menuItem.rootIconSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 5px;
  padding-bottom: 4px;

  font-size: 20px;
`;

const SelectableArea = styled.div<{ sidebarCollapsed?: boolean }>`
  height: inherit;
  display: flex;
  align-items: center;
  flex-grow: 1;
  opacity: ${({ sidebarCollapsed }) => (sidebarCollapsed ? 0 : 1)};
  transition: opacity 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Title = styled.span<{ depth?: number; isActive?: boolean }>`
  flex-grow: 1;
  font-size: 14px;

  padding-left: ${({ depth = 0, theme: { menuItem } }) =>
    depth > 0
      ? depth === 1
        ? `${menuItem.rootIconSize}px`
        : `${depth * 16 + menuItem.rootIconSize}px`
      : "unset"};

  line-height: 18px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-weight: ${({ isActive }) => isActive && 700};
`;

const CollapseIconArea = styled.div<{ collapsed?: boolean }>`
  height: 20px;

  font-size: 16px;
  transform: ${({ collapsed }) => collapsed && "rotate(180deg)"};
  transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export interface MenuItemViewProps {
  isRoot?: boolean;
  isRootMenuActive?: boolean;
  isSelectedMenu: boolean;
  icon?: JSX.Element;
  name: string;
  depth?: number;
  sidbarCollapsed?: boolean;
  isOpenedCategory?: boolean;
  onClickMenu: () => void;
  children?: JSX.Element;
}

const MenuItemView = ({
  isRoot = false,
  isRootMenuActive,
  isSelectedMenu,
  icon,
  name,
  depth,
  sidbarCollapsed,
  isOpenedCategory,
  onClickMenu,
  children,
}: MenuItemViewProps) => {
  return (
    <Container>
      <MenuArea>
        <ActiveBar isActive={isRoot ? isRootMenuActive : isSelectedMenu} />
        {isRoot && <RootIconArea>{icon}</RootIconArea>}
        <SelectableArea
          sidebarCollapsed={sidbarCollapsed}
          onClick={onClickMenu}
        >
          <Title depth={depth} isActive={isSelectedMenu}>
            {name}
          </Title>
          {isRoot && (
            <CollapseIconArea collapsed={isOpenedCategory}>🔽</CollapseIconArea>
          )}
        </SelectableArea>
      </MenuArea>
      {children}
    </Container>
  );
};

export default MenuItemView;
