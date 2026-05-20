import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("Form Testing", () => {
  it("allows user to type into inputs", async () => {
    const user = userEvent.setup();

    render(<App />);

    screen.debug();

    await user.type(screen.getByLabelText(/your name/i), "John");
    await user.type(screen.getByLabelText(/email/i), "john@gmail.com");
    await user.type(screen.getByLabelText(/password/i), "123456");

    expect(screen.getByLabelText(/your name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@gmail.com");
    expect(screen.getByLabelText(/password/i)).toHaveValue("123456");
  });
});