import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};
const ComponentWithOutError = () => <h1>NoError</h1>;
const prop = undefined;
const ComponentWithError = () => <h1>{prop.hola}</h1>;
export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);
export const ErrorBoundaryWithOutError = () => (
  <ErrorBoundary>
    <ComponentWithOutError />
  </ErrorBoundary>
);
