# Template v0.2.0 - Create Next App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
또는 debugger 실행(launch.json 설정되어있음)
```

## 스펙

- next.js 13
- node 18
- react 18
- typescript
- styled-components
- axios
- recoil <- 전역 상태 관리(사용하지 않으면 제거해주세요)
- react-query <- 서버 데이터 호출 및 캐싱(사용하지 않으면 제거해주세요)
- storybook <- 제거하기 까다롭기 때문에 사용하지 않을 예정이라면 v0.1.0 버전으로 받아주세요
- jest
- ant design <- UI 컴포넌트(필요 시 추가 설치)
- dayjs <- moment 대체(필요 시 추가 설치)

<br />

## 네이밍 컨벤션

### PascalCase

- react component
- interface
- type
- styled component

### camelCase

- variable
- function
- custom hook

### kebab-case

- page component
- environment variables file
- non-component file(css, image, etc..)

### SNAKE_CASE

- constants

<br />

## 타입스크립트 파일 ts/tsx 확장자

- **react component**만 **tsx 확장자** 사용 이외에는 ts 확장자 사용

<br />

## 디렉토리 구조

### Root

```
.vscode
pages
public
src
.env
.eslintrc.json
.gitignore
.gitmessage.txt
.jest.config.js
.jest.setup.js
next-env.d.ts
next.config.js
package-lock.json
package.json
README.md
tsconfig.json
```

### 리액트 컴포넌트

- 아토믹 디자인
- 로직 영역인 index.tsx와 마크업 영역인 --View.tsx를 한쌍으로 함
- 레이아웃만 들어가는 templates는 예외적으로 한 파일로 구성

```
pages
  +-- _app.tsx
  +-- _document.tsx
  +-- index.tsx
  +-- login.tsx
src
  +-- components
  │   +-- atoms
  │   │   +-- Button
  │   │       +-- index.tsx
  │   │       +-- ButtonView.tsx
  │   │       +-- Button.stories.tsx
  │   │       +-- Button.test.tsx
  │   +-- molecules
  │   │   +-- ItemList
  │   │       +-- index.tsx
  │   │       +-- ItemListView.tsx
  │   +-- organisms
  │   │   +-- Sidebar
  │   │       +-- index.tsx
  │   │       +-- SidebarView.tsx
  │   +-- pages
  │   │   +-- HomePage
  │   │       +-- index.tsx
  │   │       +-- HomePageView.tsx
  │   │   +-- LoginPage
  │   │       +-- index.tsx
  │   │       +-- LoginPageView.tsx
  │   +-- templates
  │   │   +-- HomeLayout.tsx
  │   │   +-- LoginLayout.tsx
  │   │   +-- ErrorBoundary.tsx
  │   │   +-- Portal.tsx
  │   │
```

```typescript
import Button from "@/components/atoms/Button";
...
return (
  ...
  <Button />
  ...
);
```

### 나머지

#### case 1 - 일반적

- 대분류는 ts파일 단위로 하고 import시 깔끔하게 `utils`까지만 가져오도록 index.ts로 묶는다

```
src
  +-- utils
  │   +-- workflow.ts
  │   +-- api.ts
  │   +-- index.ts
  +-- styles
  │   +-- css-override.css
  │   +-- globalStyle.ts
  │   +-- theme.ts
  │   +-- index.ts
  │
```

```typescript
import { apiUtil } from "@/utils";
apiUtil.handler();
```

#### case 2 - 하위 디렉토리가 구분 상 필요한 경우는 어쩔 수 없지만 되도록 이런 식의 depth가 들어가는 구조는 피할 것

```
src
  +-- apis
  │   +-- workflows
  │   │   +-- workflow.ts
  │   │   +-- execute.ts
  │   │   +-- index.ts
  │   +-- library
  │   │   +-- library.ts
  │   │   +-- index.ts
  │   +-- index.ts
  │   │
```

```typescript
import { workflowAPI } from "@/apis";
const listWorkflow = async () => await workflowAPI.list();
```

### 기타

- 이미지 등 리소스의 경우 `public` 하위에 넣는 것을 권장

```
public
  +-- images
  │   +-- ic-arrow.svg
  │   +-- ic-circle.svg
  +-- fonts
  │   +-- NotoSansKRRegular.otf
  │   +-- NotoSansKRBold.otf
  │
```
