import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component test suite", () => {
    it("should render the app with correct initial state", () => {
        render(<App/>)
        screen.debug(undefined, 100000000)
    })

    it.only("should render component with props", () => {
        render(<App name="Learn testing in react"/>)
        const heading = screen.getByText("Learn testing in react")
        screen.debug(undefined, 100000000)
        expect(heading).toBeDefined()
    })
})