import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Rule from "../components/Rule";
import rules from "../data.json";
import { useDispatch } from "react-redux";

describe("Rule component", () => {
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))

  it("should render title and description", async () => {
    const { getByText } = render(<Rule rule={rules[0]} />);

    const title = getByText(rules[0].title);
    const description = getByText(rules[0].description);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(
      "If you don't have a mobile website, you don't have a website."
    );
    expect(description).toBeInTheDocument();
  });
  it("should not render description", async () => {
    render(<Rule rule={rules[0]} />);

    const title = screen.getByRole("presentation");
    const description = screen.getByRole("description");
    expect(description).toBeInTheDocument();
    fireEvent.click(title);
    expect(description).not.toBeVisible();
  });
});
