import { Fragment } from "react";
import styled from "styled-components";

import Backdrop from "@/components/atoms/Backdrop";
import ModalContainer from "@/components/atoms/ModalContainer";

import MenuItem from "@/components/molecules/MenuItem";

import Portal from "@/components/templates/Portal";

const Container = styled.aside<Pick<SidebarViewProps, "sidebarCollapsed">>`
  height: inherit;
  width: ${({ sidebarCollapsed }) => (sidebarCollapsed ? "55px" : "256px")};
  min-width: ${({ sidebarCollapsed }) => (sidebarCollapsed ? "55px" : "256px")};
  display: flex;
  flex-direction: column;

  /* background-color: #d0d1d6; */
  border-right: 1px solid #d0d1d6;

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow-x: hidden;
  overflow-y: auto;
`;

const MenuListArea = styled.ul`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const SubMenuListArea = styled(MenuListArea)<{
  menuExpanded: boolean;
  subMenuCount: number;
}>`
  height: ${({ menuExpanded, subMenuCount, theme: { menuItem } }) =>
    menuExpanded
      ? `${(menuItem.height + menuItem.verticalMargin * 2) * subMenuCount}px`
      : 0};

  opacity: ${({ menuExpanded }) => (menuExpanded ? 1 : 0)};

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const BottomArea = styled.div`
  display: flex;
  justify-content: flex-end;

  border-top: 1px solid #d0d1d6;
`;

const CollapseIconArea = styled.div`
  height: inherit;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;

  cursor: pointer;
`;

const CollapseIcon = styled.div<Pick<SidebarViewProps, "sidebarCollapsed">>`
  font-size: 24px;
  transform: ${({ sidebarCollapsed }) => sidebarCollapsed && "rotateY(180deg)"};
  transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

interface SidebarViewProps {
  menuList: Array<{
    path: string;
    name: string;
    icon: JSX.Element;
    children: Array<{
      path: string;
      name: string;
      depth: number;
      parent: string;
    }>;
  }>;

  sidebarCollapsed: boolean;

  isRootMenuActive: (path: string) => boolean;
  isOpenedCategory: (path: string) => boolean;
  isSelectedCategory: (path: string) => boolean;
  isOpenedMenuList: (path: string) => boolean;
  isSelectedMenu: (path: string) => boolean;

  onClickCategory: (path: string) => () => void;
  onClickMenu: (values: { path: string; parent: string }) => () => void;
  onClickCollapseSidebar: () => void;
}

const SidebarView = ({
  menuList,
  sidebarCollapsed,
  isRootMenuActive,
  isOpenedCategory,
  isSelectedCategory,
  isOpenedMenuList,
  isSelectedMenu,
  onClickCategory,
  onClickMenu,
  onClickCollapseSidebar,
}: SidebarViewProps) => {
  return (
    <Container sidebarCollapsed={sidebarCollapsed}>
      <MainArea>
        <MenuListArea>
          {menuList.map(({ path, name, icon, children }) => (
            <MenuItem
              key={path}
              isRoot={true}
              isRootMenuActive={isRootMenuActive(path)}
              isSelectedMenu={isSelectedCategory(path)}
              icon={icon}
              name={name}
              sidbarCollapsed={sidebarCollapsed}
              isOpenedCategory={isOpenedCategory(path)}
              onClickMenu={onClickCategory(path)}
            >
              <SubMenuListArea
                menuExpanded={isOpenedMenuList(path)}
                subMenuCount={children.length}
              >
                {isOpenedMenuList(path) &&
                  children.map(({ path, name, depth, parent }) => (
                    <Fragment key={path}>
                      <MenuItem
                        // key={path}
                        isSelectedMenu={isSelectedMenu(path)}
                        name={name}
                        depth={depth}
                        onClickMenu={onClickMenu({ path, parent })}
                      />
                      {isSelectedMenu(path) && (
                        <Portal>
                          {(close) => (
                            <Backdrop>
                              <ModalContainer
                                width="auto"
                                height="auto"
                                // css={`
                                //   position: fixed;
                                //   top: calc(50% - 75px);
                                //   left: calc(50% - 50px);
                                // `}
                              >
                                <div
                                  css={`
                                    width: 200px;
                                    height: 100px;
                                    display: flex;
                                    flex-direction: column;
                                    padding: 10px;
                                  `}
                                >
                                  <div
                                    css={`
                                      display: flex;
                                      justify-content: space-between;
                                    `}
                                  >
                                    <div>title area</div>
                                    <button onClick={close}>close</button>
                                  </div>
                                  <div
                                    css={`
                                      height: inherit;
                                      display: flex;
                                      align-items: center;
                                      justify-content: center;
                                    `}
                                  >
                                    content
                                  </div>
                                </div>
                              </ModalContainer>
                            </Backdrop>
                          )}
                        </Portal>
                      )}
                    </Fragment>
                  ))}
              </SubMenuListArea>
            </MenuItem>
          ))}
        </MenuListArea>
      </MainArea>
      <BottomArea>
        <CollapseIconArea onClick={onClickCollapseSidebar}>
          <CollapseIcon sidebarCollapsed={sidebarCollapsed}>🏃‍♀️</CollapseIcon>
        </CollapseIconArea>
      </BottomArea>
    </Container>
  );
};

export default SidebarView;
