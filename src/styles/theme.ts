import { DefaultTheme } from "styled-components";

const exampleItem = {
  height: 40,
};

type ExampleItemType = typeof exampleItem;

const menuItem = {
  height: 40,
  verticalMargin: 4,
  rootIconSize: 50,
};

const home = {
  maxWidth: "1100px",
  fontMono:
    "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',  'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",

  calloutRgb: "238, 240, 241",
  calloutBorderRgb: "172, 175, 176",

  borderRadius: "12px",

  cardRgb: "180, 185, 188",
  cardBorderRgb: "131, 134, 135",

  primaryGlow:
    "conic-gradient(from 180deg at 50% 50%,#16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg)",

  tileBorder:
    "conic-gradient(#00000080, #00000040, #00000030, #00000020, #00000010, #00000010, #00000080)",
  tileStartRgb: "239, 245, 249",
  tileEndRgb: "228, 232, 233",
};

declare module "styled-components" {
  export interface DefaultTheme {
    exampleItem: ExampleItemType;
    menuItem: typeof menuItem;
    home: typeof home;
  }
}
const theme: DefaultTheme = { exampleItem, menuItem, home };

export default theme;
