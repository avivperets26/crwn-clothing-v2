import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Import your Redux store
import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
