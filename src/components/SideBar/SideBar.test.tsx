import { forwardRef, ReactNode } from "react";

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import SideBar from "./SideBar";

interface LinkProps {
  to?: string;
  children: ReactNode;
}

vi.mock("@tanstack/react-router", () => ({
  Link: forwardRef<HTMLAnchorElement, LinkProps>(({ to, children }, ref) => (
    <a
      ref={ref}
      href={to}
    >
      {children}
    </a>
  )),
}));

describe("SideBar", () => {
  it("should render menu links", () => {
    const { getByText } = render(<SideBar open />);

    expect(getByText("Dashboard").parentElement?.parentElement).toHaveAttribute("href", "/");
    expect(getByText("Profile").parentElement?.parentElement).toHaveAttribute("href", "/profile");

    fireEvent.click(getByText("Management"));
    expect(getByText("Users").parentElement?.parentElement).toHaveAttribute(
      "href",
      "/management/users"
    );
    expect(getByText("Roles").parentElement?.parentElement).toHaveAttribute(
      "href",
      "/management/roles"
    );
  });
});
