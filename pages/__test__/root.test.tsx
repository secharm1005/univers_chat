import * as router from "next/router";
import { ThemeProvider } from "styled-components";
import { render, screen, fireEvent } from "@testing-library/react";
import { theme } from "../../src/styles";
import Root from "../index";

const useRouter = jest.spyOn(router, "useRouter");

describe("루트 페이지", () => {
  test("Next 로고를 클릭하면 sample 페이지로 전환", () => {
    useRouter.mockImplementationOnce(() => router.useRouter());

    render(
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    );

    const link = screen.getByRole("link", { name: /Next.js Logo/i });

    fireEvent.click(link);

    expect(useRouter).toEqual("/sample");
    //   const history = createMemoryHistory();
    // // mock push function
    // history.push = jest.fn();
    // const { getByText } = render(
    //   <MemoryRouter history={history}>
    //     <Link to="/hello">Click me</Link>
    //   </MemoryRouter>
    // );
    // // could be userEvent.click
    // // https://testing-library.com/docs/ecosystem-user-event/#clickelement-eventinit-options
    // fireEvent.click(getByText('Click me'));
    // // spy on push calls, assert on url (parameter)
    // expect(history.push).toHaveBeenCalledWith('/hello');
  });
});
