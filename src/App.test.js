import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

test("renders a post", async () => {
  render(<App />);
  const post = await screen.findByText(/what a pup/i);
  expect(post).toBeInTheDocument();
});
