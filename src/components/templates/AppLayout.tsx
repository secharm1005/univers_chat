import { Children } from "react";
import styled from "styled-components";

import Wireframe from "../atoms/Wireframe";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeaderArea = styled.header`
  height: 50px;
  min-height: 50px;
  width: inherit;
`;

const CenterArea = styled.div`
  height: inherit;
  display: flex;
  flex-grow: 1;

  overflow: hidden;
`;

const SidebarArea = styled.div`
  height: inherit;
`;

const MainArea = styled.div`
  height: inherit;
  display: flex;
  flex-grow: 1;
`;

const AppLayout = ({ children }: { children: Array<JSX.Element> }) => {
  const [Header, Sidebar, Main] = Children.toArray(children);
  return (
    <Container>
      <HeaderArea>{Header}</HeaderArea>
      <CenterArea>
        <SidebarArea>{Sidebar}</SidebarArea>
        <MainArea>{Main}</MainArea>
      </CenterArea>
    </Container>
  );
};

AppLayout.HeaderArea = Wireframe;
AppLayout.SidebarArea = Wireframe;
AppLayout.MainArea = Wireframe;

export default AppLayout;
