import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  isGlobalError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      isGlobalError: false,
      error: null,
    };
    this.onClickRetry = this.onClickRetry.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true, error };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  //   // logErrorToMyService(error, errorInfo);
  //   console.log("error: ", error);
  //   console.log("errorInfo: ", errorInfo.componentStack);
  //   // this.setState({ hasError: true });
  // }

  onClickRetry() {
    this.setState({ hasError: false, error: null, isGlobalError: false });
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return (
        <div
          style={{
            height: "100%",
            width: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            border: "2px dashed red",
          }}
        >
          <div>문제 발생!</div>
          <button onClick={this.onClickRetry}>되돌리기</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
