import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error){
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo){
    console.log('Error Info', errorInfo)
  }
  render() {
    return (
      this.state.hasError ? (<h1>Error</h1>) : (this.props.children)
      )
  }
}

export default ErrorBoundary;
