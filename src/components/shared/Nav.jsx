"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { urlPath } from "@/utils/url-helpers";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App({ tenant }) {
  const router = useRouter();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const supabase = getSupabaseBrowserClient();

  //
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push(`/${tenant}`);
      }
    });

    // end subscription event
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const menuItems = [
    {
      label: "Ticket List",
      href: urlPath("/tickets", tenant),
    },
    {
      label: "Create New Ticket",
      href: urlPath("/tickets/new", tenant),
    },
    {
      label: "User List",
      href: urlPath("/tickets/users", tenant),
    },
  ];

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      className=" border-b-1 border-gray-400"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.label}-${index}`}
            isActive={path === item.href}
            className={`border border-gray-400 p-2 rounded-md ${
              path === item.href
                ? "bg-white"
                : "bg-transparent hover:bg-gray-400"
            }`}
          >
            <Link
              className={`${
                path === item.href ? "text-black" : "text-slate-700 "
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="danger"
            href="/logout"
            variant="flat"
            onClick={(event) => {
              event.preventDefault();
              supabase.auth.signOut();
            }}
          >
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.label}-${index}`}
            isActive={path === item.href}
          >
            <Link
              color={
                path === item.href
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
