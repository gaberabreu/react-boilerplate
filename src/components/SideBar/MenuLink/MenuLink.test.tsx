import { forwardRef, ReactNode } from "react";

import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MenuLink from "./MenuLink";

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

describe("MenuLink", () => {
  it("should render as an anchor", () => {
    const { getByText } = render(
      <MenuLink
        icon={<AccountCircleIcon />}
        text="Profile"
        to="/profile"
      />
    );

    const menuLink = getByText("Profile");
    expect(menuLink.parentElement?.parentElement).toHaveAttribute("href", "/profile");
  });
});
