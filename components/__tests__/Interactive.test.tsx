import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Interactive from "../Interactive";

describe("Interactive — cosmic console", () => {
  it("renders the console with its heading and all controls", () => {
    render(<Interactive />);

    expect(
      screen.getByRole("heading", { name: /cosmic console/i })
    ).toBeInTheDocument();
    // theme button
    expect(
      screen.getByRole("button", { name: /theme:/i })
    ).toBeInTheDocument();
    // counter buttons
    expect(screen.getByRole("button", { name: /^increment$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^decrement$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^reset$/i })).toBeInTheDocument();
    // name input
    expect(screen.getByRole("textbox", { name: /your name/i })).toBeInTheDocument();
  });

  it("starts the counter at zero", () => {
    render(<Interactive />);
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("0");
  });

  it("increments the counter by one on each click", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const inc = screen.getByRole("button", { name: /^increment$/i });
    await user.click(inc);
    await user.click(inc);
    await user.click(inc);
    expect(screen.getByTestId("counter")).toHaveTextContent("3");
  });

  it("decrements the counter and allows negative values", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const dec = screen.getByRole("button", { name: /^decrement$/i });
    await user.click(dec);
    await user.click(dec);
    expect(screen.getByTestId("counter")).toHaveTextContent("-2");
  });

  it("resets the counter to zero after changes", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const inc = screen.getByRole("button", { name: /^increment$/i });
    const reset = screen.getByRole("button", { name: /^reset$/i });
    await user.click(inc);
    await user.click(inc);
    await user.click(reset);
    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });

  it("cycles the theme button through the available themes and back to start", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const themeBtn = screen.getByRole("button", { name: /theme:/i });
    // initial
    expect(themeBtn).toHaveTextContent(/void/i);
    await user.click(themeBtn);
    expect(themeBtn).toHaveTextContent(/aurora/i);
    await user.click(themeBtn);
    expect(themeBtn).toHaveTextContent(/inferno/i);
    await user.click(themeBtn);
    expect(themeBtn).toHaveTextContent(/void/i);
  });

  it("applies the theme class to the console surface", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const console_ = screen.getByTestId("console");
    expect(console_.className).toMatch(/theme-void/);
    await user.click(screen.getByRole("button", { name: /theme:/i }));
    expect(console_.className).toMatch(/theme-aurora/);
  });

  it("shows a default greeting before the user types a name", () => {
    render(<Interactive />);
    const greeting = screen.getByTestId("greeting");
    expect(greeting.textContent?.length ?? 0).toBeGreaterThan(0);
    expect(greeting).toHaveTextContent(/welcome/i);
    expect(greeting.textContent).not.toMatch(/, /);
  });

  it("personalizes the greeting as the user types a name", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const input = screen.getByRole("textbox", { name: /your name/i });
    await user.type(input, "Ada");
    expect(screen.getByTestId("greeting")).toHaveTextContent(/ada/i);
  });

  it("handles a very long name without crashing", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const input = screen.getByRole("textbox", { name: /your name/i });
    const longName = "Z".repeat(500);
    await user.type(input, longName);
    expect(screen.getByTestId("greeting")).toHaveTextContent(longName);
  });

  it("does not surface an exception if the user clicks reset on a fresh console", async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    await user.click(screen.getByRole("button", { name: /^reset$/i }));
    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });

  it("combines all controls in a single accessible region", () => {
    render(<Interactive />);
    const region = screen.getByRole("region", { name: /cosmic console/i });
    expect(within(region).getByTestId("counter")).toBeInTheDocument();
  });
});