import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { BaseButton } from "./button";

describe("test Button component", () => {
  beforeEach(() => {
    render(<BaseButton text="Test"></BaseButton>);
  });

  it("Canrender renders the button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("show text sended as children props", () => {
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
