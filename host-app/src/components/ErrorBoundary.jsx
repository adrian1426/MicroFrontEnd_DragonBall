import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, errInfo) { }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ocurrió un error en el componente</h1>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;