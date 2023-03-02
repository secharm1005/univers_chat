import { Meta, Story } from "@storybook/react";
import Wireframe from ".";

export default {
  title: "Atoms/Wireframe",
  component: Wireframe,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const NoElement: Story<typeof Wireframe> = () => (
  <div
    style={{
      width: "500px",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Wireframe>Main Area</Wireframe>
  </div>
);

NoElement.parameters = {
  componentSubtitle: "Children이 string인 경우",
  controls: {
    hideNoControlsWarning: true,
  },
  docs: {
    description: {
      component:
        "팝업 컴포넌트의 `children`을 `Title` `Content` `Footer` 템플릿으로 구성함 <br />width/height 속성을 통해 팝업 사이즈 조정이 가능",
    },
  },
};

export const HasElement: Story<typeof Wireframe> = () => (
  <div
    style={{
      width: "500px",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Wireframe>
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#efefef",
        }}
      >
        Main
      </div>
    </Wireframe>
  </div>
);

HasElement.parameters = {
  docs: {
    description: {
      story: "템플릿이 없고 children 내부를 자유로운 형식으로 추가 가능",
    },
  },
};
