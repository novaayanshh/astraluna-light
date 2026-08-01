import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, LogOut, Menu, Sparkles, User, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
m
const NAV_ITEMS = [
  {
    label: "Horoscopes",
    href: "/horoscopes",
    dropdown: [
      { label: "Yearly Horoscope", href: "/horoscopes?period=Yearly" },
      { label: "Monthly Horoscope", href: "/horoscopes?period=Monthly" },
    ],
  },
  { label: "Consultation", href: "/consultation" },
  {
    label: "Doshas",
    href: "/doshas",
    dropdown: [
      { label: "Mangal Dosh (Manglik Dosh)", href: "/doshas#mangal-dosh" },
      { label: "Kaal Sarp Dosh", href: "/doshas#kaal-sarp-dosh" },
      { label: "Chandra Dosh", href: "/doshas#chandra-dosh" },
      { label: "Pitra Dosh", href: "/doshas#pitra-dosh" },
      { label: "Shani Dosh", href: "/doshas#shani-dosh" },
      { label: "Guru Chandal Dosh", href: "/doshas#guru-chandal-dosh" },
      { label: "Grahan Dosh (Eclipse Dosh)", href: "/doshas#grahan-dosh" },
      { label: "Ketu Dosh", href: "/doshas#ketu-dosh" },
      { label: "Rahu Dosh", href: "/doshas#rahu-dosh" },
    ],
  },
  { label: "Muhurat", href: "/muhurat" },
  { label: "Shop", href: "/shop" },
  { label: "Blogs", href: "/blog" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  function handleSignOut() {
    signOut();
    setOpen(false);
    navigate({ to: "/" });
  }

  const initials = user
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-[0_4px_24px_-12px_oklch(0.7_0.2_55/0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10"
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Astrotring home">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_20px_oklch(0.75_0.19_55/0.4)] transition-transform duration-500 group-hover:rotate-[20deg]">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Astro<span className="gradient-gold">tring</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = "dropdown" in item && item.dropdown;
            return (
              <li
                key={item.href}
                className="group/nav relative flex items-center"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
                <Link
                  to={item.href}
                  className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />
                  )}
                </Link>

                {hasDropdown && (
                  <div
                    className="invisible absolute left-0 top-full z-50 min-w-[200px] translate-y-1 rounded-2xl glass-strong p-2 opacity-0 shadow-[0_12px_40px_-12px_oklch(0.4_0.05_60/0.35)] transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100"
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="glass ring-gradient inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary via-accent to-primary text-xs font-bold text-white">
                    {initials}
                  </span>
                  {user.name.split(" ")[0]}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              className="btn-gold inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm"
            >
              <User className="h-4 w-4" strokeWidth={2.4} />
              Account
            </Link>
          )}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full glass text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden"
        >
          <ul className="mx-6 mb-4 flex flex-col gap-1 rounded-2xl glass-strong p-3">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith("/#") ? (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary"
                  >
                    <Sparkles
                      className="h-3.5 w-3.5 text-primary"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary"
                  >
                    <Sparkles
                      className="h-3.5 w-3.5 text-primary"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            {user ? (
              <>
                <li className="mt-2 rounded-xl bg-primary/5 px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{user.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-destructive hover:bg-destructive/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="btn-gold mt-2 flex h-11 items-center justify-center gap-2 rounded-full text-sm"
                >
                  <User className="h-4 w-4" />
                  Account
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}