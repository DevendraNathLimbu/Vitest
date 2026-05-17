import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component test suite", () => {
    it("should render the app with correct initial state", () => {
        render(<App/>)
        screen.debug(undefined, 100000000)
    })
})