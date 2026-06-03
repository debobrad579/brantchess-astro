import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const externalLinks = [
  { href: "https://www.chess.ca", label: "CFC" },
  { href: "https://www.fide.com", label: "FIDE" },
  { href: "https://www.chess.com", label: "Chess.com" },
  { href: "https://lichess.org/", label: "Lichess" },
  { href: "https://en.chessbase.com/", label: "Chessbase" },
  { href: "https://forum.chesstalk.com/", label: "Chess Talk" },
  { href: "https://theweekinchess.com/", label: "The Week in Chess" },
  { href: "https://chesscafe.com/", label: "Chess Cafe" },
  { href: "https://www.chesspublishing.com/", label: "Chess Publishing" },
]

function ExternalLinks() {
  return (
    <>
      {externalLinks.map(({ href, label }) => (
        <DropdownMenuItem key={href} asChild>
          <a href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        </DropdownMenuItem>
      ))}
    </>
  )
}

function ThemeOptions() {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("light")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <>
      <DropdownMenuItem onClick={() => setThemeState("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setThemeState("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setThemeState("system")}>
        System
      </DropdownMenuItem>
    </>
  )
}

export function Navbar() {
  return (
    <nav className="relative flex items-center justify-between bg-navbar px-5 py-2 text-navbar-foreground sm:px-10 md:px-20 lg:px-[10vw]">
      <a href="/">
        <img src="logo.svg" className="w-28" />
      </a>
      <div className="xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={null}
              size={null}
              className="hover:bg-navbar-muted"
            >
              <Menu size={64} />
              <span className="sr-only">Hamburger menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <a href="/schedule">Schedule & Games</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/champions">Brantford Chess Champions</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/harmony-square">Harmony Square</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/learning-resources">Learning Resources</a>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Links</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <ExternalLinks />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <ThemeOptions />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="absolute left-1/2 hidden -translate-x-1/2 gap-1 xl:flex">
        <Button asChild variant={null} className="hover:bg-navbar-muted">
          <a href="/schedule">Schedule & Games</a>
        </Button>
        <Button asChild variant={null} className="hover:bg-navbar-muted">
          <a href="/champions">Brantford Chess Champions</a>
        </Button>
        <Button asChild variant={null} className="hover:bg-navbar-muted">
          <a href="/harmony-square">Harmony Square</a>
        </Button>
        <Button asChild variant={null} className="hover:bg-navbar-muted">
          <a href="/learning-resources">Learning Resources</a>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={null} className="hover:bg-navbar-muted">
              Links
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <ExternalLinks />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden xl:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={null}
              size="icon"
              className="hover:bg-navbar-muted"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <ThemeOptions />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
