import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import AppBar from "./AppBar";

describe("AppBar", () => {
  it("should render toggle sidebar button and title", () => {
    const { getByText, getByLabelText } = render(<AppBar />);

    expect(getByText("Boilerplate")).toBeInTheDocument();
    expect(getByLabelText("Toggle SideBar")).toBeInTheDocument();
  });

  it("should render icon based on open value", () => {
    const { getByTestId, rerender } = render(<AppBar />);
    expect(getByTestId("MenuIcon")).toBeInTheDocument();

    rerender(<AppBar open />);
    expect(getByTestId("MenuOpenIcon")).toBeInTheDocument();
  });

  it("should call toggle when click on toggle sidebar button", () => {
    const mockToggleSidebar = vi.fn();

    const { getByLabelText } = render(<AppBar toggle={mockToggleSidebar} />);
    fireEvent.click(getByLabelText("Toggle SideBar"));

    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
